import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

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
    }
  };

  const menuItems = [
    { id: "cv", label: "🧾 Curriculum Vitae" },
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:scale-105 transition-transform flex items-center"
            aria-label="Home"
          >
            {imageError ? (
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                CM
              </span>
            ) : (
              <img 
                src="/profile-icon.jpg" 
                alt="Carlos Miguel A. Corrales" 
                className="w-10 h-10 rounded-full border-2 border-primary object-cover shadow-lg"
                onError={() => setImageError(true)}
              />
            )}
          </button>

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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
