import { User } from "lucide-react";

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
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am a graduating student of Bachelor of Science in Information Technology with a passion for software development. I focus on creating efficient and innovative solutions, excel in problem-solving and teamwork, and continuously learn to stay updated with emerging technologies. I'm eager to apply my skills to contribute to organizational success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

