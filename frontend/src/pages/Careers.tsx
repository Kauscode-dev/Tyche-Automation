import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, XCircle, Sparkles, Users, Rocket, Heart } from "lucide-react";

const benefits = [
  { icon: Rocket, title: "Real B2B GTM exposure", desc: "Work on high-stakes problems with real founders" },
  { icon: Users, title: "Direct founder access", desc: "Learn by working alongside experienced operators" },
  { icon: Sparkles, title: "AI-native skills", desc: "Build expertise in cutting-edge AI tools and systems" },
  { icon: Heart, title: "Remote-first culture", desc: "Work from anywhere with flexible hours" },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="badge mb-6 inline-block">We're Hiring</span>
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Come build the future of
              <br />
              <span className="text-gradient">B2B GTM.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're building AI-native GTM systems that actually work. If you like thinking deeply, building fast, and owning outcomes—you'll fit right in.
            </p>
            <a href="mailto:kaustubh@tycheautomation.online">
              <Button variant="gradient" size="xl">
                Apply to Join
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Culture Fit */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              This isn't a normal job
            </h2>
            <p className="text-muted-foreground text-lg">Be honest with yourself about what you're looking for.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-red-50 rounded-2xl border border-red-100"
            >
              <h3 className="font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-500" />
                Not a fit if you want:
              </h3>
              <ul className="space-y-3">
                {["Rigid job descriptions", "Endless approval chains", "Shallow, repetitive work", "9-to-5 predictability"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <span>•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-green-50 rounded-2xl border border-green-100"
            >
              <h3 className="font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                Great fit if you want:
              </h3>
              <ul className="space-y-3">
                {["Real ownership and autonomy", "Direct impact on results", "Fast learning through building", "Work that actually matters"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-green-500">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge mb-4 inline-block">What You Get</span>
            <h2 className="font-heading text-4xl font-bold text-foreground">
              Why work with us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className="feature-icon mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="badge mb-4 inline-block">Application</span>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                How to Apply
              </h2>
              <p className="text-muted-foreground">Skip the resume. We want to see how you think.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { num: "01", text: "A short note on why Tyche interests you" },
                { num: "02", text: "One example of something you've built, fixed, or shipped" },
                { num: "03", text: "What kind of work you want to do with us" },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 items-start p-6 bg-secondary/50 rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-white text-sm">{step.num}</span>
                  </div>
                  <p className="text-foreground pt-2">{step.text}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a href="mailto:kaustubh@tycheautomation.online">
                <Button variant="gradient" size="xl">
                  Send Your Application
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <p className="text-muted-foreground text-sm mt-4">We respond to everyone within 48 hours.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
