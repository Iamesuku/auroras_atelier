import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurora's Atelier — Interiors for Refined Living",
  description: "Bespoke interior styling, room makeovers, and luxury short-let setups.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
