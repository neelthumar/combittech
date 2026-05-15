"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { MessageSquare, Search, PenTool, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    step: "01",
    title: "Discovery & Requirements",
    description:
      "We analyze your product requirements, technical constraints, and business objectives to define a clear engineering roadmap.",
  },
  {
    icon: <Search className="w-5 h-5" />,
    step: "02",
    title: "Architecture & Design",
    description:
      "System architecture, component selection, schematic design, and firmware architecture — all reviewed and validated before implementation.",
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    step: "03",
    title: "Hardware Development",
    description:
      "PCB layout, prototype fabrication, and hardware bring-up. We iterate until the hardware meets all performance specifications.",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    step: "04",
    title: "Firmware & Software",
    description:
      "Production-grade firmware development with rigorous code review, unit testing, and continuous integration practices.",
  },
  {
    icon: <TestTube className="w-5 h-5" />,
    step: "05",
    title: "Testing & Validation",
    description:
      "Comprehensive functional testing, EMC pre-compliance, environmental testing, and regulatory certification support.",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    step: "06",
    title: "Production & Support",
    description:
      "DFM optimization, production test development, manufacturing liaison, and ongoing product maintenance support.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <FadeIn>
          <SectionHeading
            label="Our Process"
            title="How We Deliver"
            description="A structured, transparent engineering process that ensures quality at every stage — from concept to production."
          />
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="relative p-6 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-primary-600 tracking-wider">
                    STEP {step.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
