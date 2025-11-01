const SkillsSection = () => {
  const skills = [
    { name: "C#", level: 75, color: "from-purple-500 to-purple-700" },
    { name: "Java", level: 75, color: "from-orange-500 to-red-600" },
    { name: "Python", level: 75, color: "from-blue-500 to-blue-700" },
    { name: "HTML / CSS", level: 75, color: "from-orange-400 to-blue-500" },
    { name: "JavaScript", level: 75, color: "from-yellow-400 to-yellow-600" },
    { name: "Flutter", level: 75, color: "from-blue-400 to-cyan-500" },
    { name: "SQL", level: 75, color: "from-primary to-red-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            💻 Programming Skills
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-sm text-primary font-semibold">{skill.level}%</span>
              </div>

              <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out animate-glow-pulse`}
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
