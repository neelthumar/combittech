"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import {
  Cpu,
  CircuitBoard,
  Wifi,
  Wrench,
  TestTube,
  Timer,
  Factory,
  ArrowRight,
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

export function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <FadeIn>
          <SectionHeading
            label="Our Services"
            title="End-to-End Embedded Engineering"
            description="From concept to production, we provide comprehensive embedded product engineering services tailored to your specific requirements."
          />
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.id}>
              <Card className="group hover:shadow-lg hover:border-primary-200 h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 group/link"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center mt-10">
          <Button asChild variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
