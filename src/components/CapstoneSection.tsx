import { Award, Code, Cpu, HardDrive } from "lucide-react";

const CapstoneSection = () => {
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
            🧩 Capstone Project
          </span>
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Main project card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/30 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Smart Campus Management System
            </h3>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              An innovative integrated platform designed to streamline campus operations, 
              enhance student engagement, and optimize resource management through cutting-edge technology.
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
                  <span>Real-time attendance tracking with facial recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Interactive class scheduling and room management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Student portal with grade tracking and announcements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Faculty dashboard for course management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Analytics and reporting system for administrators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Mobile app integration for on-the-go access</span>
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
                {["React", "Node.js", "Express", "MongoDB", "Python", "TensorFlow", "Flutter", "Firebase", "Docker"].map(
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
                  <span>Raspberry Pi 4 for facial recognition processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>HD cameras for attendance capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>RFID readers for library and facility access</span>
                </li>
              </ul>
            </div>

            {/* Screenshots placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-primary/20 to-red-900/20 rounded-lg border border-primary/30 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                >
                  <span className="text-xs text-primary/50">Screenshot {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapstoneSection;
