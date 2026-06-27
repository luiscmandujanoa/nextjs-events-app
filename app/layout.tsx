import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
    variable: "--font-bricolage",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Events App",
    description: "Find events in your city",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${inter.variable} ${bricolage.variable} ${geistMono.variable}`}
        >
            <body className="bg-background text-foreground flex min-h-screen flex-col">
                <ThemeProvider>
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
