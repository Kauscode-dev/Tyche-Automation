import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, XCircle, Target, Brain, Zap } from "lucide-react";
import { useRef } from "react";

const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background stars-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="glass-card inline-block px-5 py-2 mb-6">
              <span className="badge bg-transparent p-0">Careers at Tyche</span>
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Build real GTM systems.
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">Not demos. Not theory.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl">
              Tyche builds AI-powered GTM systems for real B2B founders. These systems run sales, marketing, and operations inside growing companies.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl font-medium">
              If you like thinking clearly, building useful things, and owning outcomes, you will fit here.
            </p>
            <a href="mailto:careers@tycheautomation.online">
              <Button variant="gradient" size="xl">
                Apply to work with us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Not For You / For You */}
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
              <span className="badge bg-transparent p-0">This is not a normal job</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Be honest with yourself
              <br />
              <span className="text-muted-foreground font-normal text-2xl">before applying.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Not For You */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                This is NOT for you if:
              </h3>
              <ul className="space-y-4">
                {[
                  "You want fixed task lists",
                  "You need constant instructions",
                  "You prefer repetitive work",
                  "You only care about tools, not outcomes",
                  "You want a slow, predictable 9-to-5 role",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">–</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* For You */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                This IS for you if:
              </h3>
              <ul className="space-y-4">
                {[
                  "You like solving messy problems",
                  "You enjoy designing systems end to end",
                  "You want to work close to founders",
                  "You care about how businesses actually run",
                  "You want your work to matter",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              What we do at Tyche
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We work with early-stage B2B founders to audit their GTM and AI readiness, design clear workflows, build automation using AI and modern tools, and help teams run these systems in-house.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Every project is different.",
                description: "We don't have templates or playbooks. Each founder's situation is unique, and we build accordingly.",
              },
              {
                title: "Every build is real.",
                description: "Nothing we build is theoretical. Every system goes live inside a real company, handling real sales and revenue.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="py-24 stars-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
              Who we are looking for
            </h2>
          </motion.div>

          {/* GTM Engineers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <div className="glass-card p-8 border border-primary/20">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary flex-shrink-0" />
                GTM Engineers
              </h3>
              <p className="text-muted-foreground">
                You understand how sales, marketing, and ops connect. You might have experience with CRM systems, sales workflows, GTM tooling, process design, or automation logic. You care less about buzzwords and more about what works.
              </p>
            </div>
          </motion.div>

          {/* AI Automation Developers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card p-8 border border-primary/20">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Brain className="w-6 h-6 text-primary flex-shrink-0" />
                AI Automation Developers
              </h3>
              <p className="text-muted-foreground">
                You enjoy building workflows that remove manual work. You might have experience with automation tools, APIs and integrations, data flows, AI models and prompts, or workflow orchestration. You like clean systems, not hacks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
              How we work
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-primary/20"
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Project-based by default</h3>
              <p className="text-muted-foreground mb-4">Most people start with us on a project basis. You get clear scope, clear outcomes, and direct collaboration with founders. You own what you build.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 border border-primary/20"
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Long-term opportunity</h3>
              <p className="text-muted-foreground">If it works well on both sides, there's an option to join as a long-term contributor or grow into an in-house Solutions Consultant role.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What makes Tyche different */}
      <section className="py-24 stars-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
              What makes Tyche different
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "You work on real problems",
                points: ["No internal tools", "No fake case studies", "No endless planning"],
              },
              {
                title: "You get real exposure",
                points: ["Work directly with founders", "See how decisions affect revenue", "Understand GTM beyond theory"],
              },
              {
                title: "You grow fast",
                points: ["Design, build, and ship", "See results quickly", "Build skills that compound"],
              },
              {
                title: "You get autonomy",
                points: ["No micromanagement", "No long approval chains", "Clear goals, flexible execution"],
              },
              {
                title: "Remote-first & async",
                points: ["Work from anywhere", "Flexible hours", "Async-friendly culture"],
              },
              {
                title: "We care about output",
                points: ["Not hours worked", "Not desk time", "Real results matter"],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success */}
      <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 text-center">
              What success looks like here
            </h2>
            <div className="glass-card p-8 border border-primary/20">
              <p className="text-muted-foreground mb-6">
                You will do well at Tyche if:
              </p>
              <ul className="space-y-4">
                {[
                  "You take responsibility without being asked",
                  "You ask good questions",
                  "You document your work",
                  "You care about quality",
                  "You think in systems, not tasks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 stars-bg">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="glass-card inline-block px-5 py-2 mb-4">
                <span className="badge bg-transparent p-0">How to apply</span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Skip the resume.
              </h2>
              <p className="text-muted-foreground text-lg">
                Show us how you think.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 mb-12"
            >
              {[
                {
                  num: "1",
                  title: "Why Tyche interests you",
                  desc: "Short and honest.",
                },
                {
                  num: "2",
                  title: "One thing you have built or fixed",
                  desc: "A workflow, system, automation, or product.",
                },
                {
                  num: "3",
                  title: "What kind of work you want to do here",
                  desc: "GTM, AI automation, or both.",
                },
              ].map((step) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-white text-sm">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a href="mailto:careers@tycheautomation.online">
                <Button variant="gradient" size="xl" className="mb-4">
                  Apply here
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <p className="text-muted-foreground">
                We respond to every application within 48 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final note */}
      <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="glass-card p-8 border border-primary/20">
              <p className="text-lg text-muted-foreground mb-4">
                <span className="font-semibold text-foreground">If you want a safe job, this is not it.</span>
              </p>
              <p className="text-lg text-foreground font-semibold">
                If you want to build real systems that businesses depend on, welcome.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
