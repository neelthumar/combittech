import type { Metadata } from "next";
import { AboutPageClient } from "./client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CombitTech — an embedded product engineering company helping businesses build customized embedded products with expert firmware, hardware, and IoT solutions.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
