import type { Metadata } from "next";
import { CareersPageClient } from "./client";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CombitTech — work on cutting-edge embedded products with a team of passionate engineers. Explore open positions in firmware, hardware, and IoT development.",
};

export default function CareersPage() {
  return <CareersPageClient />;
}
