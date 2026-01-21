import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
              Come Build With Tyche
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6 leading-relaxed"
          >
            We're building the next generation of AI-native GTM systems.
            If you like thinking deeply, building fast, and owning outcomes—you'll fit in.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            Tyche is founder-led today.
            <br />
            We're opening the door to builders who want to grow with it.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="mailto:kaustubh@tycheautomation.online" className="inline-block">
              <Button variant="hero" size="xl">
                Apply to Work With Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* This is Not Normal */}
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
            This Is Not A Normal Job
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            Tyche is not a traditional agency.
            <br />
            And this is not a traditional careers page.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            We're building GTM the way software is built:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <div>
              <h4 className="font-display text-xl font-bold text-foreground mb-4">If you're looking for:</h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Rigid roles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Endless approvals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Shallow execution</span>
                </li>
              </ul>
              <p className="text-muted-foreground italic mt-4">this won't be a fit.</p>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-foreground mb-4">If you want:</h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-foreground">Ownership</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-foreground">Real GTM exposure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-foreground">Direct feedback</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-foreground">Work that compounds</span>
                </li>
              </ul>
              <p className="text-foreground italic mt-4 font-semibold">keep reading.</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Clear systems</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Strong opinions</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Real accountability</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Minimal noise</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What We're Building */}
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
            What We're Building
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground font-semibold mb-6"
          >
            Tyche is an AI-native GTM operating system.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            We help B2B founders design and run GTM across:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4 mb-10"
          >
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Narrative & positioning</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">ICP & signal-based targeting</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Outbound & content distribution</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">AI-driven automation & ops</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-6 leading-relaxed"
          >
            Everything we build is:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-3"
          >
            <div className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <p className="text-lg text-foreground">System-first</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <p className="text-lg text-foreground">Signal-driven</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <p className="text-lg text-foreground">Founder-led</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <p className="text-lg text-foreground">Designed to scale without spam</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mt-10 italic"
          >
            We care more about clarity and leverage than volume.
          </motion.p>
        </motion.div>
      </section>

      {/* Who We're Looking For */}
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
            Who We're Looking For
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground font-semibold mb-8"
          >
            We're looking for builders, not resumes.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            People who:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4 mb-12"
          >
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Think in systems, not tasks</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Can go from ambiguity → structure</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Care about quality and judgment</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Like being close to real business problems</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Want to learn by building, not watching</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-6 leading-relaxed"
          >
            Backgrounds we often see:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-3 mb-8"
          >
            <div className="flex gap-3">
              <span className="text-primary">•</span>
              <p className="text-lg text-foreground">GTM & growth operators</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary">•</span>
              <p className="text-lg text-foreground">Product marketers</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary">•</span>
              <p className="text-lg text-foreground">Outbound & ABM specialists</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary">•</span>
              <p className="text-lg text-foreground">Automation & no-code / low-code builders</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary">•</span>
              <p className="text-lg text-foreground">Engineers curious about GTM</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground italic"
          >
            You don't need to check every box.
            <br />
            You do need strong fundamentals and taste.
          </motion.p>
        </motion.div>
      </section>

      {/* How You'll Work */}
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
            How You'll Work
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            This is a founder-led environment.
            <br />
            <br />
            You'll work:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4 mb-12"
          >
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Directly with me (Kaustubh)</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">On live founder GTM problems</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">Across strategy and execution</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">With real ownership, not shadow work</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-6 leading-relaxed"
          >
            There's no artificial separation between:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-3"
          >
            <div className="flex gap-3">
              <span className="text-primary">→</span>
              <p className="text-lg text-foreground">Thinking and doing</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary">→</span>
              <p className="text-lg text-foreground">Strategy and ops</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary">→</span>
              <p className="text-lg text-foreground">Learning and shipping</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mt-8 italic"
          >
            If you do good work, you'll see it live in the system.
          </motion.p>
        </motion.div>
      </section>

      {/* What You'll Get */}
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
            What You'll Get
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="space-y-4 mb-12"
          >
            <div className="flex gap-3">
              <span className="text-primary font-bold">→</span>
              <p className="text-lg text-foreground">Exposure to real B2B GTM at high stakes</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">→</span>
              <p className="text-lg text-foreground">Hands-on experience building AI-native systems</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">→</span>
              <p className="text-lg text-foreground">Clear feedback and fast learning loops</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">→</span>
              <p className="text-lg text-foreground">Flexible, remote-first collaboration</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">→</span>
              <p className="text-lg text-foreground">A chance to grow into long-term roles as Tyche scales</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-6 leading-relaxed"
          >
            This can start as:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-3"
          >
            <div className="flex gap-3">
              <span className="text-primary">•</span>
              <p className="text-lg text-foreground">Project-based work</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary">•</span>
              <p className="text-lg text-foreground">Part-time collaboration</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary">•</span>
              <p className="text-lg text-foreground">Internships or residencies</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mt-8 italic"
          >
            And evolve from there.
          </motion.p>
        </motion.div>
      </section>

      {/* What We Don't Care About */}
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
            What We Don't Care About
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <div>
              <h4 className="font-display text-xl font-bold text-foreground mb-4">We don't optimize for:</h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Fancy titles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Where you went to school</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Years of experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Buzzword-heavy resumes</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-foreground mb-4">We care about:</h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-foreground">How you think</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-foreground">How you build</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-foreground">How you learn</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-foreground">How you take ownership</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* How to Apply */}
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
            How to Apply (Important)
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            We don't want a traditional resume.
            <br />
            <br />
            Instead, send us:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4 mb-10"
          >
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">A short note on why Tyche resonates with you</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">One example of something you've built, fixed, or shipped</p>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-primary flex-shrink-0" />
              <p className="text-lg text-foreground">What kind of work you want to do with us</p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground italic"
          >
            That's it.
            <br />
            <br />
            If it's a fit, we'll talk.
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
            Ready to Build With Us?
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            If you're a builder who wants to work on meaningful GTM systems—
            and grow alongside a founder-led team—we'd love to hear from you.
          </motion.p>

          <motion.div
            variants={itemVariants}
          >
            <a href="mailto:kaustubh@tycheautomation.online" className="inline-block">
              <Button variant="hero" size="xl">
                Apply to Work With Us
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
