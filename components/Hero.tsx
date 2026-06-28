import Link from "next/link";
import Image from "next/image";
import data from "@/data/events-data.json";
import Carousel from "@/components/Carousel";

export default function Hero() {
    const upcomingEvents = [...data.events]
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 4);

    const featuredImage = upcomingEvents[0]?.image;

    return (
        <section className="border-border w-full border-b">
            {/* Mobile — imagen de fondo */}
            <div className="relative h-[500px] w-full md:hidden">
                {featuredImage && (
                    <Image
                        src={featuredImage}
                        alt="Featured event"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 1px"
                        className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end gap-5 p-8">
                    <span className="text-primary text-xs font-medium tracking-widest uppercase">
                        Find your next event
                    </span>
                    <h1 className="font-display text-4xl leading-tight font-bold text-white">
                        Discover events in your city
                    </h1>
                    <p className="text-sm leading-relaxed text-white/70">
                        Concerts, conferences, workshops and unique experiences
                        near you.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/events"
                            className="bg-primary hover:bg-primary-hover rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors"
                        >
                            Explore events
                        </Link>
                        <Link
                            href="/about"
                            className="rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>

            {/* Desktop — split screen */}
            <div className="mx-auto hidden max-w-7xl grid-cols-2 items-center gap-12 px-6 py-24 md:grid">
                <div className="flex flex-col gap-6">
                    <span className="text-primary text-sm font-medium tracking-widest uppercase">
                        Find your next event
                    </span>
                    <h1 className="font-display text-foreground text-5xl leading-tight font-bold lg:text-6xl">
                        Discover events in your city
                    </h1>
                    <p className="text-muted max-w-md text-lg leading-relaxed">
                        Concerts, conferences, workshops and unique experiences
                        near you.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-4">
                        <Link
                            href="/events"
                            className="bg-primary hover:bg-primary-hover rounded-lg px-6 py-3 font-medium text-white transition-colors"
                        >
                            Explore events
                        </Link>
                        <Link
                            href="/about"
                            className="border-border text-foreground hover:border-primary hover:text-primary rounded-lg border px-6 py-3 font-medium transition-colors"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>

                <Carousel events={upcomingEvents} />
            </div>
        </section>
    );
}
