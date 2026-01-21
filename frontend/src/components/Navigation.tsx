import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { MovingBanner } from "@/components/MovingBanner";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#process" },
  { label: "Tools", href: "/#tools" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

// Tyche Logo Component
const TycheLogo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="50%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#F97316" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="20" fill="url(#logoGradient)"/>
    <path d="M30 35H70V45H55V70H45V45H30V35Z" fill="white"/>
  </svg>
);

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
    <>
      {/* Moving Banner */}
      <MovingBanner />
      
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-border"
            : "bg-white/50 backdrop-blur-lg"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <TycheLogo />
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
    </>
  );
};
