"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { industries } from "@/data/industries";
import { Factory, Smartphone, Globe, Bot, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Factory: <Factory className="w-7 h-7" />,
  Smartphone: <Smartphone className="w-7 h-7" />,
  Globe: <Globe className="w-7 h-7" />,
  Bot: <Bot className="w-7 h-7" />,
};

export function IndustriesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900">
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="indGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30h60M30 0v60" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="30" cy="30" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#indGrid)" />
          </svg>
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
              Domains We Are Transforming
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              We bring deep embedded engineering expertise to industries where reliability,
              performance, and precision are non-negotiable.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="section-padding bg-white">
        <div className="container-max space-y-24">
          {industries.map((industry, index) => (
            <div key={industry.id} id={industry.id} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}>
                <FadeIn direction={index % 2 === 0 ? "left" : "right"} className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <PlaceholderImage
                    src={industry.image}
                    alt={industry.title}
                    aspectRatio="video"
                  />
                  {/* Case Example */}
                  <div className="mt-6 p-5 rounded-xl bg-primary-50 border border-primary-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-primary-600" />
                      <h4 className="text-sm font-semibold text-primary-900">Case Example</h4>
                    </div>
                    <h5 className="text-sm font-bold text-gray-900 mb-1">
                      {industry.caseExample.title}
                    </h5>
                    <p className="text-sm text-gray-600">{industry.caseExample.description}</p>
                  </div>
                </FadeIn>

                <FadeIn direction={index % 2 === 0 ? "right" : "left"} className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                      {iconMap[industry.icon]}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {industry.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {industry.description}
                  </p>

                  {/* Challenges */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-4 h-4 text-accent-500" />
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                        Industry Challenges
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0 mt-2" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-primary-500" />
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                        How CombitTech Helps
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution) => (
                        <li key={solution} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-3">
                      Key Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.expertise.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
