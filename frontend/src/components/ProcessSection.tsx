import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

// Professional SVG icons
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const TrendingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const steps = [
  {
    number: "01",
    icon: SearchIcon,
    title: "Discovery & Strategy",
    description: "We dive deep into your ICP, market, and current GTM. Then we design a system tailored to your goals.",
    duration: "Week 1",
    outcomes: ["ICP definition", "Market analysis", "System architecture"],
  },
  {
    number: "02",
    icon: MessageIcon,
    title: "Messaging & Positioning",
    description: "We craft your narrative—the story that makes your ideal buyers pay attention and want to learn more.",
    duration: "Week 1-2",
    outcomes: ["Value proposition", "Messaging framework", "Content pillars"],
  },
  {
    number: "03",
    icon: ZapIcon,
    title: "Build & Automate",
    description: "We set up your AI outbound, content engine, and automation workflows. Everything integrated and ready to scale.",
    duration: "Week 2-3",
    outcomes: ["AI sequences live", "Automation workflows", "Full integration"],
  },
  {
    number: "04",
    icon: TrendingIcon,
    title: "Launch & Optimize",
    description: "Go live and start generating pipeline. We continuously optimize based on real data and feedback.",
    duration: "Week 3-4",
    outcomes: ["Live campaigns", "Performance tracking", "Continuous improvement"],
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
            <span className="badge bg-transparent p-0">How It Works</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            From zero to <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">pipeline</span> in 2-4 weeks
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven 4-step process that gets you results fast—without the typical agency timeline.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="glass-card p-6 h-full hover:shadow-lg transition-shadow">
                {/* Number Badge */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                  <span className="font-heading font-bold text-white text-lg">{step.number}</span>
                </div>

                {/* Duration */}
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{step.duration}</span>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-foreground mt-2 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Outcomes */}
                <ul className="space-y-2">
                  {step.outcomes.map((outcome) => (
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
