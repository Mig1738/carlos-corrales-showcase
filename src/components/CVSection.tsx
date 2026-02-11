import { GraduationCap } from "lucide-react";

const CVSection = () => {
  return (
    <section id="cv" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Educational Background</h3>
                <div className="space-y-6 text-foreground/80">
                  {/* Santa Catalina College - Grade School to Senior High School */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src="/sta-catalina-logo.jpg"
                        alt="Santa Catalina College Logo"
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className="text-xl font-bold text-foreground mb-2">Santa Catalina College</h4>
                      <div>
                        <h4 className="font-semibold text-foreground">Grade School</h4>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">High School</h4>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Senior High School Graduate of Science, Technology, Engineering, and Mathematics</h4>
                      </div>
                    </div>
                  </div>
                  
                  {/* College */}
                  <div className="flex items-start gap-4 pt-4 border-t border-border/50">
                    <div className="flex-shrink-0">
                      <img
                        src="/mapua-logo.jpg"
                        alt="Mapua Malayan Colleges Laguna Logo"
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className="text-xl font-bold text-foreground mb-2">Mapua Malayan Colleges Laguna</h4>
                      <div>
                        <h4 className="font-semibold text-foreground">Bachelor of Science in Information Technology</h4>
                        <p className="text-sm">Expected Graduation: 2026</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Academic Achievements</h4>
                        <ul className="space-y-2 text-foreground/80 list-disc list-inside">
                          <li>Dean's Lister - 1st Year, 2nd Term</li>
                          <li>Dean's Lister - 1st Year, 3rd Term</li>
                          <li>Dean's Lister - 3rd Year, 2nd Term</li>
                        </ul>
                      </div>
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

export default CVSection;
