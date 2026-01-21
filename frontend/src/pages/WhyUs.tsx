import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
        
        <motion.div
          className="section-container relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="max-w-4xl">
            <span className="badge-gradient mb-6 inline-block">Why Us</span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Kaustubh
            </h1>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 text-gradient">
              AI-Native GTM Operator & ABM Builder
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6 leading-relaxed"
          >
            I build and scale go-to-market systems for B2B founders—grounded in narrative clarity, real buyer signals, and AI-driven execution.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://cal.id/kaustubh-ai/quicksync?user=kaustubh-ai&overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              <Button variant="gradient" size="xl">
                <span>Work with me</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <Button variant="outline-gradient" size="xl">
              <span>Read my GTM thinking</span>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 border-t border-white/5">
        <motion.div
          className="section-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <span className="badge-gradient mb-4 inline-block">The Problem</span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-foreground">
              The Problem I <span className="text-gradient">Keep Seeing</span>
            </h3>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl"
          >
            Most GTM doesn't fail because founders lack effort. It fails because the system is broken. I've seen teams:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-3 max-w-3xl mb-10"
          >
            {[
              "Ship outbound without a clear narrative",
              "Chase volume instead of buyer intent",
              "Stack tools without owning the operating model",
              "Hire SDRs before earning signal",
            ].map((problem, index) => (
              <div key={index} className="flex gap-4 items-center glass-card p-4">
                <AlertCircle className="w-5 h-5 text-orange-400 shrink-0" />
                <p className="text-lg text-foreground">{problem}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-6 max-w-3xl border-orange-500/20">
            <p className="text-lg text-foreground font-semibold mb-2">The result is predictable:</p>
            <p className="text-muted-foreground">More activity. More dashboards. Very little momentum.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* GTM Operating System */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
        <motion.div
          className="section-container relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <span className="badge-gradient mb-4 inline-block">The System</span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-foreground">
              My GTM <span className="text-gradient">Operating System</span>
            </h3>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl"
          >
            I use one operating system to design and run GTM. I call it <span className="text-gradient font-semibold">Tyche</span>.
            It's not a tool or a funnel. It's a system abstracted from real ABM and outbound work.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6 max-w-4xl"
          >
            {[
              { title: "Narrative", desc: "Clear positioning and founder POV that makes the right buyers lean in." },
              { title: "Signal", desc: "ICP-led account selection using intent, behavior, and context—not static lists." },
              { title: "Distribution", desc: "Outbound and content designed to feel relevant, not automated." },
              { title: "Automation", desc: "AI-driven workflows that scale what works without losing judgment." },
            ].map((item, index) => (
              <div key={index} className="glass-card-hover p-8">
                <h4 className="text-xl font-display font-bold text-gradient mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 border-t border-white/5">
        <motion.div
          className="section-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <span className="badge-gradient mb-4 inline-block">Ideal Fit</span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-foreground">
              Who This Is <span className="text-gradient">For</span>
            </h3>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-4 max-w-3xl"
          >
            {[
              "Seed to Series C B2B SaaS & AI founders",
              "Founders running GTM themselves and hitting a ceiling",
              "Lean teams that don't want SDR factories or bloated agencies",
              "Startups that need real traction for fundraising or scale",
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-center glass-card p-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <p className="text-lg text-foreground">{item}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5">
        <motion.div
          className="section-container text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-foreground"
          >
            Ready to Build <span className="text-gradient">Thoughtful GTM</span>?
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
              <Button variant="gradient" size="xl">
                <span>Work with me</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <Button variant="outline-gradient" size="xl">
              <span>Read my GTM essays</span>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;
