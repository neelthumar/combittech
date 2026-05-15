import type { Metadata } from "next";
import { ServicesPageClient } from "./client";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore CombitTech's embedded engineering services — firmware development, PCB design, IoT solutions, RTOS development, prototyping, testing, and industrial automation.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
