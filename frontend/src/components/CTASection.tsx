import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-[150px]" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden">
            {/* Card background with gradient border */}
            <div className="absolute inset-0 bg-card/80 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="absolute inset-[1px] rounded-3xl bg-card/90" />
            
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-primary/50 via-transparent to-accent/50">
              <div className="w-full h-full rounded-3xl bg-card" />
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="badge-gradient mb-6 inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Limited Availability</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                Ready to <span className="text-gradient">transform</span> your GTM?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Most founders struggle with duct-taped growth systems. 
                Let's build something that actually works—together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a href="https://cal.id/kaustubh-ai/quicksync?user=kaustubh-ai&overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                  <Button variant="gradient" size="xl">
                    <Calendar className="w-5 h-5" />
                    <span>Book A Strategy Call</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <Button variant="outline-gradient" size="xl">
                  <span>View Case Studies</span>
                </Button>
              </motion.div>

              {/* Trust indicator */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="mt-8 text-sm text-muted-foreground"
              >
                🟢 Response within 24 hours • No commitment required
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
