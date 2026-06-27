import Image from "next/image";
import { notFound } from "next/navigation";
import type { EventData } from "@/types/event";
import data from "@/data/events-data.json";
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";

export default async function EventPage({
    params,
}: {
    params: Promise<{ city: string; eventId: string }>;
}) {
    const { city, eventId } = await params;
    const event: EventData | undefined = data.events.find(
        (e) => e.id === eventId,
    );

    if (!event) {
        notFound();
    }

    const cityData = data.cities.find((c) => c.id === city);
    const cityName = cityData?.name ?? city;
    const registeredCount = event.emails_registered.length;
    const spotsLeft = event.capacity - registeredCount;
    const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <article className="mx-auto max-w-4xl px-6 py-16">
            <nav
                aria-label="Breadcrumb"
                className="text-muted mb-8 flex gap-2 text-sm"
            >
                <Link
                    href="/events"
                    className="hover:text-primary transition-colors"
                >
                    Events
                </Link>
                <span>/</span>
                <Link
                    href={`/events/${city}`}
                    className="hover:text-primary transition-colors"
                >
                    {cityName}
                </Link>
                <span>/</span>
                <span className="text-foreground">{event.title}</span>
            </nav>

            <h1 className="font-display text-foreground mb-8 text-4xl leading-tight font-bold md:text-5xl">
                {event.title}
            </h1>

            <div className="relative mb-10 h-72 w-full overflow-hidden rounded-xl md:h-[480px]">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="bg-surface border-border rounded-xl border p-4">
                    <p className="text-muted mb-1 text-xs">Date</p>
                    <p className="text-foreground text-sm font-medium">
                        {formattedDate}
                    </p>
                </div>
                <div className="bg-surface border-border rounded-xl border p-4">
                    <p className="text-muted mb-1 text-xs">Location</p>
                    <p className="text-foreground text-sm font-medium">
                        {event.location}
                    </p>
                </div>
                <div className="bg-surface border-border rounded-xl border p-4">
                    <p className="text-muted mb-1 text-xs">Price</p>
                    <p className="text-foreground font-mono text-sm font-medium">
                        {event.price === 0 ? "Free" : `$${event.price}`}
                    </p>
                </div>
                <div className="bg-surface border-border rounded-xl border p-4">
                    <p className="text-muted mb-1 text-xs">Registered</p>
                    <p className="text-foreground font-mono text-sm font-medium">
                        {registeredCount} / {event.capacity}
                    </p>
                </div>
            </div>

            <p className="text-muted mb-12 leading-relaxed">
                {event.description}
            </p>

            <section
                aria-labelledby="register-heading"
                className="border-border bg-surface flex flex-col gap-4 rounded-xl border p-6"
            >
                <div>
                    <h2
                        id="register-heading"
                        className="font-display text-foreground text-xl font-bold"
                    >
                        Register for this event
                    </h2>
                    <p className="text-muted mt-1 text-sm">
                        {spotsLeft > 0
                            ? `${spotsLeft} spots left out of ${event.capacity}`
                            : "This event is sold out"}
                    </p>
                </div>

                {spotsLeft > 0 ? (
                    <RegisterForm
                        eventId={event.id}
                        city={city}
                        spotsLeft={spotsLeft}
                    />
                ) : (
                    <p className="text-muted text-sm">
                        Check other{" "}
                        <Link
                            href={`/events/${city}`}
                            className="text-primary hover:underline"
                        >
                            events in {cityName}
                        </Link>
                    </p>
                )}
            </section>
        </article>
    );
}
