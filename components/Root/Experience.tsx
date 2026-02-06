"use client";

import { Code2, Terminal } from "lucide-react";

const experiences = [
  {
    company: "DocVya",
    role: "Full Stack Development Intern",
    period: "Nov 2025 - Jan 2026",
    description:
      "Developed 7+ full-stack features by collaborating with stakeholders to convert requirements into scalable solutions, enhancing product functionality.",
    tech: ["NextJS", "Supabase", "FastAPI"],
  },
  {
    company: "NodeBox",
    role: "Project Maintainer",
    period: "May 2025 - Dec 2025",
    description:
      "Founded and built NodeBox, an open-source visual programming environment for AI workflows.",
    tech: ["Firebase", "React", "PyQt6", "Python"],
  },
  {
    company: "Hacktoberfest",
    role: "Project Admin",
    period: "Sept 2025 - Oct 2025",
    description:
      "Led NodeBox as the project in the open source program, accepted 150+ PRs from 100+ contributors across the globe.",
    tech: ["Git/Github", "Python", "Firebase"],
  },
  {
    company: "Social Winter of Code",
    role: "Contributor",
    period: "Jan 2025 - Mar 2025",
    description:
      "Contributed in the UI/UX and Development of Open Source Full Stack Applications. ",
    tech: ["Kotlin", "Android Development", "NextJS"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-[#050505] py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A timeline of roles, systems, and responsibilities I’ve worked on.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16">
                {/* Dot */}
                <div className="absolute left-1 top-6 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>

                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   CARD                                     */
/* -------------------------------------------------------------------------- */

function ExperienceCard({
  company,
  role,
  period,
  description,
  tech,
}: {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-[#0b0b0b]
        p-8 md:p-10
        shadow-lg
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Code2 className="text-red-400" size={22} />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {company}
            </h3>
            <p className="text-sm font-mono text-red-400">
              {period}
            </p>
          </div>
        </div>

        <Terminal className="text-white/20" size={18} />
      </div>

      {/* Body */}
      <h4 className="text-lg md:text-xl font-medium text-white mb-3">
        {role}
      </h4>

      <p className="text-gray-400 leading-relaxed mb-6">
        {description}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1.5 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-lg"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
