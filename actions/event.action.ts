"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";

export async function registerEmail(
    eventId: string,
    city: string,
    prevState: { success: boolean; message: string },
    formData: FormData,
) {
    const email = formData.get("email")?.toString().trim();

    if (!email) {
        return { success: false, message: "El email es requerido." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { success: false, message: "El email no es válido." };
    }

    const filePath = path.join(process.cwd(), "data", "events-data.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);

    const eventIndex = data.events.findIndex(
        (e: { id: string }) => e.id === eventId,
    );

    if (eventIndex === -1) {
        return { success: false, message: "Evento no encontrado." };
    }

    const event = data.events[eventIndex];

    if (event.emails_registered.includes(email)) {
        return { success: false, message: "Este email ya está registrado." };
    }

    if (event.emails_registered.length >= event.capacity) {
        return { success: false, message: "Este evento está agotado." };
    }

    data.events[eventIndex].emails_registered.push(email);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

    revalidatePath(`/events/${city}/${eventId}`);

    return { success: true, message: "¡Registro exitoso!" };
}
