import React from "react";
import { motion } from "framer-motion";
import { Server, Layers, Code, Palette, Wrench, BookOpen, PenTool } from "lucide-react";
import { RubberStamp, Tape, HandDrawnArrow } from "../Doodles";

const skillNotes = [
  {
    title: "DevOps & Cloud",
    subtitle: "Things that keep servers awake",
    color: "bg-[#fef9c3]",
    borderColor: "border-[#fde047]",
    icon: Server,
    rotation: "-rotate-1",
    pinColor: "bg-red-500",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "GitHub Actions",
      "Linux (Debian/Ubuntu)",
      "Nginx",
      "Prometheus",
      "Grafana",
      "Tailscale",
    ],
    doodleComment: "Rule: If you run it twice manually, containerize it.",
  },
  {
    title: "Full-Stack Web & APIs",
    subtitle: "Things humans actually see and click",
    color: "bg-[#e0f2fe]",
    borderColor: "border-[#bae6fd]",
    icon: Layers,
    rotation: "rotate-1",
    pinColor: "bg-blue-600",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "FastAPI",
      "Flask",
      "TailwindCSS",
      "Framer Motion",
      "Supabase",
      "PostgreSQL",
    ],
    doodleComment: "Next.js for shipping fast; FastAPI for blazing APIs.",
  },
  {
    title: "Languages & Core",
    subtitle: "The syntax behind the logic",
    color: "bg-[#fce7f3]",
    borderColor: "border-[#fbcfe8]",
    icon: Code,
    rotation: "rotate-2",
    pinColor: "bg-emerald-600",
    skills: [
      "Python",
      "JavaScript / ES6+",
      "Golang",
      "C++",
      "Java",
      "SQL",
      "Bash / Shell Scripting",
      "Computer Networks",
      "Database Design",
    ],
    doodleComment: "Python was my gateway drug to engineering.",
  },
  {
    title: "Creative Writing & Prose",
    subtitle: "Narrative craft & speculative fiction",
    color: "bg-[#dcfce7]",
    borderColor: "border-[#bbf7d0]",
    icon: BookOpen,
    rotation: "-rotate-2",
    pinColor: "bg-emerald-700",
    skills: [
      "Fiction Writing",
      "Speculative Fiction",
      "Narrative Design",
      "Worldbuilding",
      "Technical Essays",
      "Story Architecture",
      "Freelance Prose",
      "MDX & Content",
      "Character Design",
    ],
    doodleComment: "Worldbuilding is just system architecture for imaginary universes.",
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 md:px-14 relative">
      <div className="max-w-6xl mx-auto">
        {/* CHAPTER HEADER */}
        <div className="border-b-2 border-zinc-900 pb-3 mb-12 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
              CHAPTER 5
            </span>
            <h2 className="font-marker text-3xl sm:text-5xl text-zinc-900 mt-1">
              The Survival Kit
            </h2>
            <p className="font-doodle text-lg text-zinc-600 font-bold -mt-0.5">
              Pinned sticky notes of tools, languages, and craft I actually use daily.
            </p>
          </div>
          <RubberStamp text="BATTLE TESTED" color="black" rotation="-rotate-3" />
        </div>

        {/* 4 STICKY NOTES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillNotes.map((note, idx) => {
            const Icon = note.icon;
            return (
              <motion.div
                key={note.title}
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`${note.color} p-6 sm:p-8 sketch-border sketch-shadow relative ${note.rotation}`}
              >
                {/* Pushpin at top center */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${note.pinColor} border-2 border-zinc-900 shadow-xs z-10`}
                />

                {/* Header */}
                <div className="flex items-start justify-between border-b-2 border-zinc-900/20 pb-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/80 rounded border border-zinc-900 sketch-shadow-sm">
                      <Icon size={22} className="text-zinc-900" />
                    </div>
                    <div>
                      <h3 className="font-hand font-bold text-2xl text-zinc-900">
                        {note.title}
                      </h3>
                      <p className="font-journal text-sm text-zinc-600 font-bold">
                        {note.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {note.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-hand font-bold bg-white/90 border border-zinc-900 rounded-sm sketch-shadow-sm text-zinc-900 hover:bg-yellow-200 transition-colors select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Handwritten footer doodle note */}
                <div className="pt-3 border-t border-dashed border-zinc-900/20 flex items-center justify-between">
                  <p className="font-doodle text-sm sm:text-base font-bold text-zinc-800 flex items-center gap-1.5">
                    <PenTool size={13} className="text-zinc-600 shrink-0" />
                    <span>"{note.doodleComment}"</span>
                  </p>
                  <span className="font-mono text-[10px] text-zinc-400">
                    kit_{idx + 1}.env
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
