import { Award } from "lucide-react";

const CertificatesCarousel = () => {
  const certificates = [
    {
      title: "Advanced Java Programming",
      date: "March 2024",
      organization: "Oracle Academy",
      image: "cert-placeholder",
    },
    {
      title: "Web Development Fundamentals",
      date: "January 2024",
      organization: "Coursera",
      image: "cert-placeholder",
    },
    {
      title: "Python for Data Science",
      date: "November 2023",
      organization: "IBM",
      image: "cert-placeholder",
    },
    {
      title: "Mobile App Development",
      date: "September 2023",
      organization: "Google Developers",
      image: "cert-placeholder",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            📜 Certificates
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-red-900/20 flex items-center justify-center">
                <Award className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-1">{cert.organization}</p>
                <p className="text-xs text-primary">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesCarousel;
