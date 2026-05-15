"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <FadeIn>
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            description="Hear from engineering leaders who've trusted CombitTech with their embedded product development."
          />
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary-200 mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-700">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-accent-400 text-accent-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
