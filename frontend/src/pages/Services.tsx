import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-24 stars-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-foreground mb-6">
              What We Do
            </h1>
            <p className="text-muted-foreground text-xl mb-8">
              We design and build GTM workflows using AI
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Tyche is a GTM consulting and systems firm.
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                We help you understand how GTM really works today, identify what can be automated and what should not, design clear GTM workflows, use AI to reduce manual work, set up tools so they work together, and build GTM capability inside your company.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {[
                  "We do not sell leads",
                  "We do not promise shortcuts",
                  "We build repeatable systems",
                ].map((item) => (
                  <div key={item} className="glass-card p-4 text-center">
                    <p className="font-semibold text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Starting Point */}
      <section className="py-24 stars-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Our starting point: AI + GTM Audit
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Everything begins with an audit. The audit helps both you and us understand:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                { title: "GTM workflow maturity", desc: "Sales process, marketing flow, founder-led actions, CRM usage" },
                { title: "AI readiness of your team", desc: "Where AI can help, where AI should not be used, human vs system ownership" },
                { title: "Tool stack gaps and overlaps", desc: "Current tools in use, redundant tools, missing capabilities" },
                { title: "Cost and ROI of automation", desc: "Estimated build effort, tool costs, efficiency gains" },
              ].map((item) => (
                <div key={item.title} className="glass-card p-6">
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg">
              This avoids wasted money and false promises. You get a clear roadmap, even if you do not proceed with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What the Audit Covers */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              What the AI + GTM Audit covers
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Practical and hands-on. The audit focuses on five areas:
            </p>
            <div className="space-y-6">
              {[
                {
                  number: "1",
                  title: "GTM workflows",
                  items: ["Sales process", "Marketing flow", "Founder-led actions", "CRM usage"],
                },
                {
                  number: "2",
                  title: "AI readiness",
                  items: ["Where AI can help", "Where AI should not be used", "Human vs system ownership"],
                },
                {
                  number: "3",
                  title: "Tool stack",
                  items: ["Current tools in use", "Redundant tools", "Missing capabilities"],
                },
                {
                  number: "4",
                  title: "Workflow mapping",
                  items: ["Current state workflows", "Future state workflows", "Automation opportunities"],
                },
                {
                  number: "5",
                  title: "Cost and ROI",
                  items: ["Estimated build effort", "Tool costs", "Efficiency gains"],
                },
              ].map((section) => (
                <div key={section.number} className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold">
                      {section.number}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-3">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="text-muted-foreground text-sm">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 stars-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              What you actually get
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Real deliverables. Depending on scope, deliverables include:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "ICP and account selection logic",
                "Messaging frameworks",
                "Sales and follow-up workflows",
                "CRM structure and automation",
                "AI-assisted research setup",
                "SOPs and internal documentation",
              ].map((item) => (
                <div key={item} className="glass-card p-4">
                  <p className="text-muted-foreground">✓ {item}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg">
              Everything is built for your company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              What happens after the audit
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Clear roadmap. Flexible scope. We do not promise fixed builds without understanding complexity. A typical engagement looks like this:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Phase 1: AI + GTM Audit",
                  duration: "1 week",
                  description: "Interviews and system review, workflow mapping, AI readiness check, audit report and roadmap",
                },
                {
                  title: "Phase 2: System Design and Build",
                  duration: "4 to 6 weeks (ballpark)",
                  description: "Design GTM workflows, set up AI and automation, integrate tools, test end-to-end execution. You get weekly updates and visibility.",
                },
                {
                  title: "Phase 3: Handover and Enablement",
                  duration: "2 weeks",
                  description: "SOPs and documentation, team walkthroughs, training sessions, final refinements. Your team runs the system without us.",
                },
              ].map((phase) => (
                <div key={phase.title} className="glass-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-heading font-bold text-foreground">{phase.title}</h3>
                    <span className="text-primary font-semibold">{phase.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 stars-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Ready to build your GTM system?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Start with the AI + GTM Audit and get clarity on what to fix, what to build, and what not to waste money on.
            </p>
            <Button asChild variant="gradient" size="xl">
              <a href="https://calendly.com/tyche-automation/audit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Book your AI + GTM Audit
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
