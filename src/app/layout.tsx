import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "embedded systems",
    "firmware development",
    "PCB design",
    "IoT solutions",
    "embedded engineering",
    "RTOS development",
    "hardware design",
    "industrial automation",
    "product prototyping",
    "embedded product engineering",
    "CombitTech",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
    url: "https://combittech.com",
    siteName: company.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
