import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-primary/5 via-white to-white">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl opacity-40" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="badge mb-6"
            >
              🚀 AI-Powered GTM for B2B Founders
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground"
            >
              Automate Your
              <br />
              <span className="text-gradient">Go-to-Market</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed font-body"
            >
              We build AI-powered systems that handle your outbound, content, and automation—so you can focus on closing deals, not chasing leads.
            </motion.p>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {["No SDR Army Needed", "Results in 2 Weeks", "Built for Founders"].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://cal.id/kaustubh-ai/quicksync" target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" size="xl">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Button variant="outline" size="xl" asChild>
                <a href="#process" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  See How It Works
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="img-container rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaborating on GTM strategy"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">10x Pipeline</p>
                    <p className="text-sm text-muted-foreground">Average growth</p>
                  </div>
                </div>
              </motion.div>

              {/* Second Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-white text-xl">🤖</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">AI-Powered</p>
                    <p className="text-sm text-muted-foreground">24/7 automation</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
