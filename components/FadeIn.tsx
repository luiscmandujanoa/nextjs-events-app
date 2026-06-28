"use client";

import { motion, type Transition } from "framer-motion";

interface Props {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    inView?: boolean;
}

export default function FadeIn({
    children,
    delay = 0,
    className,
    inView = false,
}: Props) {
    const initial = { opacity: 0, y: 20 };
    const animate = { opacity: 1, y: 0 };
    const transition: Transition = { duration: 0.5, delay, ease: "easeOut" };

    if (inView) {
        return (
            <motion.div
                initial={initial}
                whileInView={animate}
                viewport={{ once: true }}
                transition={transition}
                className={className}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
        >
            {children}
        </motion.div>
    );
}
