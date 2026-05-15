"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";
import {
  Cpu, CircuitBoard, Wifi, Wrench, TestTube, Timer, Factory,
  CheckCircle2, ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6" />,
  CircuitBoard: <CircuitBoard className="w-6 h-6" />,
  Wifi: <Wifi className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  TestTube: <TestTube className="w-6 h-6" />,
  Timer: <Timer className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
};

export function ServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900">
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="servicesGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30h60M30 0v60" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="30" cy="30" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#servicesGrid)" />
          </svg>
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
              Comprehensive Embedded Engineering Services
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              From bare-metal firmware to cloud-connected IoT platforms — we provide full-spectrum
              embedded product engineering services designed for production.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-max space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <FadeIn direction={index % 2 === 0 ? "left" : "right"} className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <PlaceholderImage
                    src={service.image}
                    alt={service.title}
                    aspectRatio="video"
                  />
                </FadeIn>

                <FadeIn direction={index % 2 === 0 ? "right" : "left"} className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                      {iconMap[service.icon]}
                    </div>
                    <Badge variant="default">{service.shortTitle}</Badge>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.overview}
                  </p>

                  {/* Capabilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-3">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-3">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Business Value */}
                  <div className="p-4 rounded-lg bg-primary-50 border border-primary-100">
                    <h4 className="text-sm font-semibold text-primary-900 mb-1">Business Value</h4>
                    <p className="text-sm text-primary-700">{service.businessValue}</p>
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
