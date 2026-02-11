import { FileText, ExternalLink, User, Mail, CheckCircle, Shield, ClipboardCheck, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalReportSection = () => {
  const finalReportImages = [
    "/Screenshot 2025-11-11 211423.png",
    "/Screenshot 2025-11-11 211433.png",
    "/Screenshot 2025-11-11 211442.png",
    "/Screenshot 2025-11-11 211509.png",
    "/Screenshot 2025-11-11 211517.png",
  ];

  const adminImages = [
    "/Screenshot 2025-11-12 111212.png",
    "/Screenshot 2025-11-12 111222.png",
    "/Screenshot 2025-11-12 111228.png",
    "/Screenshot 2025-11-12 111234.png",
    "/Screenshot 2025-11-12 111241.png",
  ];

  return (
    <section id="final-report" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            📄 Final Output
          </span>
        </h2>
        
        <div className="flex justify-center mb-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-primary/50 hover:bg-primary/10 hover:border-primary"
          >
            <a href="/PDF/FINAL REPORT.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              View Full Details
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

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
                    My practicum consists of a total of 336 hours, starting from September 9, 2025, and expected to end on December 9, 2025. Throughout this duration, I have gained valuable hands-on experience in web development, system design, and collaboration, applying what I have learned in real-world scenarios within a government environment.
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {finalReportImages.map((image, i) => (
                      <div key={i} className="relative group/img">
                        <img
                          src={image}
                          alt={`Final Report screenshot ${i + 1}`}
                          className="w-full h-[400px] md:h-[450px] object-contain rounded cursor-pointer"
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

          {/* Admin Output */}
          <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/20 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Admin Output</h3>
                
                {/* Images Grid */}
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {adminImages.map((image, i) => (
                      <div key={i} className="relative group/img">
                        <img
                          src={image}
                          alt={`Admin Output screenshot ${i + 1}`}
                          className="w-full h-[400px] md:h-[450px] object-contain rounded cursor-pointer"
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

          {/* Discussion on the Tasks/Assignments Given */}
          <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/20 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Discussion on the Tasks/Assignments Given</h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    As part of the development team assigned to create a Document Tracking System for the City Government of Biñan, my main responsibility focused on developing the Tracking Module and other essential backend components using CodeIgniter 4 as the main framework and XAMPP as the local development environment. My role involved creating the document workflow process, managing user accounts, configuring document types, and ensuring that the tracking operations function seamlessly across departments.
                  </p>

                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-4 text-primary">Tracking Module</h4>
                    <p>
                      The Tracking Module serves as the core functionality of the system, designed to monitor the flow and status of official documents throughout the various departments. Each document is assigned a unique barcode upon creation, which allows for efficient scanning and tracking. The scanning process consists of three major steps:
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                      <li>
                        <strong>Receiving</strong> – When a department first scans the barcode, the system records that the document has been received.
                      </li>
                      <li>
                        <strong>Approval or Rejection</strong> – The second scan determines whether the document is approved or rejected. If rejected, the document process is automatically halted, ensuring accurate and accountable recordkeeping.
                      </li>
                      <li>
                        <strong>Forwarding</strong> – If the document is approved, the third scan forwards it to the next department as defined in the workflow sequence.
                      </li>
                    </ul>
                    <p className="mt-4">
                      All document transactions and movements are logged in the MySQL database, allowing for complete traceability and transparency. Additionally, the module updates the Dashboard to reflect real-time statistics, such as total pending, approved, rejected, and completed documents. This ensures that both the staff and administrators can easily monitor document progress and department performance.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-4 text-primary">User Management Module</h4>
                    <p>
                      The User Management Module allows the administrator to manage user accounts and control system access. Each account is assigned a specific role (Admin or Staff) and is associated with a designated department. Administrators can create, edit, and delete user accounts, as well as activate or deactivate them when necessary. The module incorporates role-based access control to ensure that users only have permissions relevant to their assigned roles, strengthening the system's overall security and integrity.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-4 text-primary">Custom Presets Module</h4>
                    <p>
                      The Custom Presets Module provides flexibility for administrators to define the workflow of each document type. This feature allows the administrator to select the sequence of departments that a document must go through during its lifecycle. Once configured, the workflow automatically reflects during document creation, ensuring consistency and efficiency. This feature minimizes human error and standardizes the document routing process across all departments.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-4 text-primary">Manage Document Type Module</h4>
                    <p>
                      The Manage Document Type Module enables the administrator to define and organize the different categories of documents used within the organization. Each document type is connected to a specific workflow preset, allowing the system to determine its proper routing and handling procedure. This ensures that each type of document follows the correct approval path and is processed by the appropriate departments.
                    </p>
                  </div>

                  <p className="mt-6">
                    Throughout the development process, I prioritized system efficiency, data accuracy, and security. By utilizing the Model-View-Controller (MVC) architecture of CodeIgniter 4, the project was developed with modular and maintainable code. XAMPP and phpMyAdmin were used for local hosting, testing, and database management. Overall, the modules I developed significantly contributed to establishing a reliable and transparent document monitoring system that improves workflow management within the City Government of Biñan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appendices */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Appendices</h3>
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Competency-Based CV */}
              <div 
                className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                onClick={() => window.open("/PDF/Carlos_Miguel_A_Corrales_Resume.pdf", '_blank')}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/20 p-4 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary">Competency-Based CV</h4>
                  <p className="text-sm text-foreground/70">Comprehensive curriculum vitae highlighting competencies and professional skills</p>
                </div>
              </div>

              {/* Endorsement Letter */}
              <div 
                className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                onClick={() => window.open("/PDF/Endorsement_Binan_Corrales_signed.pdf", '_blank')}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/20 p-4 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary">Endorsement Letter</h4>
                  <p className="text-sm text-foreground/70">Official endorsement letter for practicum placement</p>
                </div>
              </div>

              {/* Practicum Acceptance */}
              <div 
                className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                onClick={() => window.open("/PDF/PRACTICUM CONFIRMATION AND АССЕРТANCE FORM.pdf", '_blank')}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/20 p-4 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary">Practicum Acceptance</h4>
                  <p className="text-sm text-foreground/70">Official acceptance letter from City Government of Biñan</p>
                </div>
              </div>

              {/* Liability Waiver */}
              <div 
                className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                onClick={() => window.open("/PDF/student training agreement and liability waiver.pdf", '_blank')}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/20 p-4 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary">Liability Waiver</h4>
                  <p className="text-sm text-foreground/70">Signed liability waiver form and documentation</p>
                </div>
              </div>

              {/* Training Plan */}
              <div 
                className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                onClick={() => window.open("/PDF/training plan.pdf", '_blank')}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/20 p-4 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <ClipboardCheck className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary">Training Plan</h4>
                  <p className="text-sm text-foreground/70">Comprehensive training schedule and learning objectives</p>
                </div>
              </div>

              {/* Weekly Journal */}
              <div 
                className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                onClick={() => window.open("https://drive.google.com/drive/folders/1V8yT2rcXXM3mUtR8Bi7tWsh3Mu9zJt1D?usp=sharing", '_blank')}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/20 p-4 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary">Weekly Journal</h4>
                  <p className="text-sm text-foreground/70">Weekly documentation of activities and learning experiences</p>
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

