"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import { Factory, Smartphone, Globe, Bot, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Factory: <Factory className="w-7 h-7" />,
  Smartphone: <Smartphone className="w-7 h-7" />,
  Globe: <Globe className="w-7 h-7" />,
  Bot: <Bot className="w-7 h-7" />,
};

export function IndustriesServed() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <FadeIn>
          <SectionHeading
            label="Industries"
            title="Domains We Serve"
            description="We bring embedded engineering expertise to industries where reliability, performance, and precision matter most."
          />
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {industries.map((industry) => (
            <StaggerItem key={industry.id}>
              <Link href={`/industries#${industry.id}`}>
                <div className="group relative p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      {iconMap[industry.icon]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {industry.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {industry.expertise.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center mt-10">
          <Button asChild variant="outline">
            <Link href="/industries">
              Explore Industries
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
