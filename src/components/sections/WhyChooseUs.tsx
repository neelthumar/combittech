"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { Shield, Clock, Users, Award, Lightbulb, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Production-Grade Quality",
    description:
      "Every deliverable meets production standards. We design for manufacturing, not just prototyping — reducing your time from lab to market.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Your Extended Engineering Team",
    description:
      "We integrate seamlessly with your workflows, tools, and timelines. Think of us as your embedded engineering department, without the overhead.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Deep Domain Expertise",
    description:
      "Our engineers have shipped products across industrial, consumer, medical, and automotive domains. We bring cross-industry insights to every project.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Rapid Turnaround",
    description:
      "Proven development frameworks and reusable IP accelerate project timelines. Proof-of-concept in weeks, not months.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Compliance & Certification",
    description:
      "Pre-compliance testing, EMC design best practices, and certification support ensure your product meets regulatory requirements first time.",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: "End-to-End Support",
    description:
      "From initial concept through production ramp-up and ongoing maintenance — we support your product throughout its entire lifecycle.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <FadeIn>
          <SectionHeading
            label="Why CombitTech"
            title="Engineering You Can Trust"
            description="We combine deep technical expertise with a client-first approach to deliver embedded products that exceed expectations."
          />
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
