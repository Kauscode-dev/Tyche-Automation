import { motion } from "framer-motion";

// Real AI tools used for GTM and automations - using reliable logo sources
const tools = [
  // Row 1 - Major platforms
  { name: "Clay", logo: "https://cdn.prod.website-files.com/62fcefcfc488ea0611a33841/6310d26f6a69f93a67e10675_Clay-Logo-Asset-p-500.png" },
  { name: "Apollo", logo: "https://www.apollo.io/favicon.ico" },
  { name: "Instantly", logo: "https://instantly.ai/favicon.ico" },
  { name: "Lemlist", logo: "https://www.lemlist.com/favicon.ico" },
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/120px-OpenAI_Logo.svg.png" },
  { name: "HubSpot", logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png" },
  { name: "Salesforce", logo: "https://www.salesforce.com/favicon.ico" },
  { name: "Slack", logo: "https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png" },
  { name: "Notion", logo: "https://www.notion.so/images/favicon.ico" },
  { name: "Zapier", logo: "https://cdn.zapier.com/zapier/images/favicon.ico" },
  // Row 2 - More tools
  { name: "Make", logo: "https://images.ctfassets.net/qqlj6g4ee76j/4kuQzwpYsHXYE3cEs9n9Ag/1ee0c4f78fb2fc95bb7461a64d1e5e2b/make-favicon-32x32.png" },
  { name: "Airtable", logo: "https://airtable.com/favicon.ico" },
  { name: "Anthropic", logo: "https://www.anthropic.com/favicon.ico" },
  { name: "Clearbit", logo: "https://clearbit.com/favicon.ico" },
  { name: "LinkedIn", logo: "https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" },
  { name: "Mailchimp", logo: "https://mailchimp.com/release/plums/cxp/images/favicon-v2.png" },
  { name: "Stripe", logo: "https://stripe.com/favicon.ico" },
  { name: "Twilio", logo: "https://www.twilio.com/favicon.ico" },
  { name: "Mixpanel", logo: "https://mixpanel.com/favicon.ico" },
  { name: "Segment", logo: "https://segment.com/favicon.ico" },
  // Row 3 - Additional tools
  { name: "Outreach", logo: "https://www.outreach.io/favicon.ico" },
  { name: "Gong", logo: "https://www.gong.io/favicon.ico" },
  { name: "ZoomInfo", logo: "https://www.zoominfo.com/favicon.ico" },
  { name: "Drift", logo: "https://www.drift.com/favicon.ico" },
  { name: "Intercom", logo: "https://static.intercomassets.com/assets/favicon-32x32.png" },
  { name: "Calendly", logo: "https://calendly.com/favicon.ico" },
  { name: "Loom", logo: "https://cdn.loom.com/assets/favicons-loom/favicon-32x32.png" },
  { name: "Figma", logo: "https://static.figma.com/app/icon/1/favicon.png" },
  { name: "Webflow", logo: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d5595354de4fbdd8c554dba_webflow-favicon-32.png" },
  { name: "Vercel", logo: "https://vercel.com/favicon.ico" },
  // Row 4 - More integrations
  { name: "GitHub", logo: "https://github.githubassets.com/favicons/favicon.svg" },
  { name: "Google", logo: "https://www.google.com/favicon.ico" },
  { name: "AWS", logo: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico" },
  { name: "Supabase", logo: "https://supabase.com/favicon.ico" },
  { name: "MongoDB", logo: "https://www.mongodb.com/favicon.ico" },
  { name: "Typeform", logo: "https://www.typeform.com/favicon.ico" },
  { name: "Hotjar", logo: "https://www.hotjar.com/favicon.ico" },
  { name: "Amplitude", logo: "https://amplitude.com/favicon.ico" },
];

// Tool card component with fallback
const ToolCard = ({ tool }: { tool: typeof tools[0] }) => {
  return (
    <div className="flex items-center justify-center mx-4 px-5 py-3 bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all min-w-[150px] group">
      <div className="w-7 h-7 mr-3 flex items-center justify-center">
        <img
          src={tool.logo}
          alt={tool.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            // Hide broken image and show text fallback
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div 
          className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center text-xs font-bold text-primary hidden"
        >
          {tool.name.substring(0, 2)}
        </div>
      </div>
      <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{tool.name}</span>
    </div>
  );
};

export const ToolsSection = () => {
  return (
    <section id="tools" className="py-12 bg-white/50 backdrop-blur-sm border-y border-border">
      <div className="section-container mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-card inline-block px-6 py-2 mb-3">
            <span className="text-muted-foreground text-sm uppercase tracking-widest font-medium">
              Powered by <span className="text-gradient font-bold">75+</span> AI & Automation Tools
            </span>
          </div>
          <h3 className="text-foreground font-heading text-xl font-semibold">
            We integrate the best tools to build your <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent font-bold">GTM stack</span>
          </h3>
        </motion.div>
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
            <ToolCard key={`${tool.name}-${index}`} tool={tool} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
