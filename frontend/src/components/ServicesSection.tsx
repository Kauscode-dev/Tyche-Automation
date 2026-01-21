import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Bot, PenTool, Cog, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Product Marketing",
    subtitle: "Led Growth",
    description: "We fix the core story so everything else converts.",
    features: [
      "ICP & Persona Models",
      "Websites & Landing Pages",
      "Messaging & Positioning Canvas",
      "Competitor Research & Win/Loss Analysis",
      "Sales Enablement (battlecards, decks)",
      "Product Launches",
    ],
  },
  {
    icon: Bot,
    title: "AI GTM",
    subtitle: "Systems",
    description: "Intelligent outreach that scales without the spam.",
    features: [
      "AI-Powered Lead Scoring",
      "Multi-Channel Sequences",
      "Intent Signal Detection",
      "Personalization at Scale",
      "CRM Integration & Routing",
      "Real-Time Optimization",
    ],
  },
  {
    icon: PenTool,
    title: "Content",
    subtitle: "Engine",
    description: "Founder-led content that builds trust and authority.",
    features: [
      "Thought Leadership Strategy",
      "LinkedIn Ghostwriting",
      "Blog & Newsletter Content",
      "Video Script Creation",
      "Content Distribution",
      "Performance Analytics",
    ],
  },
  {
    icon: Cog,
    title: "AI Automation",
    subtitle: "Infrastructure",
    description: "Build systems that run while you sleep.",
    features: [
      "Workflow Automation",
      "Data Enrichment Pipelines",
      "CRM Automation",
      "Lead Routing Logic",
      "Integration Setup",
      "Custom API Development",
    ],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-brutal relative overflow-hidden"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 -translate-y-8 translate-x-8 rotate-45 transition-transform group-hover:scale-150" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <service.icon className="w-6 h-6 text-primary" />
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl font-bold text-foreground mb-1">
          {service.title}
        </h3>
        <span className="text-primary font-medium text-sm uppercase tracking-wider">
          {service.subtitle}
        </span>

        {/* Description */}
        <p className="text-muted-foreground mt-4 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1 h-1 bg-primary rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <a
          href="#"
          className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all"
        >
          Learn more
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Four integrated services that work together
          </h2>
          <p className="text-muted-foreground text-lg">
            Build your complete GTM engine with our unified approach
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
