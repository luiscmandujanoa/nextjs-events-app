import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import data from "@/data/data.json";

export default function Home() {
  const cities = data.cities;

  return (
    <div className="space-y-6 mt-5">
      <Hero />
      <div className="max-w-7xl mx-auto">
        {cities.map((city, index) => {
          const isEven = index % 2 === 0;
          const direction = isEven ? "md:flex-row" : "md:flex-row-reverse";

          return (
            <Link
              key={city.id}
              href={`/events/${city.id}`}
              className={`flex gap-8 py-10 items-center hover:scale-[1.01] transition ${direction}`}
            >
              <div className="w-40 sm:w-48 md:w-96 lg:w-[600px] h-48 sm:h-64 md:h-80 lg:h-96 relative shrink-0">
                <Image
                  src={city.image}
                  alt={city.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">{city.title}</h2>
                <p className="text-gray-500">{city.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
