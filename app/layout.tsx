import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Zoro AI Trainer",
    description:
        "A personalized AI-powered fitness training companion.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}