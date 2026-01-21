import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, Sparkles } from "lucide-react";

const Careers = () => {
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
            <span className="badge-gradient mb-6 inline-block">We're Hiring</span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Come Build With <span className="text-gradient">Tyche</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6 leading-relaxed"
          >
            We're building the next generation of AI-native GTM systems.
            If you like thinking deeply, building fast, and owning outcomes—you'll fit in.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="mailto:kaustubh@tycheautomation.online" className="inline-block">
              <Button variant="gradient" size="xl">
                <span>Apply to Work With Us</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* This is Not Normal */}
      <section className="py-24 border-t border-white/5">
        <motion.div
          className="section-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <span className="badge-gradient mb-4 inline-block">Culture</span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-foreground">
              This Is Not A <span className="text-gradient">Normal Job</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h4 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" />
                If you're looking for:
              </h4>
              <ul className="space-y-3">
                {["Rigid roles", "Endless approvals", "Shallow execution", "Micromanagement"].map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground italic mt-4">this won't be a fit.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-card-hover p-8 border-primary/20">
              <h4 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                If you want:
              </h4>
              <ul className="space-y-3">
                {["Ownership", "Real GTM exposure", "Direct feedback", "Work that compounds"].map((item, index) => (
                  <li key={index} className="flex gap-3 text-foreground">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gradient font-semibold mt-4">keep reading.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who We're Looking For */}
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
            <span className="badge-gradient mb-4 inline-block">Ideal Candidate</span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-foreground">
              Who We're <span className="text-gradient">Looking For</span>
            </h3>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground font-semibold mb-8"
          >
            We're looking for builders, not resumes.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4 max-w-3xl mb-12"
          >
            {[
              "Think in systems, not tasks",
              "Can go from ambiguity → structure",
              "Care about quality and judgment",
              "Like being close to real business problems",
              "Want to learn by building, not watching",
            ].map((trait, index) => (
              <div key={index} className="flex gap-4 items-center glass-card p-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <p className="text-lg text-foreground">{trait}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-6 leading-relaxed"
          >
            Backgrounds we often see:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3"
          >
            {[
              "GTM & growth operators",
              "Product marketers",
              "Outbound & ABM specialists",
              "Automation builders",
              "Engineers curious about GTM",
            ].map((bg, index) => (
              <span key={index} className="badge-gradient">{bg}</span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* What You'll Get */}
      <section className="py-24 border-t border-white/5">
        <motion.div
          className="section-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <span className="badge-gradient mb-4 inline-block">Benefits</span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-foreground">
              What You'll <span className="text-gradient">Get</span>
            </h3>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl"
          >
            {[
              { icon: Sparkles, title: "Real B2B GTM exposure", desc: "Work on high-stakes problems" },
              { icon: Sparkles, title: "AI-native systems", desc: "Hands-on experience building" },
              { icon: Sparkles, title: "Fast learning loops", desc: "Clear feedback, rapid growth" },
              { icon: Sparkles, title: "Remote-first", desc: "Flexible collaboration" },
              { icon: Sparkles, title: "Growth path", desc: "Long-term roles as we scale" },
              { icon: Sparkles, title: "Direct founder access", desc: "Work alongside Kaustubh" },
            ].map((benefit, index) => (
              <div key={index} className="glass-card-hover p-6">
                <benefit.icon className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-display font-bold text-foreground mb-1">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* How to Apply */}
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
            <span className="badge-gradient mb-4 inline-block">Application</span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-foreground">
              How to <span className="text-gradient">Apply</span>
            </h3>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl"
          >
            We don't want a traditional resume. Instead, send us:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4 max-w-3xl mb-10"
          >
            {[
              "A short note on why Tyche resonates with you",
              "One example of something you've built, fixed, or shipped",
              "What kind of work you want to do with us",
            ].map((step, index) => (
              <div key={index} className="flex gap-4 items-start glass-card p-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-white text-sm">{index + 1}</span>
                </div>
                <p className="text-lg text-foreground pt-1">{step}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground italic"
          >
            That's it. If it's a fit, we'll talk.
          </motion.p>
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
            Ready to <span className="text-gradient">Build With Us</span>?
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            If you're a builder who wants to work on meaningful GTM systems—and grow alongside a founder-led team—we'd love to hear from you.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="mailto:kaustubh@tycheautomation.online" className="inline-block">
              <Button variant="gradient" size="xl">
                <span>Apply to Work With Us</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
