import { useState, useEffect } from "react";
import { Mail, Facebook, Phone, Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const menuItems = [
    { id: "about", label: "👤 About Me" },
    { id: "skills", label: "💻 Programming Skills" },
    { id: "certificates", label: "📜 Certificates" },
    { id: "projects", label: "🧠 Software Developed" },
    { id: "capstone", label: "🧩 4th Year Capstone Project" },
    { id: "final-report", label: "📄 Final Output" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:scale-105 transition-transform flex items-center"
              aria-label="Scroll to top"
            >
              {imageError ? (
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  CM
                </span>
              ) : (
                <img 
                  src="/profile-icon.jpg" 
                  alt="Carlos Miguel A. Corrales" 
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover shadow-lg cursor-pointer"
                  onError={() => setImageError(true)}
                />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-sm bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors duration-200 font-semibold"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Side Panel */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-[280px] bg-card border-border">
          <SheetHeader>
            <SheetTitle className="text-left text-primary">Menu</SheetTitle>
          </SheetHeader>
          
          <div className="mt-8 space-y-4">
            {/* Profile Section */}
            <div className="flex items-center gap-3 pb-4 border-b border-border/50">
              {imageError ? (
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  CM
                </span>
              ) : (
                <img 
                  src="/profile-icon.jpg" 
                  alt="Carlos Miguel A. Corrales" 
                  className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                  onError={() => setImageError(true)}
                />
              )}
              <div>
                <p className="font-semibold text-foreground">Carlos Miguel A. Corrales</p>
                <p className="text-sm text-foreground/60">Portfolio</p>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200 flex items-center gap-3"
                >
                  <span className="text-lg">{item.label.split(' ')[0]}</span>
                  <span className="text-sm">{item.label.substring(item.label.indexOf(' ') + 1)}</span>
                </button>
              ))}
            </div>

            {/* Contact Me Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsContactOpen(true);
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition-colors duration-200 font-semibold mt-4"
            >
              Contact Me
            </button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Contact Modal */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">Contact Me</DialogTitle>
            <DialogDescription className="text-foreground/70">
              Get in touch with me through any of these channels
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            {/* Gmail */}
            <a
              href="mailto:corralescarlos1738@gmail.com"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground/60 mb-1">Gmail</p>
                <p className="text-foreground font-semibold">corralescarlos1738@gmail.com</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/CmCorrales/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Facebook className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground/60 mb-1">Facebook</p>
                <p className="text-foreground font-semibold">@CmCorrales</p>
              </div>
            </a>

            {/* Contact Number */}
            <a
              href="tel:09663590432"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground/60 mb-1">Contact Number</p>
                <p className="text-foreground font-semibold">09663590432</p>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navigation;
