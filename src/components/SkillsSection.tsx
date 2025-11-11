const SkillsSection = () => {
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
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-foreground text-sm flex items-center">
                      <span className="text-primary mr-2">•</span>
                      {item}
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
