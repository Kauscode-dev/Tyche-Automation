import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Basic AI + GTM Audit",
    price: "₹4,999",
    description: "Best for early-stage founders",
    features: [
      "High-level GTM review",
      "Key workflow gaps",
      "AI opportunity overview",
      "Summary recommendations",
    ],
    cta: "Book Audit",
    highlight: false,
  },
  {
    name: "In-depth AI + GTM Audit",
    price: "₹14,999",
    description: "Best for scaling teams",
    features: [
      "Detailed workflow mapping",
      "AI readiness assessment",
      "Tool stack evaluation",
      "Automation roadmap",
      "Cost and ROI estimate",
    ],
    cta: "Book Audit",
    highlight: true,
  },
  {
    name: "Custom Audit",
    price: "Custom",
    description: "For complex setups or multiple teams",
    features: [
      "Custom scope",
      "Multi-team workflows",
      "Deeper system design inputs",
      "Audit fee adjustment",
    ],
    cta: "Get In Touch",
    highlight: false,
  },
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 stars-bg">
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
            <span className="badge bg-transparent p-0">Audit Pricing</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Simple and transparent
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            If you move forward with implementation, 100% of the audit fee is adjusted in the final implementation cost.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl transition-all ${
                tier.highlight
                  ? "glass-card p-8 ring-2 ring-primary shadow-xl scale-105 md:scale-110"
                  : "glass-card p-8"
              }`}
            >
              {/* Best For Badge */}
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-muted-foreground">one-time</span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                variant={tier.highlight ? "gradient" : "outline"}
                size="lg"
                className="w-full"
              >
                <a href="https://calendly.com/tyche-automation/audit" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6 text-center"
        >
          <p className="text-muted-foreground text-sm">
            <span className="font-semibold text-foreground">Implementation pricing</span> depends on number of workflows, tool integrations, and team involvement.
            <br />
            Most implementations fall between <span className="font-semibold text-foreground">₹75,000 to ₹2,00,000 per month</span>.
            <br />
            Final pricing shared after the audit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
