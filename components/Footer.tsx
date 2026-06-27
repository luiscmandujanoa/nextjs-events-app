import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-border bg-surface border-t">
            <div className="text-muted mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm sm:flex-row">
                <p>© {year} Events App. All rights reserved.</p>
                <nav aria-label="Footer navigation">
                    <ul className="flex gap-6">
                        <li>
                            <Link
                                href="/privacy"
                                className="hover:text-primary transition-colors"
                            >
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                className="hover:text-primary transition-colors"
                            >
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-primary transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
