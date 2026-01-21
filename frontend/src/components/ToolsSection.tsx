import { motion } from "framer-motion";

// Real AI tools used for GTM and automations
const tools = [
  { name: "Clay", logo: "https://cdn.worldvectorlogo.com/logos/clay-1.svg" },
  { name: "Apollo", logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f23e2293aaad4024d95ca52d55dfa9b6/apollo-io.png" },
  { name: "Instantly", logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_c5c8c04f64f26d5be84b04b2b75a0ff2/instantly.png" },
  { name: "Lemlist", logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_0c0f3d7e6e2c8d2f3a0d9a6f9e1e9f9f/lemlist.png" },
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png" },
  { name: "HubSpot", logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
  { name: "Salesforce", logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" },
  { name: "Slack", logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" },
  { name: "Notion", logo: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg" },
  { name: "Zapier", logo: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" },
  { name: "Make", logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102e8c90c3cd4c62b9454e7b8f8c9a/make.png" },
  { name: "Airtable", logo: "https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg" },
  { name: "Anthropic", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
  { name: "Clearbit", logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_25d2c0c3d9a8f1a2e4c9e3c3e3c3e3c3/clearbit.png" },
  { name: "LinkedIn", logo: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" },
  { name: "Mailchimp", logo: "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg" },
  { name: "Stripe", logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
  { name: "Twilio", logo: "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg" },
  { name: "Mixpanel", logo: "https://www.vectorlogo.zone/logos/mixpanel/mixpanel-icon.svg" },
  { name: "Segment", logo: "https://www.vectorlogo.zone/logos/segment/segment-icon.svg" },
];

export const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 bg-secondary/30 border-y border-border">
      <div className="section-container mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest font-medium mb-2"
        >
          Powered by 20+ AI & Automation Tools
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-foreground font-heading text-xl font-semibold"
        >
          We integrate the best tools for your GTM stack
        </motion.h3>
      </div>

      {/* Marquee container */}
      <div className="marquee-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="marquee"
        >
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 px-4 py-3 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow min-w-[140px]"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-8 h-8 object-contain mr-3"
                onError={(e) => {
                  // Fallback to text if image fails
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="font-medium text-foreground text-sm">{tool.name}</span>
              <span className="hidden w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-bold text-primary text-xs mr-3">
                {tool.name.substring(0, 2)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
