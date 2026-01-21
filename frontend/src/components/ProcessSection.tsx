import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, MessageSquare, Workflow, TrendingUp, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Market & ICP Intelligence",
    description: "AI-assisted ICP mapping + segmentation with multi-signal detection using hiring, usage, community, and intent data.",
    outcome: "Target accounts that are ready now",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "AI Narrative & Messaging Engine",
    description: "Extract founder POV + product marketing insights to build differentiated messaging per persona & tier.",
    outcome: "Messaging that doesn't sound automated",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Automated Outbound Infrastructure",
    description: "Domain + inbox setup & warmup, AI-powered enrichment & routing with Clay + APIs, multi-channel delivery.",
    outcome: "Outbound that scales in real time",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "AI GTM Ops & Deal Flow",
    description: "Smart lead scoring using signals + engagement, context cards explaining why this account and why now, CRM handoff.",
    outcome: "Reps focus only on warm conversations",
  },
];

const ProcessStep = ({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="flex gap-8 lg:gap-12">
        {/* Number & Line */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-lg shadow-primary/25">
              <span className="font-display text-xl font-bold text-white">{step.number}</span>
            </div>
            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent animate-ping opacity-20" />
          </div>
          {!isLast && (
            <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 via-accent/30 to-transparent min-h-[120px] mt-4" />
          )}
        </div>

        {/* Content */}
        <div className="pb-16 flex-1">
          <div className="glass-card p-8 hover:border-primary/20 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="feature-icon">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                {step.title}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {step.description}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{step.outcome}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProcessSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-accent/10 blur-[100px]" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="badge-gradient mb-4 inline-block">Our Process</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            From chaos to <span className="text-gradient">pipeline</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven 4-step process to build your GTM engine in weeks, not months
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
