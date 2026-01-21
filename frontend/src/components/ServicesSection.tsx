import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Bot, PenTool, Cog, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Product Marketing",
    description: "Nail your positioning, messaging, and ICP definition. We help you tell a story that makes buyers lean in.",
    features: ["ICP & Persona Development", "Competitive Positioning", "Sales Enablement", "Launch Strategy"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "AI Outbound",
    description: "Intelligent, personalized outreach that scales. No spam, no SDR army—just warm conversations.",
    features: ["AI-Powered Sequences", "Multi-Channel Delivery", "Intent Signal Detection", "Smart Lead Scoring"],
    color: "from-primary to-purple-500",
  },
  {
    icon: PenTool,
    title: "Founder Content",
    description: "Build your personal brand and thought leadership. We ghostwrite content that positions you as the expert.",
    features: ["LinkedIn Strategy", "Blog & Newsletter", "Video Scripts", "Content Distribution"],
    color: "from-orange-500 to-accent",
  },
  {
    icon: Cog,
    title: "GTM Automation",
    description: "Connect your entire stack and automate repetitive tasks. Build systems that run while you sleep.",
    features: ["Workflow Automation", "CRM Integration", "Data Enrichment", "Custom API Development"],
    color: "from-green-500 to-emerald-500",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4 inline-block">What We Do</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Four services. <span className="text-gradient">One system.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build a scalable GTM engine—without the agency bloat.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-8 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
