const SkillsSection = () => {
  // Mapping of skill names to their image paths
  const skillImages: Record<string, string> = {
    "Html & CSS": "/skills/html-logo-canvas-element-javascript-png-favpng-9Zr8VThP4aQLbAyUYddQzU2rA.jpg",
    "PHP": "/skills/web-development-php-programming-language-computer-programming-scripting-language-png-favpng-v01pzTghVTZKPuW3rgxsYdSaU.jpg",
    "Flutter": "/skills/Google-Flutter-Icon-PNG.jpg",
    "C#": "/skills/download.jpg",
    "Visual Studio": "/skills/241-2410514_visual-studio-microsoft-visual-studio-logo.png",
    "Visual Studio Code": "/skills/png-clipart-visual-studio-code-logo-thumbnail-tech-companies-thumbnail.png",
    "Apache & Xampp": "/skills/images.jpg",
    "Arduino IDE": "/skills/pngtree-logo-arduino-png-image_4465472.png",
    "Github": "/skills/github-computer-icons-logo-repository-png-favpng-3D6iEY0b391hz9PYJZqnvKTLT.jpg",
    "mySQL Database": "/skills/images.png",
    "Firebase Database": "/skills/firebase-logo-11609361103azdpszm85x.png",
  };

  const skillCategories = [
    {
      title: "LANGUAGES",
      items: ["Html & CSS", "PHP", "Flutter", "C#"],
    },
    {
      title: "TOOLS",
      items: ["Visual Studio", "Visual Studio Code", "Apache & Xampp", "Arduino IDE", "Github"],
    },
    {
      title: "DATABASES",
      items: ["mySQL Database", "Firebase Database"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <button className="bg-primary text-white px-6 py-2 rounded font-semibold text-lg hover:bg-primary/90 transition-colors">
            SKILLS
          </button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-primary font-bold text-lg mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="text-foreground text-sm flex items-center gap-3">
                      {skillImages[item] && (
                        <img
                          src={skillImages[item]}
                          alt={item}
                          className="w-8 h-8 object-contain flex-shrink-0"
                        />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
