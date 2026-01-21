import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, UserCheck, Users, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Seed to Series C",
    subtitle: "B2B SaaS & AI startups",
    description: "Early-stage startups building predictable GTM and pipeline fast.",
  },
  {
    icon: UserCheck,
    title: "Founders doing GTM",
    subtitle: "themselves (but maxed out)",
    description: "You've done it all—now it's time to scale beyond yourself.",
  },
  {
    icon: Users,
    title: "Lean tech teams",
    subtitle: "that won't hire SDRs",
    description: "Lean teams that want system-driven GTM, not spam or overhead.",
  },
  {
    icon: TrendingUp,
    title: "Startups needing traction",
    subtitle: "for fundraising or scaling",
    description: "Show investors momentum with pipeline clarity and growth.",
  },
];

export const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="badge-gradient mb-4 inline-block">Who We Work With</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Built for <span className="text-gradient">ambitious founders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card-hover p-8 text-center"
            >
              <div className="feature-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {audience.title}
              </h3>
              <span className="text-primary text-sm font-medium block mb-4">
                {audience.subtitle}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
