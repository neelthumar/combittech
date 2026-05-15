"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <FadeIn>
          <SectionHeading
            label="Case Studies"
            title="Engineering Marvels We Delivered"
            description="Real projects, real results. Explore how we've helped clients solve complex embedded engineering challenges."
          />
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <div className="group rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <PlaceholderImage
                  src={project.image}
                  alt={project.title}
                  aspectRatio="video"
                  className="rounded-none"
                />
                <div className="p-6">
                  <Badge variant="default" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {project.challenge}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center mt-10">
          <Button asChild variant="outline">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
