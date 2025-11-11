import { Download, GraduationCap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVSection = () => {
  return (
    <section id="cv" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            🧾 Curriculum Vitae
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Educational Background</h3>
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h4 className="font-semibold text-foreground">Bachelor of Science in Information Technology</h4>
                    <p className="text-sm">Mapua Malayan Colleges Laguna | Expected Graduation: 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Academic Achievements</h3>
                <ul className="space-y-2 text-foreground/80 list-disc list-inside">
                  <li>Dean's Lister - 1st Year, 2nd Term</li>
                  <li>Dean's Lister - 1st Year, 3rd Term</li>
                  <li>Dean's Lister - 3rd Year, 2nd Term</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="text-center pt-4">
            <a
              href="/resume.pdf"
              download="Carlos_Miguel_A_Corrales_Resume.pdf"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Complete CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
