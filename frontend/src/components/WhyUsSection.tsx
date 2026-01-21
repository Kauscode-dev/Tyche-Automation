import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, Shield, Clock, Target, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Strategy + Execution Combined",
    description: "We don't just advise—we build, optimize, and scale alongside you.",
  },
  {
    icon: Shield,
    title: "15+ Years of GTM Experience",
    description: "Engineering, product marketing, and GTM systems across B2B tech.",
  },
  {
    icon: Clock,
    title: "Fast Deliverables, Real Results",
    description: "Hands-on operators who move fast and deliver what matters.",
  },
  {
    icon: Target,
    title: "AI-Native Approach",
    description: "Leverage cutting-edge AI tools for personalization at scale.",
  },
  {
    icon: Lightbulb,
    title: "Founder-Led Storytelling",
    description: "Turn complex tech into clear growth narratives that convert.",
  },
  {
    icon: Check,
    title: "Your GTM Partner",
    description: "Not an agency. A partner always on-call, building with you.",
  },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="why-us" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Founders Choose{" "}
              <span className="text-gradient">Tyche</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're not just another agency. We're your strategic growth partner—combining 
              deep GTM expertise with modern AI tools to build systems that scale.
            </p>

            {/* Highlight Box */}
            <div className="p-6 bg-card border-2 border-primary">
              <p className="text-foreground font-medium mb-2 font-display">
                "I'm not an exec. I'm your GTM partner."
              </p>
              <p className="text-muted-foreground text-sm">
                Always on-call, building and optimizing alongside you.
              </p>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <reason.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-bold text-foreground mb-2 text-sm">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
