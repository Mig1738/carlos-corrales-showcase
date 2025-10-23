import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CVSection from "@/components/CVSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesCarousel from "@/components/CertificatesCarousel";
import SeminarsCarousel from "@/components/SeminarsCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import CapstoneSection from "@/components/CapstoneSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      
      {!showIntro && (
        <div className="min-h-screen bg-background">
          <Navigation />
          <Hero />
          <CVSection />
          <SkillsSection />
          <CertificatesCarousel />
          <SeminarsCarousel />
          <ProjectsSection />
          <CapstoneSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
