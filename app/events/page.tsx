import Image from "next/image";
import data from "@/data/data.json";
import Link from "next/link";

export default function EventsPage() {
  const events = data.events;

  return (
    <div className="space-y-8 max-w-7xl mx-auto mt-5">
      <h1 className="text-3xl font-bold">Mira todos los eventos</h1>
      <p className="text-gray-500">
        Busca todos los eventos disponibles por ciudad y categoría
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {events.map((currentEvent) => {
          return (
            <Link
              key={currentEvent.id}
              href={`/events/${currentEvent.city}/${currentEvent.id}`}
            >
              <div
                key={currentEvent.id}
                className="w-full h-80 lg:h-96 relative rounded-lg overflow-hidden cursor-pointer group"
              >
                <Image
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition" />

                <div className="absolute bottom-0 p-4 text-white">
                  <h2 className="text-lg font-semibold leading-snug">
                    {currentEvent.title}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
