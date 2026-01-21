import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, User, Users, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Seed to Series C",
    subtitle: "B2B SaaS & AI Startups",
    description: "You need predictable pipeline fast. We build systems that scale with you.",
  },
  {
    icon: User,
    title: "Founder-Led Sales",
    subtitle: "Maxed Out CEOs",
    description: "You've been doing it all yourself. Time to systemize and scale beyond you.",
  },
  {
    icon: Users,
    title: "Lean Teams",
    subtitle: "No SDR Budget",
    description: "You want system-driven GTM, not an expensive SDR army or bloated agency.",
  },
  {
    icon: TrendingUp,
    title: "Fundraising Mode",
    subtitle: "Need Traction Now",
    description: "Show investors momentum with pipeline clarity and real growth metrics.",
  },
];

export const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="img-container rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80"
                alt="Founder working on laptop"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="badge mb-4 inline-block">Who We Help</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Built for <span className="text-gradient">ambitious founders</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We work with B2B founders who want leverage—not just more activity.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {audiences.map((audience, index) => (
                <motion.div
                  key={audience.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/20 transition-colors"
                >
                  <audience.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-1">{audience.title}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{audience.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
