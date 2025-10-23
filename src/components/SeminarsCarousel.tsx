import { Calendar } from "lucide-react";

const SeminarsCarousel = () => {
  const seminars = [
    {
      title: "Artificial Intelligence in Modern Development",
      date: "February 2024",
      description: "Deep dive into AI integration and machine learning applications",
    },
    {
      title: "Cloud Computing & DevOps Best Practices",
      date: "December 2023",
      description: "Understanding modern cloud infrastructure and deployment strategies",
    },
    {
      title: "Cybersecurity Fundamentals",
      date: "October 2023",
      description: "Essential security practices for software developers",
    },
    {
      title: "Agile Software Development",
      date: "August 2023",
      description: "Implementing Scrum and Kanban in real-world projects",
    },
  ];

  return (
    <section id="seminars" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            🎓 Seminars
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {seminars.map((seminar, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/20 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/30 transition-colors">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                {seminar.title}
              </h3>
              <p className="text-xs text-primary mb-3">{seminar.date}</p>
              <p className="text-sm text-foreground/70">{seminar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeminarsCarousel;
