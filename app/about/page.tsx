import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function AboutPage() {
    const stack = [
        {
            name: "Next.js 16",
            description:
                "React framework with App Router and Server Components",
        },
        {
            name: "Tailwind CSS v4",
            description: "Utility-first styling with native dark mode support",
        },
        {
            name: "TypeScript",
            description: "Static typing for more robust and maintainable code",
        },
        {
            name: "next-themes",
            description: "Dark/light mode toggle with localStorage persistence",
        },
    ];

    const features = [
        "Browse events by city",
        "View event details including date, location and price",
        "Register with your email directly from the event page",
        "Fully adapted UI for dark and light mode",
    ];

    return (
        <div className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-16">
            <FadeIn>
                <section>
                    <h1 className="font-display text-foreground mb-4 text-4xl leading-tight font-bold md:text-5xl">
                        About Events App
                    </h1>
                    <p className="text-muted text-lg leading-relaxed">
                        A platform to discover events by city — concerts,
                        conferences, workshops and unique experiences near you.
                        Built as a learning project with Next.js and modern
                        React ecosystem best practices.
                    </p>
                </section>
            </FadeIn>

            <FadeIn inView delay={0.1}>
                <section aria-labelledby="features-heading">
                    <h2
                        id="features-heading"
                        className="font-display text-foreground mb-6 text-2xl font-bold"
                    >
                        What you can do
                    </h2>
                    <ul className="flex flex-col gap-3">
                        {features.map((feature) => (
                            <li
                                key={feature}
                                className="text-muted flex items-start gap-3"
                            >
                                <span className="text-primary mt-1">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </section>
            </FadeIn>

            <FadeIn inView delay={0.1}>
                <section aria-labelledby="stack-heading">
                    <h2
                        id="stack-heading"
                        className="font-display text-foreground mb-6 text-2xl font-bold"
                    >
                        Tech stack
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {stack.map((item) => (
                            <div
                                key={item.name}
                                className="bg-surface border-border rounded-xl border p-5"
                            >
                                <h3 className="text-foreground mb-1 font-medium">
                                    {item.name}
                                </h3>
                                <p className="text-muted text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>

            <FadeIn inView delay={0.1}>
                <section aria-labelledby="contact-heading">
                    <h2
                        id="contact-heading"
                        className="font-display text-foreground mb-2 text-2xl font-bold"
                    >
                        Contact
                    </h2>
                    <p className="text-muted mb-6">
                        Have a question or want to work together? Feel free to
                        reach out.
                    </p>
                    <a
                        href="mailto:tu@email.com"
                        className="border-border text-foreground hover:border-primary hover:text-primary inline-block rounded-lg border px-6 py-3 text-sm font-medium transition-colors"
                    >
                        Send a message
                    </a>
                </section>
            </FadeIn>

            <div className="border-border border-t pt-10">
                <Link
                    href="/events"
                    className="bg-primary hover:bg-primary-hover rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors"
                >
                    Explore events →
                </Link>
            </div>
        </div>
    );
}
