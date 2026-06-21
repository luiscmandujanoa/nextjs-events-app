import Image from "next/image";
import { notFound } from "next/navigation";
import type { EventData } from "@/types/event";
import data from "@/data/data.json";

export default async function EventPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const event: EventData | undefined = data.events.find(
    (event) => event.id === eventId,
  );

  if (!event) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto mt-5">
      <h1 className="text-4xl font-bold">{event.title}</h1>
      <div className="relative w-full h-96 overflow-hidden rounded-xl">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          className="object-cover"
        />
      </div>
      <p>{event.description}</p>
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Get registered for this event</h3>
        <form className="flex gap-2">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border px3 py2"
          />
          <button
            type="submit"
            className="rounded-md bg-black text-white px-4 py-2 hover:cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
