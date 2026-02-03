import React from "react";
import { Github } from "lucide-react";
import ProjectCard from "../ProjectCard";
import { Project } from "../../types";
import { projects } from "../Data/projects.data";

interface ProjectsSectionProps {
  onSelect: (project: Project) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelect }) => {
  return (
    <section id="projects" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Selected Works
            </h2>
            <p className="text-gray-400 max-w-md text-lg">
              A curated collection of experiments, tools, and production systems.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(300px,auto)]">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onSelect}
            />
          ))}
        </div>

        {/* Github CTA */}
        <div className="mt-24 text-center">
          <a
            href="https://github.com/shreyansh-shankar"
            className="group inline-flex items-center gap-3 text-xl font-bold text-white hover:text-red-400 transition-colors"
          >
            View Github Profile
            <span className="p-2 rounded-full bg-white/10 group-hover:bg-red-500 group-hover:text-white transition-all">
              <Github size={20} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
