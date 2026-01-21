import { motion } from "framer-motion";

const logos = [
  { name: "Startup 1", letter: "S1" },
  { name: "Tech Co", letter: "TC" },
  { name: "AI Labs", letter: "AI" },
  { name: "Growth Inc", letter: "GI" },
  { name: "Scale Up", letter: "SU" },
  { name: "Venture X", letter: "VX" },
  { name: "Cloud Co", letter: "CC" },
  { name: "Data Pro", letter: "DP" },
];

export const LogosSection = () => {
  return (
    <section className="py-20 relative overflow-hidden border-y border-white/5">
      <div className="section-container mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest font-medium"
        >
          Trusted by innovative B2B companies
        </motion.p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling logos */}
        <div className="flex overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex animate-marquee"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8 px-8 py-4"
              >
                <div className="flex items-center gap-3 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-secondary/50 border border-white/5 flex items-center justify-center font-display font-bold text-sm">
                    {logo.letter}
                  </div>
                  <span className="font-medium text-lg whitespace-nowrap">{logo.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
