import { Mail, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { label: "Product Marketing", href: "/#services" },
    { label: "AI Outbound", href: "/#services" },
    { label: "Founder Content", href: "/#services" },
    { label: "GTM Automation", href: "/#services" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/#process" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Book a Call", href: "https://cal.id/kaustubh-ai/quicksync", external: true },
    { label: "Contact", href: "mailto:kaustubh@tycheautomation.online", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/tyche-automation/", external: true },
  ],
};

const socialLinks = [
  { icon: Mail, href: "mailto:kaustubh@tycheautomation.online", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/tyche-automation/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Tyche_Business", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="section-container">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-heading font-bold text-white text-xl">T</span>
              </div>
              <span className="font-heading font-bold text-2xl">Tyche</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              AI-powered GTM systems for B2B founders who want leverage, not just activity.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/60 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Tyche Automation. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
