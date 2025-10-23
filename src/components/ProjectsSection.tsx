import { Code, Folder } from "lucide-react";

const ProjectsSection = () => {
  const projectsByYear = [
    {
      year: "1st Year",
      projects: [
        {
          title: "Simple Calculator App",
          features: "Basic arithmetic operations, user-friendly interface, error handling",
          software: "C#, Windows Forms",
          machineProb: "Console-based version",
        },
        {
          title: "Student Information System",
          features: "CRUD operations, data validation, file storage",
          software: "Java, Swing",
          machineProb: "Database integration practice",
        },
      ],
    },
    {
      year: "2nd Year",
      projects: [
        {
          title: "Library Management System",
          features: "Book inventory, borrowing system, user authentication, reporting",
          software: "C#, SQL Server, WPF",
          machineProb: "Advanced SQL queries",
        },
        {
          title: "E-Commerce Website",
          features: "Product catalog, shopping cart, checkout system, admin panel",
          software: "HTML, CSS, JavaScript, PHP, MySQL",
          machineProb: "REST API development",
        },
      ],
    },
    {
      year: "3rd Year",
      projects: [
        {
          title: "Inventory Management System",
          features: "Real-time tracking, automated alerts, analytics dashboard",
          software: "Python, Flask, PostgreSQL",
          machineProb: "Data analytics module",
        },
        {
          title: "Mobile Task Manager",
          features: "Task creation, reminders, categories, cloud sync",
          software: "Flutter, Firebase",
          machineProb: "Push notifications implementation",
        },
      ],
    },
    {
      year: "4th Year",
      projects: [
        {
          title: "Hospital Management System",
          features: "Patient records, appointment scheduling, billing, prescription management",
          software: "Java Spring Boot, React, MongoDB",
          machineProb: "Microservices architecture",
        },
        {
          title: "AI-Powered Chatbot",
          features: "Natural language processing, context awareness, learning capabilities",
          software: "Python, TensorFlow, Flask",
          machineProb: "Model training optimization",
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {yearData.projects.map((project, projIndex) => (
                  <div
                    key={projIndex}
                    className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in"
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

                      <div className="pt-2">
                        <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs text-primary border border-primary/30">
                          Screenshots Available
                        </div>
                      </div>
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
