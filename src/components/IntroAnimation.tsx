import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [showLoading, setShowLoading] = useState(true);
  const [showEnter, setShowEnter] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
      setShowEnter(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnterClick = () => {
    setShowEnter(false);
    setTimeout(onComplete, 500);
  };

  if (showLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="relative">
          {/* Subtle particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 bg-primary/40 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-center animate-intro-scale">
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Carlos Miguel A. Corrales
            </span>
          </h1>

          <div className="absolute inset-0 blur-3xl bg-primary/10 animate-glow-pulse" />
        </div>
      </div>
    );
  }

  if (showEnter) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Welcome
          </h2>
        </div>

        <div className="flex flex-col items-center gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <button
            onClick={handleEnterClick}
            className="group flex flex-col items-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded-lg"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-border group-hover:border-primary transition-all duration-300 shadow-xl group-hover:shadow-primary/20 mb-4">
              {imageError ? (
                <div className="w-full h-full bg-primary/20 flex items-center justify-center text-4xl md:text-5xl font-bold text-primary">
                  CM
                </div>
              ) : (
                <img
                  src="/profile-icon.jpg"
                  alt="Carlos Miguel A. Corrales"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
            <p className="text-foreground text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
              Carlos
            </p>
          </button>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground text-sm md:text-base text-center">
            Click to enter
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default IntroAnimation;
