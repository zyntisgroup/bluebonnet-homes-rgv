import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-espresso">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
