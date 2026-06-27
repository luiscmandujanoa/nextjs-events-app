import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import data from "@/data/events-data.json";

export default function Home() {
    const cities = data.cities;

    return (
        <>
            <Hero />
            <section className="mx-auto max-w-7xl px-6 py-16">
                <h2 className="font-display text-foreground mb-12 text-3xl font-bold">
                    Ciudades destacadas
                </h2>
                <div className="divide-border flex flex-col divide-y">
                    {cities.map((city, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <Link
                                key={city.id}
                                href={`/events/${city.id}`}
                                className={`group flex flex-col items-center gap-8 py-12 md:flex-row ${
                                    !isEven ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-xl md:h-80 md:w-[480px]">
                                    <Image
                                        src={city.image}
                                        alt={city.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col gap-3">
                                    <h3 className="font-display text-foreground group-hover:text-primary text-2xl font-bold transition-colors">
                                        {city.title}
                                    </h3>
                                    <p className="text-muted leading-relaxed">
                                        {city.description}
                                    </p>
                                    <span className="text-primary mt-2 text-sm font-medium">
                                        Ver eventos →
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
