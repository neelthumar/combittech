"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { positions, benefits } from "@/data/careers";
import { company } from "@/data/company";
import { assets } from "@/config/assets";
import {
  Cpu, GraduationCap, Clock, Heart, TrendingUp, Wrench,
  MapPin, Briefcase, ArrowRight, Mail,
} from "lucide-react";

const benefitIconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

export function CareersPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900">
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="careerGrid2" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30h60M30 0v60" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="30" cy="30" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#careerGrid2)" />
          </svg>
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Careers at CombitTech
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
              Build the Future of Embedded Systems
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Join a team of passionate engineers working on real products that ship to production.
              No maintenance work — only new product development and innovation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <PlaceholderImage
                src={assets.general.culture}
                alt="CombitTech Engineering Culture"
                aspectRatio="video"
              />
            </FadeIn>
            <FadeIn direction="right">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3 block">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Engineering-First, Always
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At CombitTech, engineers are the core of everything we do. We believe in giving our
                  team the best tools, challenging problems, and the freedom to innovate.
                </p>
                <p>
                  Every engineer works directly on client products — writing firmware, designing PCBs,
                  debugging hardware, and shipping production code. No bureaucracy, no layers of management
                  between you and the engineering work.
                </p>
                <p>
                  We invest heavily in learning: development boards for every engineer, conference sponsorships,
                  certification support, and weekly tech talks where we share knowledge across domains.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <FadeIn>
            <SectionHeading
              label="Benefits"
              title="Why Engineers Love Working Here"
              description="We've built an environment where talented engineers can do their best work."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                      {benefitIconMap[benefit.icon]}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeIn>
            <SectionHeading
              label="Open Positions"
              title="Current Openings"
              description="We're always looking for talented engineers who are passionate about embedded systems."
            />
          </FadeIn>

          <StaggerChildren className="space-y-4 max-w-3xl mx-auto" staggerDelay={0.08}>
            {positions.map((position) => (
              <StaggerItem key={position.id}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{position.title}</h3>
                      <Badge variant={position.type === "Full-time" ? "default" : "accent"}>
                        {position.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {position.experience}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {position.requirements.slice(0, 3).map((req) => (
                        <span key={req} className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                          {req.length > 40 ? req.substring(0, 40) + "..." : req}
                        </span>
                      ))}
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <a href={`mailto:${company.contact.careersEmail}?subject=Application: ${position.title}`}>
                        Apply Now
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn className="text-center mt-10">
            <p className="text-gray-500 mb-3 text-sm">
              Don&apos;t see your role? We&apos;re always interested in hearing from talented engineers.
            </p>
            <Button asChild variant="outline">
              <a href={`mailto:${company.contact.careersEmail}?subject=General Application`}>
                <Mail className="w-4 h-4 mr-2" />
                Send Open Application
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
