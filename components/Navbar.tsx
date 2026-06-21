"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/20 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          Events App
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`hover:text-gray-400 transition-colors ${pathName === "/" ? "font-semibold text-yellow-200" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/events"
            className={`hover:text-gray-400 transition-colors ${pathName.startsWith("/events") ? "font-semibold text-yellow-200" : ""}`}
          >
            Events
          </Link>
          <Link
            href="/about"
            className={`hover:text-gray-400 transition-colors ${pathName === "/about" ? "font-semibold text-yellow-200" : ""}`}
          >
            About us
          </Link>
        </div>
      </div>
    </nav>
  );
}
