import { useState, useRef, useEffect } from "react";
import { Award, Code, Cpu, HardDrive, ChevronRight, ChevronLeft } from "lucide-react";

const CapstoneSection = () => {
  const screenshots = [
    "/3d79e3fe-b8b8-4ed1-8e6e-64f11f5575b1.jpg",
    "/9a674a5e-cc58-40c8-801d-ca48cba8efc4.jpg",
    "/b9fa7b4c-53ae-4cf3-a039-8f2133896776.jpg",
    "/c5358faf-6359-42e0-a7dd-b1a57e9b8410.jpg",
    "/d96152cd-6778-4c09-a926-1d86e3587e2f.jpg",
    "/e72ae642-cd9e-4059-a450-0e48627873bb.jpg",
    "/ea96717b-59e3-470b-9be8-fbb3ca019d56.jpg",
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const scrollTo = direction === 'right' 
        ? scrollContainerRef.current.scrollLeft + scrollAmount
        : scrollContainerRef.current.scrollLeft - scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  return (
    <section id="capstone" className="py-20 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
      {/* Featured background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Featured badge */}
        <div className="flex items-center justify-center mb-4">
          <div className="bg-primary px-6 py-2 rounded-full flex items-center gap-2 animate-glow-pulse">
            <Award className="h-5 w-5" />
            <span className="font-bold text-sm tracking-wider">FEATURED PROJECT</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent">
            🧩 4th Year Capstone Project
          </span>
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Main project card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/30 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              GIS Based Flood Management System Using Remote Sensing
            </h3>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              An advanced flood monitoring and management system that detects water level status in real-time,
              displays graphical water level trends, provides news feed updates, and enables residents to send SOS alerts with location tracking.
            </p>

            {/* Features */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Key Features</h4>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Real-time water level status detection and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Graphical visualization of water level trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>News feed for flood updates and announcements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>SOS alert system with GPS location tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>GIS mapping integration for flood zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Remote sensing data integration</span>
                </li>
              </ul>
            </div>

            {/* Software Used */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Software & Technologies</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Flutter", "Firebase", "GIS", "Remote Sensing", "Google Maps API"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary/10 rounded-lg text-sm font-medium border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Hardware Used */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <HardDrive className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Hardware Components</h4>
              </div>
              <ul className="text-foreground/70 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Water level sensors for real-time monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>IoT devices for data collection and transmission</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>GPS modules for location tracking</span>
                </li>
              </ul>
            </div>

            {/* Screenshots */}
            <div>
              <div className="relative group">
                {/* Left Arrow */}
                {canScrollLeft && (
                  <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white/90 text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                )}
                
                {/* Right Arrow */}
                {canScrollRight && (
                  <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white/90 text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                )}

                {/* Gradient Fade - Left */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-5 pointer-events-none" />
                
                {/* Gradient Fade - Right */}
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-5 pointer-events-none" />

                {/* Scrollable Container */}
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  {screenshots.map((image, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-[300px] md:w-[400px] group/img cursor-pointer transition-transform duration-300 hover:scale-110"
                      onClick={() => window.open(image, '_blank')}
                    >
                      <div className="relative rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/50">
                        <img
                          src={image}
                          alt={`GIS Flood Management screenshot ${i + 1}`}
                          className="w-full h-auto max-h-[500px] object-contain bg-black/5"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all flex items-center justify-center">
                          <span className="text-white text-xs opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/70 px-2 py-1 rounded">
                            Click to enlarge
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapstoneSection;
