import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Shared/Navbar";
import Footer from "@/Shared/Footer";
import { Toaster } from "@/components/ui/sonner";
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
    <main>
      <Navbar />
      <div className="min-h-[50vh]">
        {children}
      </div>
      <Footer />
      <Toaster position="top-center" />
    </main>

  );
}
