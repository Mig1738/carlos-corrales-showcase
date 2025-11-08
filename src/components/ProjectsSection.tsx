import { Code, Folder } from "lucide-react";

const ProjectsSection = () => {
  const projectsByYear = [
    {
      year: "1st Year",
      projects: [
        {
          title: "4 Pics 1 Word Game",
          features: "Interactive word guessing game, image-based puzzles, user-friendly interface, game logic implementation",
          software: "Python",
          machineProb: "Game development and logic programming",
          images: [
            "/4pics.jpg",
          ],
        },
      ],
    },
    {
      year: "2nd Year",
      projects: [
        {
          title: "Fruit Game Slot Machine",
          features: "Interactive slot machine game, theme customization, score tracking, animated gameplay",
          software: "Xamarin",
          machineProb: "Mobile game development",
          images: [
            "/Screenshot_20251101-115105_FruitGame.jpg",
            "/Screenshot_20251101-115108_FruitGame.jpg",
            "/Screenshot_20251101-115112_FruitGame.jpg",
          ],
        },
      ],
    },
    {
      year: "3rd Year",
      projects: [
        {
          title: "Water Level Status Monitoring System",
          features: "Real-time water level monitoring, normal and danger status alerts, IoT integration, mobile app interface",
          software: "Wemos, Arduino, Xamarin",
          machineProb: "IoT sensor integration and mobile monitoring",
          images: [
            "/Screenshot_20251101-115137_Waterlvl.jpg",
            "/Screenshot_20251101-115144_Waterlvl.jpg",
            "/Screenshot_20251101-115151_Waterlvl.jpg",
          ],
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            🧠 Software Developed
          </span>
        </h2>

        <div className="max-w-6xl mx-auto space-y-16">
          {projectsByYear.map((yearData, yearIndex) => (
            <div key={yearIndex} className="space-y-6">
              <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <Folder className="h-8 w-8" />
                {yearData.year}
              </h3>

              <div className={`grid gap-6 ${yearData.projects.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : 'grid-cols-1 lg:grid-cols-2'}`}>
                {yearData.projects.map((project, projIndex) => (
                  <div
                    key={projIndex}
                    className="bg-card rounded-2xl p-8 md:p-10 border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 group animate-fade-in"
                    style={{ animationDelay: `${projIndex * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold flex-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-primary/80 font-semibold mb-1">Features:</p>
                        <p className="text-foreground/70">{project.features}</p>
                      </div>

                      <div>
                        <p className="text-primary/80 font-semibold mb-1">Software Used:</p>
                        <p className="text-foreground/70">{project.software}</p>
                      </div>

                      {project.machineProb && (
                        <div>
                          <p className="text-primary/80 font-semibold mb-1">Machine Problem:</p>
                          <p className="text-foreground/70 italic">{project.machineProb}</p>
                        </div>
                      )}

                      {project.images && project.images.length > 0 && (
                        <div className="pt-3">
                          <p className="text-primary/80 font-semibold mb-2">Screenshots:</p>
                          <div className={`grid gap-3 ${project.images.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-3'}`}>
                            {project.images.map((image, imgIndex) => (
                              <div key={imgIndex} className={`relative group/img ${project.images.length === 1 ? 'flex justify-center' : ''}`}>
                                <img
                                  src={image}
                                  alt={`${project.title} screenshot ${imgIndex + 1}`}
                                  className={`${project.images.length === 1 ? 'max-w-full' : 'w-full'} h-48 object-contain rounded border border-border hover:border-primary/50 transition-all cursor-pointer bg-black/5 mx-auto`}
                                  onClick={() => window.open(image, '_blank')}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all rounded flex items-center justify-center pointer-events-none">
                                  <span className="text-white text-xs opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/70 px-2 py-1 rounded">
                                    Click to enlarge
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {!project.images && (
                        <div className="pt-2">
                          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs text-primary border border-primary/30">
                            Screenshots Available
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
