import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "SongDeal | Dashboard",
    description: "Songs as assets, simplified.",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={` ${plusJakarta.variable} antialiased font-[family-name:var(--font-plus-jakarta)]`}
            >
                {children}
            </body>
        </html>
    );
}
