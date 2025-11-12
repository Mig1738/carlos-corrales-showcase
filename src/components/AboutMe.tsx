import { User, ClipboardList, UserCircle, MapPin, Phone, Calendar, Mail } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 md:p-10 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/20 p-3 rounded-lg">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                About Me
              </h2>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              I am a graduating student of Bachelor of Science in Information Technology with a passion for software development. I focus on creating efficient and innovative solutions, excel in problem-solving and teamwork, and continuously learn to stay updated with emerging technologies. I'm eager to apply my skills to contribute to organizational success.
            </p>
            
            {/* Personal Info Section */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <ClipboardList className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">Personal Info</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <UserCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-foreground/60">Name: </span>
                      <span className="text-foreground font-medium">Carlos Miguel A. Corrales</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-foreground/60">Place of Birth: </span>
                      <span className="text-foreground font-medium">Biñan, Laguna</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-foreground/60">Phone: </span>
                      <span className="text-foreground font-medium">+63 966 359 0432</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-foreground/60">Date of Birth: </span>
                      <span className="text-foreground font-medium">October 17, 2002</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-foreground/60">Email: </span>
                      <span className="text-foreground font-medium">corralescarlos1738@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

