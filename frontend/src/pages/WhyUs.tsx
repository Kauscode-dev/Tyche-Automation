import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WhyUs = () => {
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
              AI-Native GTM Operator & ABM Builder
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6 leading-relaxed"
          >
            I build and scale go-to-market systems for B2B founders—grounded in narrative clarity, real buyer signals, and AI-driven execution.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            I've built ABM and outbound GTM from zero inside high-stakes businesses.
            <br />
            Now I do it selectively with founders who want leverage, not noise.
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

      {/* The Problem Section */}
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
            The Problem I Keep Seeing
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            Most GTM doesn't fail because founders lack effort.
            <br />
            It fails because the system is broken.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            I've seen teams:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-6 mb-10"
          >
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Ship outbound without a clear narrative</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Chase volume instead of buyer intent</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Stack tools without owning the operating model</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Hire SDRs before earning signal</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground font-semibold mb-4"
          >
            The result is predictable:
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            More activity.
            <br />
            More dashboards.
            <br />
            Very little momentum.
          </motion.p>
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
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            After building GTM inside B2B SaaS and insurance businesses, a few beliefs have held up every time:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Outbound fails when messaging is unclear—not when volume is low.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">AI doesn't replace GTM thinking. It exposes weak thinking faster.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">GTM breaks when story, signal, and systems are owned by different people.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">ABM only works when ICP definition, prioritization, and execution are tightly integrated.</p>
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
            If these resonate, we'll work well together.
          </motion.p>
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
            I use one operating system to design and run GTM.
            <br />
            <br />
            I call it <span className="text-primary font-semibold">Tyche</span>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            Tyche is not a tool or a funnel.
            <br />
            It's a system abstracted from real ABM and outbound work—built under revenue pressure, CAC constraints, and sales accountability.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            It has four layers:
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
              <p className="text-muted-foreground">ICP-led account selection using intent, behavior, and context—not static lists.</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-lg">
              <h4 className="text-xl font-display font-bold text-primary mb-3">Distribution</h4>
              <p className="text-muted-foreground">Outbound and content designed to feel relevant, not automated.</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-lg">
              <h4 className="text-xl font-display font-bold text-primary mb-3">Automation</h4>
              <p className="text-muted-foreground">AI-driven workflows that scale what works without losing judgment.</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mt-10 italic"
          >
            Every company is different.
            <br />
            The system stays consistent.
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
            Typically, this looks like:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-6 mb-10"
          >
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Building or rebuilding a complete GTM system (ABM + outbound + ops)</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Fixing broken messaging, targeting, or signal logic</p>
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
            I've already done this in-house.
            <br />
            Now I do it selectively.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mt-6"
          >
            If you're looking for outsourced hustle or vanity metrics, I'm not a fit.
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
              <p className="text-lg text-foreground">Startups that need real traction for fundraising or scale</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground italic"
          >
            If that's you, we should talk.
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
            Ready to Build Thoughtful GTM?
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            If you're building GTM thoughtfully—and want a system you actually control—I'd be happy to connect.
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

export default WhyUs;
