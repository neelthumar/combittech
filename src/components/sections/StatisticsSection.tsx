"use client";

import { FadeIn, AnimatedCounter } from "@/components/ui/motion";
import { company } from "@/data/company";

const stats = [
  {
    value: company.stats.projectsDelivered,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across firmware, hardware, and IoT",
  },
  {
    value: company.stats.clientsServed,
    suffix: "+",
    label: "Clients Served",
    description: "From startups to enterprises",
  },
  {
    value: company.stats.countriesServed,
    suffix: "+",
    label: "Countries",
    description: "Global engineering reach",
  },
  {
    value: company.stats.satisfaction,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Repeat & referral business",
  },
];

export function StatisticsSection() {
  return (
    <section className="section-padding gradient-primary text-white">
      <div className="container-max">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-base font-semibold text-white/90 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-white/60">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
