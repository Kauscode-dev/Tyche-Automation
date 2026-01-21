import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Bot, PenTool, Cog, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Product Marketing",
    subtitle: "Strategy & Execution",
    description: "We fix the core story so everything else converts. From ICP definition to sales enablement.",
    features: [
      "ICP & Persona Models",
      "Messaging & Positioning",
      "Competitor Analysis",
      "Sales Enablement",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Bot,
    title: "AI GTM Systems",
    subtitle: "Intelligent Outreach",
    description: "Intelligent outreach that scales without the spam. Multi-channel, personalized at scale.",
    features: [
      "AI-Powered Lead Scoring",
      "Multi-Channel Sequences",
      "Intent Signal Detection",
      "CRM Integration",
    ],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: PenTool,
    title: "Content Engine",
    subtitle: "Founder-Led Growth",
    description: "Founder-led content that builds trust and authority. LinkedIn, blogs, and thought leadership.",
    features: [
      "Thought Leadership",
      "LinkedIn Ghostwriting",
      "Content Distribution",
      "Performance Analytics",
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Cog,
    title: "AI Automation",
    subtitle: "Infrastructure",
    description: "Build systems that run while you sleep. Workflows, pipelines, and integrations.",
    features: [
      "Workflow Automation",
      "Data Enrichment",
      "Lead Routing Logic",
      "Custom API Development",
    ],
    gradient: "from-pink-500/20 to-rose-500/20",
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
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group glass-card-hover p-8 relative"
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-300">
          <service.icon className="w-6 h-6 text-primary" />
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl font-bold text-foreground mb-1">
          {service.title}
        </h3>
        <span className="text-primary font-medium text-sm">
          {service.subtitle}
        </span>

        {/* Description */}
        <p className="text-muted-foreground mt-4 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
        >
          Learn more
          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="badge-gradient mb-4 inline-block">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Four integrated services,{" "}
            <span className="text-gradient">one unified system</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Build your complete GTM engine with our unified approach to growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
