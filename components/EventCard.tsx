import Image from "next/image";
import Link from "next/link";
import type { EventData } from "@/types/event";

interface Props {
    event: EventData;
}

export default function EventCard({ event }: Props) {
    return (
        <Link
            href={`/events/${event.city}/${event.id}`}
            className="group border-border bg-surface hover:border-primary overflow-hidden rounded-xl border transition-colors"
        >
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col gap-2 p-4">
                <h2 className="font-display text-foreground group-hover:text-primary leading-snug font-semibold transition-colors">
                    {event.title}
                </h2>
                <div className="text-muted flex items-center justify-between text-sm">
                    <span>{event.cityName}</span>
                    <span className="font-mono">
                        {event.price === 0 ? "Free" : `$${event.price}`}
                    </span>
                </div>
                <p className="text-muted font-mono text-sm">
                    {new Date(event.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </p>
            </div>
        </Link>
    );
}
