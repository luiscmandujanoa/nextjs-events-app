import Image from "next/image";
import data from "@/data/events-data.json";
import Link from "next/link";

export default function EventsPage() {
  const events = data.events;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-foreground">
          Todos los eventos
        </h1>
        <p className="text-muted mt-2">
          Explora eventos disponibles en todas las ciudades
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.city}/${event.id}`}
            className="group rounded-xl overflow-hidden border border-border bg-surface hover:border-primary transition-colors"
          >
            <div className="w-full h-56 relative overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h2 className="font-display font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                {event.title}
              </h2>
              <div className="flex items-center justify-between text-sm text-muted">
                <span className="capitalize">{event.cityName}</span>
                <span className="font-mono">
                  {event.price === 0 ? "Free" : `$${event.price}`}
                </span>
              </div>
              <p className="text-sm text-muted font-mono">
                {new Date(event.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}