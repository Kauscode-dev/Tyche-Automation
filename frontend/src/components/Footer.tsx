import { Mail, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { label: "Product Marketing", href: "#services" },
    { label: "AI GTM Systems", href: "#services" },
    { label: "Content Engine", href: "#services" },
    { label: "AI Automation", href: "#services" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Why Us", href: "/why-us" },
    { label: "Process", href: "#process" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Contact", href: "#contact" },
    { label: "Book a Call", href: "https://cal.id/kaustubh-ai/quicksync", external: true },
  ],
};

const socialLinks = [
  { icon: Mail, href: "mailto:kaustubh@tycheautomation.online", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/tyche-automation/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Tyche_Business", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/tyche_era/", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-black/50" />
      
      <div className="section-container relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                <span className="font-display font-bold text-white text-xl">T</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Tyche<span className="text-gradient">.</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              AI-native GTM systems for B2B founders. Build pipeline that scales without the spam.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-secondary/50 border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Tyche Automation. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
