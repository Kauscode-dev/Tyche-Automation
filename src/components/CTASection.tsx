import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] opacity-40"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-12 md:p-16 bg-card border-2 border-primary text-center">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Limited Availability</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Stop the Growth Chaos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Most founders and GTM teams struggle with duct-taped growth systems. 
              Let's build something that actually works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://cal.id/kaustubh-ai/quicksync?user=kaustubh-ai&overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  Book A Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Button variant="outline" size="xl">
                View Case Studies
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm mb-4">
                Trusted by leading B2B SaaS & AI startups
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
                {["Clay", "Apollo", "Zapier", "HubSpot", "Notion"].map((brand) => (
                  <span key={brand} className="font-display font-bold text-foreground/50">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
