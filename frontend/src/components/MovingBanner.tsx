import { motion } from "framer-motion";

const bannerMessages = [
  "Build systems, not spreadsheets",
  "Your GTM should run while you sleep",
  "10x your pipeline without 10x the effort",
  "AI-powered outreach that actually converts",
  "Stop chasing leads. Start closing deals.",
  "From cold outbound to warm conversations",
  "Scale like a Fortune 500, move like a startup",
  "Built by founders, for founders",
];

export const MovingBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-purple-500 to-accent py-2.5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="banner-scroll flex gap-12"
          animate={{ x: ["-0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...bannerMessages, ...bannerMessages].map((message, index) => (
            <span
              key={index}
              className="text-white text-sm font-medium flex items-center gap-2"
            >
              {message}
              <span className="text-white/50">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
