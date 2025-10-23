import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative">
        {/* Particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 bg-primary rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Name reveal */}
        <h1 className="text-5xl md:text-7xl font-bold text-center animate-netflix-intro">
          <span className="bg-gradient-to-r from-primary via-red-600 to-primary bg-clip-text text-transparent">
            Carlos Miguel A. Corrales
          </span>
        </h1>

        {/* Glow effect */}
        <div className="absolute inset-0 blur-3xl bg-primary/20 animate-glow-pulse" />
      </div>
    </div>
  );
};

export default IntroAnimation;
