import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, XCircle, Target, Zap, ArrowRight, BarChart3, Users, Clock } from "lucide-react";

export const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const goodFit = [
    "B2B SaaS or services founder",
    "Seed to Series B",
    "Selling to India, US, or global markets",
    "Still involved in sales",
    "Looking for clarity and control",
  ];

  const notForYou = [
    "Mass lead generation",
    "One-off campaigns",
    "Full GTM outsourcing",
  ];

  return (
    <section className="py-24 stars-bg">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="glass-card inline-block px-5 py-2 mb-4">
            <span className="badge bg-transparent p-0">Who This Is For</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            This is a <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">good fit if you are</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Good Fit */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Good Fit
            </h3>
            <ul className="space-y-4">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-500" />
              This Is Not For
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            How This Helps You
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Clear GTM Direction", Component: Target },
              { title: "Less Manual Work", Component: Zap },
              { title: "Faster Follow-ups", Component: ArrowRight },
              { title: "Cleaner CRM Data", Component: BarChart3 },
              { title: "Easier Hiring & Onboarding", Component: Users },
              { title: "More Time Back", Component: Clock },
            ].map((benefit) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="glass-card p-6 text-center hover:shadow-lg transition-all"
              >
                <benefit.Component className="w-10 h-10 mx-auto mb-3 text-primary" />
                <p className="font-heading font-semibold text-foreground">{benefit.title}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg font-semibold">
            The system works even when you step away.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

