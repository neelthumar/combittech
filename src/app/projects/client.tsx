"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { CheckCircle2 } from "lucide-react";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function ProjectsPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900">
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="projGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30h60M30 0v60" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="30" cy="30" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#projGrid)" />
          </svg>
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
              Engineering Marvels We Delivered
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Real projects with real results. See how we&apos;ve helped clients solve complex
              embedded engineering challenges across multiple domains.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {/* Category Filter */}
          <FadeIn className="mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <FadeIn key={project.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <PlaceholderImage
                    src={project.image}
                    alt={project.title}
                    aspectRatio="video"
                    className="rounded-none"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default">{project.category}</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>

                    {/* Challenge */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                        Challenge
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                        Solution
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Outcomes */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        Results
                      </h4>
                      <ul className="space-y-1.5">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
