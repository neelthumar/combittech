"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3">
              Let&apos;s Talk
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you need a quick feasibility study or a full product development
              partnership, we&apos;re here to help. Tell us about your embedded engineering challenge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button asChild size="lg" className="text-base">
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href={`mailto:${company.contact.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  {company.contact.email}
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {company.contact.phone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {company.address.city}, {company.address.state}, {company.address.country}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
