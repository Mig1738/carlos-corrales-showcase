import { FileText } from "lucide-react";

const FinalReportSection = () => {
  const finalReportImages = [
    "/Screenshot 2025-11-11 211423.png",
    "/Screenshot 2025-11-11 211433.png",
    "/Screenshot 2025-11-11 211442.png",
    "/Screenshot 2025-11-11 211509.png",
    "/Screenshot 2025-11-11 211517.png",
  ];

  return (
    <section id="final-report" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            📄 Final Output
          </span>
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Project Overview */}
          <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/20 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Project Overview</h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    I was part of a group of four members assigned to develop a Document Tracking System for the City Government of Biñan. The main goal of our project was to create a digital platform that would help different departments track and monitor the status and location of official documents more efficiently. Before the system, most document tracking processes were done manually, which often caused delays and confusion regarding the movement of files between departments. Our system was designed to solve this problem by providing a centralized and automated way to record and trace every document transaction.
                  </p>
                  <p>
                    We developed the website using CodeIgniter 4 as our main framework because of its lightweight structure, security features, and ease of integration with databases. We used MySQL as the database to store important information such as document details, department data, and tracking logs. The system provides a user-friendly interface that allows staff to send, receive, approve, or forward documents, making the entire workflow smoother and more organized. Through this project, we aimed to improve communication and transparency between departments and ensure that document movement can be easily monitored at any time.
                  </p>
                  <p>
                    My main responsibility in this project was to design and develop the tracking system module, which is one of the core features of the system. I created the part that allows departments to scan documents using a unique code to update their current location and status in real time. This function helps prevent misplaced or untracked documents and ensures that every update is instantly reflected in the database. Working on this feature allowed me to apply my technical knowledge in web development and database management while contributing to a system that supports efficiency within the local government.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Staff Output */}
          <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/20 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Staff Output</h3>
                
                {/* Images Grid */}
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {finalReportImages.map((image, i) => (
                      <div key={i} className="relative group/img">
                        <img
                          src={image}
                          alt={`Final Report screenshot ${i + 1}`}
                          className="w-full h-64 object-contain rounded border border-border hover:border-primary/50 transition-all cursor-pointer bg-black/5"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalReportSection;

