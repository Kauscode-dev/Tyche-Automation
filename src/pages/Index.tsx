import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AudienceSection } from "@/components/AudienceSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <AudienceSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
