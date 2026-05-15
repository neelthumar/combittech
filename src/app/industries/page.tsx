import type { Metadata } from "next";
import { IndustriesPageClient } from "./client";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "CombitTech serves industrial automation, consumer electronics, IoT startups, and robotics companies with specialized embedded engineering services.",
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
