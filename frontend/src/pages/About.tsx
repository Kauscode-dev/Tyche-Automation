import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
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
            <span className="badge-gradient mb-6 inline-block">About Me</span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Kaustubh
            </h1>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 text-gradient">
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
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Product marketing, AI outbound, and automation—designed as one coherent system.
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

      {/* How I Think Section */}
      <section className="py-24 border-t border-white/5">
        <motion.div
          className="section-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="max-w-4xl">
            <span className="badge-gradient mb-4 inline-block">Philosophy</span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-foreground">
              How I Think About <span className="text-gradient">Modern GTM</span>
            </h3>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl"
          >
            Most GTM fails for predictable reasons.
            Not because founders aren't working hard—but because the system is broken.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl"
          >
            Here's what I've learned building and fixing GTM for B2B SaaS and AI startups:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4 max-w-3xl"
          >
            {[
              "Outbound fails when messaging is vague—not when volume is low.",
              "AI doesn't replace GTM thinking. It exposes weak thinking faster.",
              "GTM breaks when story, signal, and systems are built in isolation.",
              "Hiring SDRs before narrative clarity creates noise, not pipeline.",
              "Founders should own GTM early—then systemize it, not outsource it.",
            ].map((point, index) => (
              <div key={index} className="flex gap-4 items-start glass-card p-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-lg text-foreground">{point}</p>
              </div>
            ))}
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
            I use a single operating system to design and run GTM.
            I call it <span className="text-gradient font-semibold">Tyche</span>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl"
          >
            It's not a tool. It's not a funnel. It's a way of thinking.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6 max-w-4xl"
          >
            {[
              { title: "Narrative", desc: "Clear positioning and founder POV that makes the right buyers lean in." },
              { title: "Signal", desc: "Identifying accounts that are actually ready—using intent, behavior, and context." },
              { title: "Distribution", desc: "Outbound and content designed to feel relevant, not automated." },
              { title: "Automation", desc: "Infrastructure that scales what works—without losing judgment or quality." },
            ].map((item, index) => (
              <div key={index} className="glass-card-hover p-8">
                <h4 className="text-xl font-display font-bold text-gradient mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
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
            Ready to Scale GTM <span className="text-gradient">Thoughtfully</span>?
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

export default About;
