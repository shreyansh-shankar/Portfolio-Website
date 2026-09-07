import { motion } from "framer-motion";
import React, { useState } from "react";
import { FileText, Menu, X } from "lucide-react";

interface NavbarProps {
  scrollToSection: (id: string) => void;
  activeSection?: string;
}

export const navLinks = [
  { label: "Cover", id: "hero", chapter: "Cover" },
  { label: "Story", id: "about", chapter: "Ch. 1" },
  { label: "Dual Craft", id: "craft", chapter: "Ch. 2" },
  { label: "Chronicles", id: "experience", chapter: "Ch. 3" },
  { label: "Builds", id: "projects", chapter: "Ch. 4" },
  { label: "Arsenal", id: "skills", chapter: "Ch. 5" },
  { label: "Pass Note", id: "contact", chapter: "Ch. 6" },
];

const Navbar: React.FC<NavbarProps> = ({
  scrollToSection,
  activeSection = "hero",
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ede8d5]/95 backdrop-blur-md border-b-2 border-zinc-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* LOGO: Hand-lettered Book Title */}
        <motion.div
          onClick={() => {
            scrollToSection("hero");
            setMobileMenuOpen(false);
          }}
          className="cursor-pointer flex items-center gap-2.5 group select-none"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="w-10 h-10 bg-red-600 border-2 border-zinc-900 rounded-sm sketch-shadow-sm flex items-center justify-center text-white font-marker text-lg rotate-[-3deg] group-hover:rotate-0 transition-transform">
            SS
          </div>
          <div className="flex flex-col">
            <span className="font-hand font-bold text-xl leading-tight text-zinc-900 group-hover:text-red-600 transition-colors">
              Diary of Shreyansh
            </span>
            <span className="font-doodle text-xs text-zinc-600 -mt-1 font-semibold">
              Software Builder & Architect
            </span>
          </div>
        </motion.div>

        {/* DESKTOP NAV TABS: Highlighting active chapter */}
        <nav className="hidden lg:flex items-center gap-1.5 font-journal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <motion.button
                key={link.id}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ y: 0 }}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3 py-1 text-base font-bold transition-all select-none border-b-2 ${
                  isActive
                    ? "bg-[#fef08a] border-red-600 text-red-600 sketch-shadow-sm rounded-t-sm -translate-y-1"
                    : "border-zinc-800 text-zinc-800 hover:text-red-600 hover:border-red-600"
                }`}
              >
                <span className="text-[11px] font-mono text-zinc-500 block leading-none -mb-0.5">
                  {link.chapter}
                </span>
                <span>{link.label}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* RIGHT CONTROLS: Resume PDF */}
        <div className="hidden sm:flex items-center gap-2">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#fef08a] border-2 border-zinc-900 rounded sketch-shadow-sm text-zinc-900 font-hand font-bold text-xs tracking-wide -rotate-1 hover:bg-[#fde047] transition-all"
          >
            <FileText size={15} className="text-red-600" />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-zinc-900 rounded bg-[#fbf8ef] sketch-shadow-sm text-zinc-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-[#fbf8ef] border-b-2 border-zinc-900 px-6 py-4 space-y-3 lined-paper shadow-lg"
        >
          <div className="text-xs font-mono uppercase text-red-600 font-bold tracking-widest border-b border-zinc-300 pb-1 flex justify-between">
            <span>Table of Contents</span>
            <span className="text-zinc-500 font-mono text-[10px]">Journal Index</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-journal text-lg font-bold py-1 flex items-center gap-2 ${
                  activeSection === link.id
                    ? "text-red-600 underline font-extrabold"
                    : "text-zinc-900 hover:text-red-600"
                }`}
              >
                <span className="font-mono text-xs text-red-500">[{link.chapter}]</span>
                <span>{link.label}</span>
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-zinc-300 flex justify-between items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fef08a] border-2 border-zinc-900 rounded text-sm font-hand font-bold text-zinc-900"
            >
              <FileText size={16} className="text-red-600" />
              <span>Resume.pdf</span>
            </a>
            <span className="font-doodle text-sm text-zinc-500 font-bold">
              * Bookmark this journal!
            </span>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
