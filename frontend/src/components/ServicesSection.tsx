import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, XOctagon, AlertTriangle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://form.typeform.com/to/FbzCJwTM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Quick Survey
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground text-sm mt-4 max-w-2xl mx-auto">
            Answer few simple questions to get a free expert consultation
          </p>
        </motion.div>

        {/* Key points grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { text: "We do not sell leads", Component: XOctagon },
            { text: "We do not promise shortcuts", Component: AlertTriangle },
            { text: "We build repeatable systems", Component: Sparkles },
          ].map((point, index) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-8 text-center hover:shadow-xl transition-all border border-primary/20 hover:border-primary/50"
            >
              <point.Component className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="font-heading font-bold text-lg text-foreground">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

