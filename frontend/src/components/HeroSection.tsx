import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustBadgeInline } from "@/components/TrustBadge";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-8 overflow-hidden stars-bg">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-60 animate-pulse-soft" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl opacity-40 animate-pulse-soft" style={{ animationDelay: '2s' }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="glass-card px-4 py-2 text-sm font-medium text-foreground inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                AI-Powered GTM for B2B Founders
              </span>
            </motion.div>

            {/* Headline with glass effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
                Automate Your
                <br />
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-accent/10 rounded-lg blur-sm" />
                  <span className="relative bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">Go-to-Market</span>
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed font-body"
            >
              We build AI-powered systems that handle your outbound, content, and automation—so you can focus on closing deals, not chasing leads.
            </motion.p>

            {/* Trust Points with Vector Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                { icon: Zap, text: "No SDR Army Needed" },
                { icon: Target, text: "Results in 2-4 Weeks" },
                { icon: CheckCircle, text: "Usage-Based Pricing" },
              ].map((point) => (
                <div key={point.text} className="flex items-center gap-2 text-sm text-muted-foreground glass-card px-3 py-1.5">
                  <point.icon className="w-4 h-4 text-primary" />
                  <span>{point.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
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

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <TrustBadgeInline />
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
              {/* Main Image with glass frame */}
              <div className="glass-card p-3">
                <div className="img-container rounded-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Team collaborating on GTM strategy"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Card - Pipeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 glass-card p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18" />
                      <path d="M18 9l-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">10x Pipeline</p>
                    <p className="text-sm text-muted-foreground">Average growth</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - AI */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 glass-card p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A1.5 1.5 0 0 0 6 14.5 1.5 1.5 0 0 0 7.5 16 1.5 1.5 0 0 0 9 14.5 1.5 1.5 0 0 0 7.5 13m9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5Z" />
                    </svg>
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
