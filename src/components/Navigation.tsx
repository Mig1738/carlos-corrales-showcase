import { useState, useEffect, useRef } from "react";
import { Mail, Facebook, Phone, LogOut } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface NavigationProps {
  onLogout: () => void;
}

const Navigation = ({ onLogout }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowLogoutMenu(false);
      }
    };

    if (showLogoutMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLogoutMenu]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = [
    { id: "skills", label: "💻 Programming Skills" },
    { id: "certificates", label: "📜 Certificates" },
    { id: "projects", label: "🧠 Software Developed" },
    { id: "capstone", label: "🧩 4th Year Capstone Project" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => {
                if (!showLogoutMenu) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                setShowLogoutMenu(!showLogoutMenu);
              }}
              className="hover:scale-105 transition-transform flex items-center"
              aria-label="Profile"
            >
              {imageError ? (
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
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

            {/* Logout Dropdown Menu */}
            {showLogoutMenu && (
              <div className="absolute left-0 top-12 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
                <button
                  onClick={() => {
                    setShowLogoutMenu(false);
                    onLogout();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/10 transition-colors text-foreground"
                >
                  <LogOut className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Logout</span>
                </button>
              </div>
            )}
          </div>

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
        </div>
      </div>

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
