import React, { useState, useEffect } from 'react';
import DevOpsPipeline from './components/DevOpsPipeline';
import { Project } from './types';

import HeroSection from './components/Root/Hero';
import Navbar from "./components/Root/Navbar";
import TechMarquee from "./components/Root/TechMarquee";
import AboutSection from './components/Root/AboutSection';
import ProjectsSection from './components/Root/Project';
import ProjectModal from './components/Root/ProjectModal';
import SkillsSection from "./components/Root/SkillsSection";
import ContactSection from './components/Root/ContactSection';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-indigo-500 selection:text-white font-sans">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <TechMarquee />
      <AboutSection />
      <section id="devops" className="py-20 bg-[#0a0a0a] border-y border-red-900/20">
        <DevOpsPipeline />
      </section>
      <ProjectsSection onSelect={setSelectedProject} />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default App;
