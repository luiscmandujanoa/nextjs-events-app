"use client";

import { useActionState } from "react";
import { registerEmail } from "@/actions/event.action";

interface Props {
    eventId: string;
    city: string;
    spotsLeft: number;
}

const initialState = { success: false, message: "" };

export default function RegisterForm({ eventId, city, spotsLeft }: Props) {
    const registerEmailWithParams = registerEmail.bind(null, eventId, city);
    const [state, formAction, isPending] = useActionState(
        registerEmailWithParams,
        initialState,
    );

    if (spotsLeft <= 0) {
        return <p className="text-muted text-sm">Este evento está agotado.</p>;
    }

    return (
        <form action={formAction} className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="border-border bg-background text-foreground placeholder:text-muted focus:border-primary flex-1 rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none"
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-primary hover:bg-primary-hover rounded-lg px-6 py-2.5 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isPending ? "Registrando..." : "Register"}
                </button>
            </div>

            {state.message && (
                <p
                    className={`text-sm ${state.success ? "text-green-500" : "text-red-500"}`}
                >
                    {state.message}
                </p>
            )}
        </form>
    );
}
