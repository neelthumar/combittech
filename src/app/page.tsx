import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { TechStack } from "@/components/sections/TechStack";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CareersCTA } from "@/components/sections/CareersCTA";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <StatisticsSection />
      <IndustriesServed />
      <TechStack />
      <ProcessSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <CareersCTA />
      <ContactCTA />
    </>
  );
}
