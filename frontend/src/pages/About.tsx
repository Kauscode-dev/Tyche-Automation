import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Kaustubh
            </h1>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-primary">
              AI-Native GTM Operator
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6 leading-relaxed"
          >
            I help B2B founders build go-to-market systems that don't rely on spam, SDR armies, or guesswork.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            Product marketing, AI outbound, and automation—designed as one coherent system.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://cal.id/kaustubh-ai/quicksync?user=kaustubh-ai&overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                Work with me
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <Button variant="outline" size="xl">
              Read my GTM thinking
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* How I Think Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl font-bold mb-12 text-foreground"
          >
            How I Think About Modern GTM
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            Most GTM fails for predictable reasons.
            <br />
            Not because founders aren't working hard—but because the system is broken.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            Here's what I've learned building and fixing GTM for B2B SaaS and AI startups:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Outbound fails when messaging is vague—not when volume is low.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">AI doesn't replace GTM thinking. It exposes weak thinking faster.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">GTM breaks when story, signal, and systems are built in isolation.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Hiring SDRs before narrative clarity creates noise, not pipeline.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Founders should own GTM early—then systemize it, not outsource it.</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mt-10 italic"
          >
            If you disagree with most of this, we probably won't work well together—and that's fine.
          </motion.p>
        </motion.div>
      </section>

      {/* Why I Do This */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl font-bold mb-12 text-foreground"
          >
            Why I Do This
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I kept seeing founders duct-tape growth with tools, agencies, and SDR teams—without ever fixing the core story or signal.
            </p>

            <p className="text-foreground font-semibold">
              The result was always the same:
            </p>

            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <div>
                <p>More activity.</p>
                <p>More dashboards.</p>
                <p>No real momentum.</p>
              </div>
            </div>

            <p>
              So I started building GTM the way software is built:
              <br />
              Clear narrative first.
              <br />
              Signals over volume.
              <br />
              Systems that compound instead of burn out.
            </p>

            <p>
              That approach became the foundation for everything I do now.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* My GTM Operating System */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl font-bold mb-12 text-foreground"
          >
            My GTM Operating System
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            I use a single operating system to design and run GTM.
            <br />
            <br />
            I call it <span className="text-primary font-semibold">Tyche</span>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            It's not a tool.
            <br />
            It's not a funnel.
            <br />
            It's a way of thinking.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            Tyche is built on four layers:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-card border border-border p-8 rounded-lg">
              <h4 className="text-xl font-display font-bold text-primary mb-3">Narrative</h4>
              <p className="text-muted-foreground">Clear positioning and founder POV that makes the right buyers lean in.</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-lg">
              <h4 className="text-xl font-display font-bold text-primary mb-3">Signal</h4>
              <p className="text-muted-foreground">Identifying accounts that are actually ready—using intent, behavior, and context.</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-lg">
              <h4 className="text-xl font-display font-bold text-primary mb-3">Distribution</h4>
              <p className="text-muted-foreground">Outbound and content designed to feel relevant, not automated.</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-lg">
              <h4 className="text-xl font-display font-bold text-primary mb-3">Automation</h4>
              <p className="text-muted-foreground">Infrastructure that scales what works—without losing judgment or quality.</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mt-10 italic"
          >
            Every engagement is different.
            <br />
            The system stays the same.
          </motion.p>
        </motion.div>
      </section>

      {/* How I Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl font-bold mb-12 text-foreground"
          >
            How I Work With Founders
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            I don't run an agency.
            <br />
            I work hands-on with a small number of founders at a time.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            Typically in one of three ways:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-6 mb-10"
          >
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Designing and building a complete GTM system from scratch</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Fixing broken outbound, messaging, or GTM ops</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Acting as a GTM partner during critical growth or fundraising phases</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            If you're looking for volume, vanity metrics, or outsourced hustle—I'm not a fit.
            <br />
            <br />
            If you want clarity, leverage, and a system you actually control—we should talk.
          </motion.p>
        </motion.div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl font-bold mb-12 text-foreground"
          >
            Who This Is For
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            This work is usually a fit for:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4 mb-10"
          >
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Seed to Series C B2B SaaS & AI founders</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Founders running GTM themselves and hitting a ceiling</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Lean teams that don't want SDR factories or bloated agencies</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Startups that need real traction—not just activity—for fundraising or scale</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground italic"
          >
            If that sounds like you, keep reading. Or reach out.
          </motion.p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl font-bold mb-8 text-foreground"
          >
            Ready to Scale GTM Thoughtfully?
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            If you're building GTM thoughtfully—and want it to scale without turning into noise—I'd be happy to talk.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://cal.id/kaustubh-ai/quicksync?user=kaustubh-ai&overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                Work with me
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <Button variant="outline" size="xl">
              Read my GTM essays
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
