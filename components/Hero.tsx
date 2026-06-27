import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-surface border-border w-full border-b">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-24">
                <span className="text-primary text-sm font-medium tracking-widest uppercase">
                    Encuentra tu próximo evento
                </span>
                <h1 className="font-display text-foreground text-5xl leading-tight font-bold md:text-7xl">
                    Descubre eventos <br className="hidden md:block" /> en tu
                    ciudad
                </h1>
                <p className="text-muted max-w-xl text-lg">
                    Conciertos, conferencias, workshops y experiencias únicas
                    cerca de ti.
                </p>
                <div className="mt-2 flex flex-wrap gap-4">
                    <Link
                        href="/events"
                        className="bg-primary hover:bg-primary-hover rounded-lg px-6 py-3 font-medium text-white transition-colors"
                    >
                        Explorar eventos
                    </Link>
                    <Link
                        href="/about"
                        className="border-border text-foreground hover:border-primary hover:text-primary rounded-lg border px-6 py-3 font-medium transition-colors"
                    >
                        Saber más
                    </Link>
                </div>
            </div>
        </section>
    );
}
