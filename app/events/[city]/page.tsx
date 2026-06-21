import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default async function CityEventPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const events = data.events.filter((event) => event.city === city);

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h2 className="text-xl text-center mb-5">Events in {city}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((currentEvent) => {
          return (
            <Link key={currentEvent.id} href={`/events/${city}/${currentEvent.id}`} className="block">
              <div className="w-full h-80 lg:h-96 relative">
                <Image
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="text-xl font-semibold">{currentEvent.title}</h2>
                <p className="text-gray-500">{currentEvent.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
