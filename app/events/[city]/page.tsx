import Link from "next/link";
import data from "@/data/events-data.json";
import EventCard from "@/components/EventCard";
import FadeIn from "@/components/FadeIn";

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
                    No events available in this city.
                </p>
                <Link
                    href="/events"
                    className="text-primary mt-4 inline-block hover:underline"
                >
                    View all events
                </Link>
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10">
                <FadeIn>
                    <h1 className="font-display text-foreground text-4xl font-bold">
                        {cityName}
                    </h1>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <p className="text-muted mt-2">
                        {events.length}{" "}
                        {events.length === 1 ? "event" : "events"} available
                    </p>
                </FadeIn>
            </div>

            <FadeIn inView delay={0.2}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((event, index) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </FadeIn>
        </section>
    );
}
