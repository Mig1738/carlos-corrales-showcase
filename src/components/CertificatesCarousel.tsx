import { Award } from "lucide-react";

const CertificatesCarousel = () => {
  const certificates = [
    {
      title: "wearOS: Energing technology for internet and learning of everything",
      date: "2024",
      organization: "Certificate Issuer",
      image: "/Certificate-Of-Completion_Corrales_page-0001.jpg",
    },
    {
      title: "Cybersecurity Awareness",
      date: "2024",
      organization: "Certificate Issuer",
      image: "/CARLOS MIGUEL A. CORRALES Certificate of Attendance_page-0001.jpg",
    },
    {
      title: "CCNA: Introduction to Networks",
      date: "2022",
      organization: "Cisco Networking Academy",
      image: "/CCNA-_Introduction_to_Networks_certificate_corralescarlos1738-gmail-com_fb98a704-bf9a-4094-adaf-2be91a93dd1f_page-0001.jpg",
    },
    {
      title: "IT Fundamentals Certificate",
      date: "2023",
      organization: "Mapua Malayan Colleges Laguna",
      image: "/d478ff4e-bdcd-4687-8c7c-73b024debd1f.jpg",
    },
    {
      title: "Introduction to Edge Computing",
      date: "2024",
      organization: "USAID - Open RAN Access Network - Inter-Pacific Opportunity Program",
      image: "/456705278_866614108749718_5558408941109076936_n.png",
    },
    {
      title: "Introduction to Firewall",
      date: "2024",
      organization: "Great Learning Academy",
      image: "/456876576_1681876632560431_6009602801953083059_n.png",
    },
    {
      title: "Introduction to Cloud Computing",
      date: "2024",
      organization: "USAID - Inter-Pacific Opportunity Program",
      image: "/458198945_1505721780050430_8062290209056050446_n.png",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-red-900/20 flex items-center justify-center overflow-hidden">
                {cert.image !== "cert-placeholder" ? (
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => window.open(cert.image, '_blank')}
                  />
                ) : (
                  <Award className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
                )}
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
