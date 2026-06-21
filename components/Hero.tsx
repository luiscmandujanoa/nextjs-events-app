import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-black to-gray-800 text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Descubre Eventos <br /> en Tu Ciudad
        </h1>

        <p className="text-gray-300 max-w-xl">
          Encuentra conciertos, conferencias, workshops y experiencias cerca de
          ti.
        </p>

        <div className="flex gap-4">
          <Link
            href="/events"
            className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Explorar Eventos
          </Link>

          <Link
            href="/about"
            className="border border-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            Ver Más
          </Link>
        </div>
      </div>
    </section>
  );
}
