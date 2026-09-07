import React, { useState, useEffect } from "react";
import { Project } from "./types";

import HeroSection from "./components/Root/Hero";
import Navbar from "./components/Root/Navbar";
import TechMarquee from "./components/Root/TechMarquee";
import AboutSection from "./components/Root/AboutSection";
import DualCraftSection from "./components/Root/DualCraftSection";
import ExperienceSection from "./components/Root/Experience";
import ProjectsSection from "./components/Root/Project";
import ProjectModal from "./components/Root/ProjectModal";
import SkillsSection from "./components/Root/SkillsSection";
import ContactSection from "./components/Root/ContactSection";
import { NotebookSpine } from "./components/Doodles";
import { CornerDownRight, ChevronDown } from "lucide-react";

interface ChapterDividerProps {
  currentChapterNumber: number;
  nextChapterTitle: string;
  nextChapterId: string;
  onNavigate: (id: string) => void;
}

const ChapterDivider: React.FC<ChapterDividerProps> = ({
  currentChapterNumber,
  nextChapterTitle,
  nextChapterId,
  onNavigate,
}) => (
  <div className="max-w-5xl mx-auto px-4 sm:px-8 my-12 pt-6 border-t-2 border-dashed border-zinc-400 select-none">
    <div className="bg-[#fffdf7] p-4 sm:p-5 rounded-sm sketch-border-sm sketch-shadow-sm flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <CornerDownRight size={20} className="text-red-600 shrink-0" />
        <div>
          <span className="font-mono text-[11px] font-bold uppercase text-zinc-500 block">
            End of Chapter {currentChapterNumber}
          </span>
          <p className="font-hand font-bold text-base sm:text-lg text-zinc-900">
            Next Entry: Chapter {currentChapterNumber + 1} — {nextChapterTitle}
          </p>
        </div>
      </div>

      <button
        onClick={() => onNavigate(nextChapterId)}
        className="px-4 py-1.5 bg-[#fef08a] border-2 border-zinc-900 rounded-sm sketch-shadow-sm font-hand font-bold text-sm sm:text-base text-zinc-900 hover:bg-[#fde047] hover:scale-105 transition-all flex items-center gap-1.5"
      >
        <span>Read Next</span>
        <ChevronDown size={16} className="text-red-600" />
      </button>
    </div>
  </div>
);

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const sectionIds = ["hero", "about", "craft", "experience", "projects", "skills", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal scroll lock
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#ede8d5] text-zinc-900 selection:bg-yellow-300 selection:text-zinc-950 font-journal relative overflow-x-hidden">
      {/* Sticky Bookmarks Header */}
      <Navbar
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Container */}
      <div className="pt-20 pb-20 px-2 sm:px-4 md:px-6 max-w-6xl mx-auto">
        <main className="w-full bg-[#fbf8ef] lined-paper notebook-page border-x-0 sm:border-2 border-zinc-900 shadow-2xl relative overflow-hidden">
          {/* Red Margin Line */}
          <div className="margin-line hidden sm:block" />

          {/* Left Spiral Rings */}
          <NotebookSpine />

          {/* Journal Entries Flow */}
          <div className="relative z-10 sm:pl-10">
            {/* Cover / Entry #001 */}
            <HeroSection scrollToSection={scrollToSection} />
            <TechMarquee />

            {/* Transition to Chapter 1 */}
            <ChapterDivider
              currentChapterNumber={0}
              nextChapterTitle="Why I Build Things"
              nextChapterId="about"
              onNavigate={scrollToSection}
            />

            {/* Chapter 1 */}
            <AboutSection />

            {/* Transition to Chapter 2 */}
            <ChapterDivider
              currentChapterNumber={1}
              nextChapterTitle="Systems & Stories: The Dual Craft"
              nextChapterId="craft"
              onNavigate={scrollToSection}
            />

            {/* Chapter 2 */}
            <DualCraftSection />

            {/* Transition to Chapter 3 */}
            <ChapterDivider
              currentChapterNumber={2}
              nextChapterTitle="The Chronicles & History"
              nextChapterId="experience"
              onNavigate={scrollToSection}
            />

            {/* Chapter 3 */}
            <ExperienceSection />

            {/* Transition to Chapter 4 */}
            <ChapterDivider
              currentChapterNumber={3}
              nextChapterTitle="Case Files & Inventions"
              nextChapterId="projects"
              onNavigate={scrollToSection}
            />

            {/* Chapter 4 */}
            <ProjectsSection onSelect={setSelectedProject} />

            {/* Transition to Chapter 5 */}
            <ChapterDivider
              currentChapterNumber={4}
              nextChapterTitle="The Survival Kit & Stack"
              nextChapterId="skills"
              onNavigate={scrollToSection}
            />

            {/* Chapter 5 */}
            <SkillsSection />

            {/* Transition to Chapter 6 */}
            <ChapterDivider
              currentChapterNumber={5}
              nextChapterTitle="Pass Me a Note (Epilogue)"
              nextChapterId="contact"
              onNavigate={scrollToSection}
            />

            {/* Chapter 6 */}
            <ContactSection onBackToTop={() => scrollToSection("hero")} />

            {/* Generous bottom lined-paper margin padding exactly matching the screenshot aesthetic */}
            <div className="h-16 sm:h-24 w-full" />
          </div>
        </main>
      </div>

      {/* Project Case File Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
