import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import CVSection from "@/components/CVSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesCarousel from "@/components/CertificatesCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import CapstoneSection from "@/components/CapstoneSection";
import FinalReportSection from "@/components/FinalReportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutMe />
      <CVSection />
      <SkillsSection />
      <CertificatesCarousel />
      <ProjectsSection />
      <CapstoneSection />
      <FinalReportSection />
      <Footer />
    </div>
  );
};

export default Index;
