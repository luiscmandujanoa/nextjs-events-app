import data from "@/data/events-data.json";
import EventCard from "@/components/EventCard";
import FadeIn from "@/components/FadeIn";

export default function EventsPage() {
    const events = data.events;

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10">
                <FadeIn>
                    <h1 className="font-display text-foreground text-4xl font-bold">
                        All Events
                    </h1>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <p className="text-muted mt-2">
                        Explore events available across all cities
                    </p>
                </FadeIn>
            </div>

            <FadeIn inView delay={0.2}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </FadeIn>
        </section>
    );
}
