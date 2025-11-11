import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [showLoading, setShowLoading] = useState(true);
  const [showProfileSelection, setShowProfileSelection] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Show loading animation for 3 seconds, then transition to profile selection
    const timer = setTimeout(() => {
      setShowLoading(false);
      setShowProfileSelection(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleProfileClick = () => {
    setShowProfileSelection(false);
    setTimeout(onComplete, 500);
  };

  if (showLoading) {
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
  }

  if (showProfileSelection) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Who's watching?
          </h2>
        </div>

        <div className="flex flex-col items-center gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <button
            onClick={handleProfileClick}
            className="group flex flex-col items-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 focus:ring-offset-black rounded-lg"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-transparent group-hover:border-primary transition-all duration-300 shadow-2xl group-hover:shadow-primary/50 mb-4">
              {imageError ? (
                <div className="w-full h-full bg-gradient-to-br from-primary via-red-600 to-primary flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
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
            <p className="text-white text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
              Carlos
            </p>
          </button>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-gray-400 text-sm md:text-base text-center">
            Click on your profile to continue
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default IntroAnimation;
