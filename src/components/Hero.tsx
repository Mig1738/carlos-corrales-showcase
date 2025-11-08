import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-background" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Profile Photo */}
        <div className="mb-8 inline-block">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary via-red-600 to-primary p-1 animate-glow-pulse shadow-2xl">
            {imageError ? (
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl font-bold text-primary">
                CM
              </div>
            ) : (
              <img 
                src="/profile-icon.jpg" 
                alt="Carlos Miguel A. Corrales" 
                className="w-full h-full rounded-full object-cover"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-primary via-red-600 to-primary bg-clip-text text-transparent">
            Carlos Miguel A. Corrales
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-foreground/70 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Exploring Innovation Through Code and Technology
        </p>

        {/* CV Download Button */}
        <a
          href="/resume.pdf"
          download="Carlos_Miguel_A_Corrales_Resume.pdf"
          className="inline-block"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
