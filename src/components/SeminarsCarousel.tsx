import { Award } from "lucide-react";

const SeminarsCarousel = () => {
  const seminars = [
    {
      title: "Career Development Seminar",
      date: "2024",
      description: "Professional development and career guidance session",
      image: "/456705278_866614108749718_5558408941109076936_n.png",
    },
    {
      title: "Technology Innovation Workshop",
      date: "2024",
      description: "Latest trends in technology and innovation",
      image: "/456876576_1681876632560431_6009602801953083059_n.png",
    },
    {
      title: "Industry Networking Event",
      date: "2024",
      description: "Connecting students with industry professionals",
      image: "/458198945_1505721780050430_8062290209056050446_n.png",
    },
  ];

  return (
    <section id="seminars" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            📜 Seminars
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {seminars.map((seminar, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-red-900/20 flex items-center justify-center overflow-hidden">
                {seminar.image ? (
                  <img
                    src={seminar.image}
                    alt={`${seminar.title} seminar`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => window.open(seminar.image, '_blank')}
                  />
                ) : (
                  <Award className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {seminar.title}
                </h3>
                <p className="text-xs text-primary mb-1">{seminar.date}</p>
                <p className="text-sm text-foreground/60">{seminar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeminarsCarousel;
