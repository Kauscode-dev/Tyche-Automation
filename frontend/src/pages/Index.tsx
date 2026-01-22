import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AudienceSection } from "@/components/AudienceSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ToolsSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <AudienceSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
