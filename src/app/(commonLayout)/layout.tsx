import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/Shared/Navbar";
import Footer from "@/Shared/Footer";
import { Toaster } from "@/components/ui/sonner";
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SongDeal",
  description: "Songs as assets, simplified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${plusJakarta.variable} antialiased font-[family-name:var(--font-plus-jakarta)]`}
      >
        <main>
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </main>
        <Toaster position="top-center"/>
      </body>
    </html>
  );
}
