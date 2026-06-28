"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CarouselEvent {
    id: string;
    title: string;
    city: string;
    image: string;
    date: string;
    price: number;
}

interface Props {
    events: CarouselEvent[];
}

export default function Carousel({ events }: Props) {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % events.length);
    }, [events.length]);

    const prev = () => {
        setCurrent((prev) => (prev - 1 + events.length) % events.length);
    };

    useEffect(() => {
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [next]);

    const getPosition = (index: number) => {
        const diff = (index - current + events.length) % events.length;
        if (diff === 0) return "center";
        if (diff === 1) return "right";
        if (diff === events.length - 1) return "left";
        return "hidden";
    };

    const variants = {
        center: {
            x: 0,
            scale: 1,
            rotateY: 0,
            zIndex: 10,
            opacity: 1,
        },
        left: {
            x: "-55%",
            scale: 0.75,
            rotateY: 35,
            zIndex: 5,
            opacity: 0.6,
        },
        right: {
            x: "55%",
            scale: 0.75,
            rotateY: -35,
            zIndex: 5,
            opacity: 0.6,
        },
        hidden: {
            x: 0,
            scale: 0.5,
            rotateY: 0,
            zIndex: 0,
            opacity: 0,
        },
    };

    return (
        <div className="relative flex w-full flex-col items-center gap-6">
            <div
                className="relative h-72 w-full"
                style={{ perspective: "1000px" }}
            >
                {events.map((event, index) => {
                    const position = getPosition(index);
                    return (
                        <motion.div
                            key={event.id}
                            animate={variants[position]}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0 mx-auto w-96"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <Link href={`/events/${event.city}/${event.id}`}>
                                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/20">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 384px"
                                        className="object-cover"
                                    />
                                    {position === "center" && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                    )}
                                    {position === "center" && (
                                        <div className="absolute bottom-0 p-4 text-white">
                                            <p className="font-mono text-xs opacity-75">
                                                {new Date(
                                                    event.date,
                                                ).toLocaleDateString("en-GB", {
                                                    day: "numeric",
                                                    month: "short",
                                                })}
                                            </p>
                                            <h3 className="font-display mt-1 text-sm leading-snug font-semibold">
                                                {event.title}
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={prev}
                    aria-label="Previous event"
                    className="border-border text-muted hover:border-primary hover:text-primary rounded-full border p-2 transition-colors"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="flex gap-2">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            aria-label={`Go to event ${index + 1}`}
                            className={`h-1.5 w-1.5 rounded-full transition-all ${
                                index === current
                                    ? "bg-primary w-4"
                                    : "bg-border hover:bg-muted"
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    aria-label="Next event"
                    className="border-border text-muted hover:border-primary hover:text-primary rounded-full border p-2 transition-colors"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
