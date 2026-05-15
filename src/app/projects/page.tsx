import type { Metadata } from "next";
import { ProjectsPageClient } from "./client";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Explore CombitTech's portfolio of embedded engineering projects — precision measurement, IoT solutions, wireless communication, and industrial automation case studies.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
