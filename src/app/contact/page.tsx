import type { Metadata } from "next";
import { ContactPageClient } from "./client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CombitTech for embedded engineering services. Contact us for firmware development, PCB design, IoT solutions, and product prototyping.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
