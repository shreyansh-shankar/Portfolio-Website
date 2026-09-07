import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, GitPullRequest, Laptop } from "lucide-react";
import { RubberStamp, Tape, HandDrawnArrow } from "../Doodles";

const experiences = [
  {
    company: "DocVya",
    role: "Full Stack Development Intern",
    period: "Nov 2025 – Jan 2026",
    description:
      "Developed and delivered 7+ full-stack features by collaborating closely with stakeholders to convert raw requirements into scalable architectures. Spearheaded frontend interactions, Supabase backend data modeling, and FastAPI endpoints that directly enhanced active product workflows.",
    candidTake:
      "Learned that 1 hour of talking to users saves 20 hours of building the wrong feature. Shipped 7+ major features without breaking anything critical.",
    tech: ["Next.js", "Supabase", "FastAPI", "TypeScript", "TailwindCSS"],
    stamp: "Shipped 7+ Features",
    stampColor: "red" as const,
    paperColor: "bg-[#fffdf7]",
  },
  {
    company: "NodeBox",
    role: "Founder & Project Maintainer",
    period: "May 2025 – Dec 2025",
    description:
      "Conceived, architected, and built NodeBox—an open-source visual node-based automation environment for AI workflows. Built custom local-first execution engines in Python and PyQt6, backed by a React web companion and Firebase sync.",
    candidTake:
      "People kept telling me to just pay for existing cloud automation tools. Instead, I spent 6 months building my own so nobody had to pay a subscription again.",
    tech: ["Python", "React", "PyQt6", "Docker", "Firebase"],
    stamp: "Created From Scratch",
    stampColor: "blue" as const,
    paperColor: "bg-[#fef9c3]",
  },
  {
    company: "Hacktoberfest",
    role: "Project Admin & Community Lead",
    period: "Sept 2025 – Oct 2025",
    description:
      "Led NodeBox as an official participating repository in the worldwide open-source program. Mentored contributors, reviewed code quality, resolved gnarly Git merge conflicts, and accepted 150+ PRs from over 100 global developers.",
    candidTake:
      "For 30 straight days, my notifications tab looked like a slot machine hitting the jackpot. 150+ merged PRs and 0 accidental repo deletions.",
    tech: ["Git / GitHub", "Python", "Open Source", "Code Review"],
    stamp: "150+ PRs Accepted",
    stampColor: "green" as const,
    paperColor: "bg-[#e0f2fe]",
  },
  {
    company: "Social Winter of Code",
    role: "Open Source Contributor",
    period: "Jan 2025 – Mar 2025",
    description:
      "Contributed to full-stack applications and Android client tools. Designed intuitive UI/UX flows, implemented Kotlin Android components, and refactored Next.js frontend pages for responsive performance.",
    candidTake:
      "Dove headfirst into unfamiliar codebases, deciphered someone else's 1,000-line functions, and left them cleaner and faster than I found them.",
    tech: ["Kotlin", "Android SDK", "Next.js", "UI/UX Design"],
    stamp: "Community Contributor",
    stampColor: "black" as const,
    paperColor: "bg-[#fce7f3]",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 md:px-14 relative">
      <div className="max-w-5xl mx-auto">
        {/* CHAPTER HEADER */}
        <div className="border-b-2 border-zinc-900 pb-3 mb-12 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
              CHAPTER 3
            </span>
            <h2 className="font-marker text-3xl sm:text-5xl text-zinc-900 mt-1">
              The Chronicles
            </h2>
            <p className="font-doodle text-lg text-zinc-600 font-bold -mt-0.5">
              Work history, production sprints, and open-source survival stories.
            </p>
          </div>
          <RubberStamp text="VERIFIED RECORD" color="blue" rotation="rotate-2" />
        </div>

        {/* DIARY ENTRIES TIMELINE */}
        <div className="space-y-12 relative">
          {/* Vertical notebook line */}
          <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-0.5 bg-red-400/40 hidden md:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative md:pl-16"
            >
              {/* Pushpin / Timeline circle */}
              <div className="absolute left-4 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-red-500 border-2 border-zinc-900 hidden md:flex items-center justify-center shadow-xs z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Entry Paper Card */}
              <div
                className={`${exp.paperColor} p-6 sm:p-8 sketch-border sketch-shadow relative`}
              >
                <Tape className="-top-3 right-10" rotation={idx % 2 === 0 ? "-rotate-2" : "rotate-3"} />

                {/* Header row: Company, Role, Dates, Stamp */}
                <div className="flex flex-wrap items-start justify-between gap-3 border-b-2 border-zinc-900 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold bg-zinc-900 text-white px-2 py-0.5 rounded-xs">
                        RECORD #{idx + 1}
                      </span>
                      <h3 className="font-hand font-bold text-2xl sm:text-3xl text-zinc-900">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="font-marker text-base text-red-600 tracking-wide mt-0.5">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="font-mono text-xs font-bold text-zinc-700 bg-white/70 border border-zinc-300 px-2.5 py-1 rounded flex items-center gap-1.5">
                      <Calendar size={13} className="text-zinc-600" />
                      <span>{exp.period}</span>
                    </span>
                    <RubberStamp
                      text={exp.stamp}
                      color={exp.stampColor}
                      rotation={idx % 2 === 0 ? "rotate-2" : "-rotate-3"}
                      className="text-xs mt-1"
                    />
                  </div>
                </div>

                {/* Hard Technical Summary */}
                <div className="font-journal text-lg text-zinc-800 leading-relaxed space-y-3">
                  <p>{exp.description}</p>

                  {/* Candid Wimpy Kid commentary */}
                  <div className="bg-white/80 p-3.5 rounded border-2 border-dashed border-zinc-400">
                    <p className="font-doodle text-base md:text-lg text-zinc-900 font-bold leading-snug">
                      <span className="underline">Candid Note:</span> "{exp.candidTake}"
                    </p>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="mt-5 pt-3 border-t border-zinc-900/20 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-hand font-bold bg-white border border-zinc-900 rounded-sm sketch-shadow-sm text-zinc-900"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-xs text-zinc-400">
                    entry_{exp.company.toLowerCase()}.md
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
