import { Mail, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">T</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Tyche<span className="text-primary">.</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {["Services", "Process", "Why Us", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Tyche Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
