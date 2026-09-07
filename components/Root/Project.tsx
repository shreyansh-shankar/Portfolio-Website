import React from "react";
import { Github, Sparkles } from "lucide-react";
import ProjectCard from "../ProjectCard";
import { Project } from "../../types";
import { projects } from "../Data/projects.data";
import { RubberStamp, HandDrawnArrow } from "../Doodles";

interface ProjectsSectionProps {
  onSelect: (project: Project) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelect }) => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-8 md:px-14 relative">
      <div className="max-w-6xl mx-auto">
        {/* CHAPTER HEADER */}
        <div className="border-b-2 border-zinc-900 pb-3 mb-10 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
              CHAPTER 4
            </span>
            <h2 className="font-marker text-3xl sm:text-5xl text-zinc-900 mt-1">
              Case Files & Inventions
            </h2>
            <p className="font-doodle text-lg text-zinc-600 font-bold -mt-0.5">
              Real projects, open-source repositories, and late-night experiments.
            </p>
          </div>
          <RubberStamp text="ALL RUNNING" color="green" rotation="rotate-2" />
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onSelect}
            />
          ))}
        </div>

        {/* GITHUB CALLOUT BANNER */}
        <div className="mt-16 bg-[#fef9c3] p-6 sm:p-8 sketch-border sketch-shadow flex flex-wrap items-center justify-between gap-6 relative">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <Github size={24} className="text-zinc-900" />
              <h3 className="font-marker text-xl sm:text-2xl text-zinc-900">
                Want to dig through the raw Git commits?
              </h3>
            </div>
            <p className="font-journal text-lg text-zinc-800">
              Check out my GitHub repositories for commit histories, pull request discussions, and source code.
            </p>
          </div>

          <a
            href="https://github.com/shreyansh-shankar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-zinc-900 text-white font-hand font-bold text-lg rounded-sm sketch-shadow-sm flex items-center gap-2 hover:bg-zinc-800 transition-all border-2 border-zinc-900"
          >
            <Github size={20} />
            <span>github.com/shreyansh-shankar</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
