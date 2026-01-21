import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-foreground to-slate-800 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for new projects
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to automate your GTM?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-white/70 text-lg mb-6 max-w-2xl mx-auto"
              >
                Book a free strategy call. We'll audit your current GTM, identify quick wins, and show you exactly how we can help.
              </motion.p>

              {/* Trust indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 }}
                className="flex items-center justify-center gap-2 mb-8"
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/50 text-amber-400/50'}`} />
                  ))}
                </div>
                <span className="text-white/80 text-sm font-medium">4.9/5 from 50+ Founders</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a href="https://cal.id/kaustubh-ai/quicksync" target="_blank" rel="noopener noreferrer">
                  <Button size="xl" className="bg-white text-foreground hover:bg-white/90 rounded-full font-bold shadow-xl">
                    <Calendar className="w-5 h-5" />
                    Book Strategy Call
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="mailto:kaustubh@tycheautomation.online">
                  <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full">
                    <MessageCircle className="w-5 h-5" />
                    Send a Message
                  </Button>
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="mt-8 text-sm text-white/50"
              >
                Free 30-min consultation • Results & usage-based pricing • Response within 24 hours
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
