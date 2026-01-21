import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, MessageSquare, Workflow, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Market & ICP Intelligence",
    description: "AI-assisted ICP mapping + segmentation with multi-signal detection using hiring, usage, community, and intent data.",
    outcome: "Target accounts that are ready now.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "AI Narrative & Messaging Engine",
    description: "Extract founder POV + product marketing insights to build differentiated messaging per persona & tier.",
    outcome: "Messaging that doesn't sound like 'just another AI email.'",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Automated Outbound Infrastructure",
    description: "Domain + inbox setup & warmup, AI-powered enrichment & routing with Clay + APIs, multi-channel delivery.",
    outcome: "Outbound that scales and adapts in real time.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "AI GTM Ops & Deal Flow",
    description: "Smart lead scoring using signals + engagement, context cards explaining why this account and why now, CRM handoff.",
    outcome: "Reps focus only on warm conversations.",
  },
];

const ProcessStep = ({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="flex gap-6 lg:gap-8">
        {/* Number & Line */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-secondary border-2 border-primary flex items-center justify-center shrink-0">
            <span className="font-display text-2xl font-bold text-primary">{step.number}</span>
          </div>
          {!isLast && (
            <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent min-h-[100px]" />
          )}
        </div>

        {/* Content */}
        <div className="pb-12">
          <div className="flex items-center gap-3 mb-3">
            <step.icon className="w-5 h-5 text-primary" />
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              {step.title}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">
            {step.description}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
            {step.outcome}
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
    <section id="process" className="py-24 bg-secondary/30 relative">
      {/* Subtle pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Build Your GTM Engine
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven 4-step process to get you from chaos to pipeline in weeks, not months
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
