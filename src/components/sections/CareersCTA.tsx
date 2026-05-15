"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

export function CareersCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <FadeIn>
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 lg:p-16">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-[0.05]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="careerGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 20h40M20 0v40" stroke="white" strokeWidth="0.5" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#careerGrid)" />
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  We&apos;re Hiring
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Build the Future of Embedded Systems
                </h2>
                <p className="text-gray-400 max-w-xl leading-relaxed">
                  Join a team of passionate engineers working on cutting-edge embedded products.
                  Real hardware, real firmware, real impact.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button asChild size="lg" className="text-base">
                  <Link href="/careers">
                    View Open Positions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
