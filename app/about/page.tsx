import Link from "next/link";

export default function AboutPage() {
    const stack = [
        {
            name: "Next.js 16",
            description:
                "Framework de React con App Router y Server Components",
        },
        {
            name: "Tailwind CSS v4",
            description:
                "Estilos utility-first con soporte nativo de dark mode",
        },
        {
            name: "TypeScript",
            description:
                "Tipado estático para un código más robusto y mantenible",
        },
        {
            name: "next-themes",
            description:
                "Toggle de dark/light mode con persistencia en localStorage",
        },
    ];

    const features = [
        "Explora eventos por ciudad",
        "Consulta detalles, fecha, ubicación y precio de cada evento",
        "Regístrate con tu email directamente desde la página del evento",
        "Interfaz adaptada a dark y light mode",
    ];

    return (
        <div className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-16">
            <section>
                <h1 className="font-display text-foreground mb-4 text-4xl leading-tight font-bold md:text-5xl">
                    About Events App
                </h1>
                <p className="text-muted text-lg leading-relaxed">
                    Una plataforma para descubrir eventos por ciudad —
                    conciertos, conferencias, workshops y experiencias únicas
                    cerca de ti. Construida como proyecto de aprendizaje con
                    Next.js y las mejores prácticas del ecosistema React
                    moderno.
                </p>
            </section>

            <section aria-labelledby="features-heading">
                <h2
                    id="features-heading"
                    className="font-display text-foreground mb-6 text-2xl font-bold"
                >
                    Qué puedes hacer
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

            <section aria-labelledby="stack-heading">
                <h2
                    id="stack-heading"
                    className="font-display text-foreground mb-6 text-2xl font-bold"
                >
                    Stack técnico
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

            <section aria-labelledby="contact-heading">
                <h2
                    id="contact-heading"
                    className="font-display text-foreground mb-2 text-2xl font-bold"
                >
                    Contacto
                </h2>
                <p className="text-muted mb-6">
                    ¿Tienes alguna pregunta o quieres trabajar juntos? No dudes
                    en escribirme.
                </p>
                <a
                    href="mailto:tu@email.com"
                    className="border-border text-foreground hover:border-primary hover:text-primary inline-block rounded-lg border px-6 py-3 text-sm font-medium transition-colors"
                >
                    Enviar mensaje
                </a>
            </section>

            <div className="border-border border-t pt-10">
                <Link
                    href="/events"
                    className="bg-primary hover:bg-primary-hover rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors"
                >
                    Explorar eventos →
                </Link>
            </div>
        </div>
    );
}
