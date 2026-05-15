"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem, AnimatedCounter } from "@/components/ui/motion";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Card, CardContent } from "@/components/ui/card";
import { company } from "@/data/company";
import { assets } from "@/config/assets";
import { Target, Eye, Heart, Zap } from "lucide-react";

export function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900">
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="aboutGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30h60M30 0v60" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="30" cy="30" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutGrid)" />
          </svg>
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              About CombitTech
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
              Engineering Embedded Products Since {company.founded}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              {company.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <PlaceholderImage
                src={assets.general.about}
                alt="CombitTech Engineering Lab"
                aspectRatio="video"
              />
            </FadeIn>
            <FadeIn direction="right">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Born from a Passion for Embedded Engineering
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  CombitTech was founded by a team of embedded systems engineers who saw a gap in the market:
                  startups and mid-size companies struggling to find reliable, production-quality embedded
                  engineering partners.
                </p>
                <p>
                  Too many outsourcing firms treated embedded development as generic software work.
                  We knew that firmware, hardware, and system-level integration demanded specialized expertise —
                  engineers who understand oscilloscopes as well as IDEs, who think in clock cycles and
                  milliamps, not just lines of code.
                </p>
                <p>
                  Today, with {company.employeeCount} engineers and {company.stats.projectsDelivered}+ projects
                  delivered, we continue to operate as a focused embedded engineering firm —
                  the kind of team you wish you had in-house.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted embedded engineering partner for innovative companies worldwide —
                    delivering production-grade hardware and firmware that accelerates time to market while
                    maintaining the highest quality standards.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-accent-50 text-accent-600 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To build a world-class embedded engineering center of excellence in India —
                    where talented engineers solve challenging problems and create products that
                    impact millions of lives across the globe.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeIn>
            <SectionHeading
              label="Our Values"
              title="What Drives Us"
              description="These principles guide every engineering decision and client interaction at CombitTech."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
            {company.values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="flex gap-4 p-6 rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-lg bg-primary-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1.5">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-max">
          <FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={company.stats.projectsDelivered} suffix="+" />
                </div>
                <div className="text-white/80 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={company.stats.clientsServed} suffix="+" />
                </div>
                <div className="text-white/80 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={company.stats.engineers} suffix="+" />
                </div>
                <div className="text-white/80 text-sm">Engineers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={company.stats.countriesServed} suffix="+" />
                </div>
                <div className="text-white/80 text-sm">Countries Served</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Office */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3 block">
                Our Workspace
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Where Engineering Happens
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our office and lab in Mehsana, Gujarat, is equipped with everything needed for
                  professional embedded development — from precision oscilloscopes and logic analyzers
                  to soldering stations and environmental test equipment.
                </p>
                <p>
                  We believe great engineering requires great tools. Our engineers have access to the
                  latest development platforms, evaluation boards, and design software to deliver
                  production-quality results.
                </p>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-white border border-gray-200">
                <div className="text-sm font-medium text-gray-900 mb-1">Office Address</div>
                <div className="text-sm text-gray-600">{company.address.full}</div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <PlaceholderImage
                src={assets.general.office}
                alt="CombitTech Office"
                aspectRatio="video"
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
