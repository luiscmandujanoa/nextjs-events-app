import Image from "next/image";
import Link from "next/link";
import data from "@/data/events-data.json";

export default async function CityPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;

    const cityData = data.cities.find((c) => c.id === city);
    const cityName = cityData?.name ?? city;
    const events = data.events.filter((event) => event.city === city);

    if (events.length === 0) {
        return (
            <section className="mx-auto max-w-7xl px-6 py-16 text-center">
                <h1 className="font-display text-foreground mb-4 text-4xl font-bold">
                    {cityName}
                </h1>
                <p className="text-muted">
                    No hay eventos disponibles en esta ciudad.
                </p>
                <Link
                    href="/events"
                    className="text-primary mt-4 inline-block hover:underline"
                >
                    Ver todos los eventos
                </Link>
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10">
                <h1 className="font-display text-foreground text-4xl font-bold">
                    {cityName}
                </h1>
                <p className="text-muted mt-2">
                    {events.length} {events.length === 1 ? "evento" : "eventos"}{" "}
                    disponibles
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <Link
                        key={event.id}
                        href={`/events/${city}/${event.id}`}
                        className="group border-border bg-surface hover:border-primary overflow-hidden rounded-xl border transition-colors"
                    >
                        <div className="relative h-56 w-full overflow-hidden">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col gap-2 p-4">
                            <h2 className="font-display text-foreground group-hover:text-primary leading-snug font-semibold transition-colors">
                                {event.title}
                            </h2>
                            <div className="text-muted flex items-center justify-between text-sm">
                                <span>{cityName}</span>
                                <span className="font-mono">
                                    {event.price === 0
                                        ? "Free"
                                        : `$${event.price}`}
                                </span>
                            </div>
                            <p className="text-muted font-mono text-sm">
                                {new Date(event.date).toLocaleDateString(
                                    "en-GB",
                                    {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    },
                                )}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
