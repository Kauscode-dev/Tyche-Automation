import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Professional SVG icons
const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TrendingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const audiences = [
  {
    icon: RocketIcon,
    title: "Seed to Series C",
    subtitle: "B2B SaaS & AI Startups",
    description: "You need predictable pipeline fast. We build systems that scale with you.",
  },
  {
    icon: UserIcon,
    title: "Founder-Led Sales",
    subtitle: "Maxed Out CEOs",
    description: "You've been doing it all yourself. Time to systemize and scale beyond you.",
  },
  {
    icon: UsersIcon,
    title: "Lean Teams",
    subtitle: "No SDR Budget",
    description: "You want system-driven GTM, not an expensive SDR army or bloated agency.",
  },
  {
    icon: TrendingIcon,
    title: "Fundraising Mode",
    subtitle: "Need Traction Now",
    description: "Show investors momentum with pipeline clarity and real growth metrics.",
  },
];

export const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 stars-bg">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-3">
              <div className="img-container rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80"
                  alt="Founder working on laptop"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 -z-10 blur-xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card inline-block px-5 py-2 mb-4">
              <span className="badge bg-transparent p-0">Who We Help</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Built for <span className="glass-highlight text-gradient">ambitious founders</span>
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
                  className="glass-card p-4 hover:shadow-lg transition-all"
                >
                  <div className="text-primary mb-3">
                    <audience.icon />
                  </div>
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
