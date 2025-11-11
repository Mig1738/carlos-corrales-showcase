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
            📄 Final Report
          </span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/20 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Staff</h3>
                
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

