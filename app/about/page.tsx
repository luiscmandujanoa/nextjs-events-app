import Link from "next/link";

export default function About() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto mt-5">
      <h1 className="text-3xl font-bold">About Events App</h1>
      <p className="text-gray-500 mt-2">
        A simple platform to discover events by city and category.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">What is this?</h2>
        <p className="text-gray-600">
          Events App helps you explore concerts, conferences, workshops and
          experiences happening in different cities.
        </p>
      </section>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold">What you can do</h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Browse events by city</li>
          <li>View event details</li>
          <li>Discover new experiences</li>
        </ul>
      </section>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold">Built with</h2>

        <p className="text-gray-600">
          Next.js, Tailwind CSS, TypeScript, and JSON-based mock data.
        </p>
      </section>

      <div className="mt-10">
        <Link
          href="/events"
          className="bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200 transition"
        >
          Explore Events
        </Link>
      </div>
    </div>
  );
}
