import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

// Professional SVG icons
const AuditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const BuildIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2v20M2 12h20" />
    <circle cx="12" cy="12" r="8" />
  </svg>
);

const HandoverIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const phases = [
  {
    number: "01",
    icon: AuditIcon,
    title: "AI + GTM Audit",
    duration: "1 week",
    description: "Everything begins with an audit. We understand your GTM workflow maturity, AI readiness, tool stack gaps, and automation opportunities.",
    outcomes: [
      "GTM workflow review",
      "AI readiness assessment",
      "Tool stack evaluation",
      "Automation roadmap",
    ],
  },
  {
    number: "02",
    icon: BuildIcon,
    title: "System Design & Build",
    duration: "4 to 6 weeks",
    description: "We design GTM workflows, set up AI and automation, integrate tools, and test end-to-end execution. You get weekly updates and visibility.",
    outcomes: [
      "Workflow design",
      "AI & automation setup",
      "Tool integration",
      "Weekly updates",
    ],
  },
  {
    number: "03",
    icon: HandoverIcon,
    title: "Handover & Enablement",
    duration: "2 weeks",
    description: "We provide SOPs, documentation, team walkthroughs, and training. Your team runs the system without us.",
    outcomes: [
      "Documentation & SOPs",
      "Team training",
      "Final refinements",
      "Full handover",
    ],
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-secondary/30">
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
            <span className="badge bg-transparent p-0">Our Process</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Clear roadmap. <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">Flexible scope.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A typical engagement spans audit, design & build, and handover phases. Timeline depends on complexity.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="glass-card p-8 h-full hover:shadow-lg transition-shadow">
                {/* Number Badge */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                  <span className="font-heading font-bold text-white text-lg">{phase.number}</span>
                </div>

                {/* Duration */}
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{phase.duration}</span>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-foreground mt-2 mb-3">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {phase.description}
                </p>

                {/* Outcomes */}
                <ul className="space-y-2">
                  {phase.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

