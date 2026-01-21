import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Target, Users, Shield } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Speed Over Perfection",
    description: "We move fast and iterate. Perfect is the enemy of pipeline.",
  },
  {
    icon: Target,
    title: "Results, Not Reports",
    description: "We measure success by meetings booked, not slides delivered.",
  },
  {
    icon: Users,
    title: "Partnership, Not Agency",
    description: "We're in the trenches with you, not billing hours from afar.",
  },
  {
    icon: Shield,
    title: "Your System, Your Control",
    description: "We build systems you own. No lock-in, no dependency.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge mb-6 inline-block">About Tyche</span>
              <h1 className="font-heading text-5xl sm:text-6xl font-bold text-foreground mb-6">
                We're not an agency.
                <br />
                <span className="text-gradient">We're builders.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Tyche was born from a simple frustration: watching brilliant founders struggle with duct-taped growth systems that create more noise than revenue.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We build AI-native GTM systems that actually work—not another layer of tools and dashboards that look good but don't move the needle.
              </p>
              <a href="https://cal.id/kaustubh-ai/quicksync" target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" size="xl">
                  Let's Talk
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="img-container rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              The Problem We Solve
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most B2B founders are stuck in GTM chaos:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "Outbound that feels like spam",
              "Content that no one reads",
              "Tools that don't talk to each other",
              "Activity without real pipeline",
            ].map((problem, index) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl border border-border text-center"
              >
                <span className="text-3xl mb-4 block">❌</span>
                <p className="text-foreground font-medium">{problem}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-foreground font-medium">
              We fix this by building integrated systems where messaging, outreach, content, and automation all work together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge mb-4 inline-block">Our Principles</span>
            <h2 className="font-heading text-4xl font-bold text-foreground">
              How We Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="feature-icon-solid mx-auto mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Ready to build your GTM engine?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's talk about how we can help you scale faster with less chaos.
            </p>
            <a href="https://cal.id/kaustubh-ai/quicksync" target="_blank" rel="noopener noreferrer">
              <Button variant="gradient" size="xl">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
