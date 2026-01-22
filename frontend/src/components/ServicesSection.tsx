import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 stars-bg">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="glass-card inline-block px-5 py-2 mb-4">
            <span className="badge bg-transparent p-0">What We Do</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            We design and build GTM workflows using AI
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Tyche is a GTM consulting and systems firm. We help you understand how GTM really works today, identify what can be automated, design clear workflows, use AI to reduce manual work, and set up tools so they work together.
          </p>
          
          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <a href="/services" className="flex items-center gap-2">
                View Details
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Key points grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            "We do not sell leads",
            "We do not promise shortcuts",
            "We build repeatable systems",
          ].map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <p className="font-heading font-semibold text-foreground">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

