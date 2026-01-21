import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { LogosSection } from "@/components/LogosSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AudienceSection } from "@/components/AudienceSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <LogosSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <AudienceSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
