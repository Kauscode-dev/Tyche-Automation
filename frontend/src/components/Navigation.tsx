import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#process" },
  { label: "Tools", href: "/#tools" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
              <span className="font-heading font-bold text-white text-xl">T</span>
            </div>
            <span className="font-heading font-bold text-2xl text-foreground">
              Tyche
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("/#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://cal.id/kaustubh-ai/quicksync" target="_blank" rel="noopener noreferrer">
              <Button variant="gradient" size="default">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-border shadow-lg"
          >
            <div className="section-container py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      to={link.href}
                      className="block text-foreground font-medium py-3 px-4 rounded-xl hover:bg-secondary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="block text-foreground font-medium py-3 px-4 rounded-xl hover:bg-secondary transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
              <a href="https://cal.id/kaustubh-ai/quicksync" target="_blank" rel="noopener noreferrer" className="mt-4">
                <Button variant="gradient" className="w-full">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
