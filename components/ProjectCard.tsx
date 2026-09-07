import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, PenTool } from "lucide-react";
import { Project } from "../types";
import { Tape, RubberStamp } from "./Doodles";

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6, rotate: 0.5 }}
      transition={{ duration: 0.3 }}
      className={`relative group cursor-pointer w-full ${project.gridClass || "col-span-1 row-span-1"}`}
    >
      {/* CARD CONTAINER: Looks like a taped polaroid / index sheet */}
      <div className="bg-[#fffdf7] sketch-border p-5 sketch-shadow h-full flex flex-col justify-between relative overflow-hidden transition-all group-hover:sketch-shadow-lg">
        {/* Scotch Tape at top */}
        <Tape className="-top-3 left-8" rotation="-rotate-3" />
        {project.stamp && (
          <div className="absolute top-4 right-4 z-20">
            <RubberStamp text={project.stamp} color="red" rotation="rotate-3" className="text-[11px]" />
          </div>
        )}

        <div>
          {/* POLAROID PHOTO CONTAINER */}
          <div className="relative bg-white p-2.5 sketch-border-sm mb-4 shadow-inner">
            <div className="relative aspect-video w-full overflow-hidden rounded-xs bg-zinc-100 border border-zinc-300">
              <motion.img
                layoutId={`image-${project.id}`}
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-yellow-500/5 group-hover:opacity-0 transition-opacity" />
            </div>

            {/* Handwritten Polaroid Caption */}
            {project.diaryNote && (
              <div className="pt-2 text-center flex items-center justify-center gap-1.5">
                <PenTool size={12} className="text-zinc-500 shrink-0" />
                <span className="font-doodle text-sm font-bold text-zinc-700">
                  "{project.diaryNote}"
                </span>
              </div>
            )}
          </div>

          {/* PROJECT TITLE & TAGLINE */}
          <div className="space-y-1 mb-3">
            <div className="flex items-baseline justify-between gap-2">
              <motion.h3
                layoutId={`title-${project.id}`}
                className="font-marker text-2xl text-zinc-900 leading-tight group-hover:text-red-600 transition-colors"
              >
                {project.title}
              </motion.h3>
              <span className="font-mono text-xs font-bold text-zinc-500 uppercase">
                [{project.category}]
              </span>
            </div>

            <p className="font-hand font-bold text-sm text-red-600 leading-snug">
              {project.tagline}
            </p>
          </div>

          {/* CANDID DESCRIPTION */}
          <p className="font-journal text-base text-zinc-700 leading-snug line-clamp-3 mb-4">
            {project.description}
          </p>
        </div>

        {/* BOTTOM METRICS & TECH BADGES */}
        <div className="pt-3 border-t border-dashed border-zinc-300 space-y-3">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-hand font-bold bg-[#fef9c3] border border-zinc-900 rounded-xs text-zinc-900"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-1">
            <span className="font-doodle text-xs font-bold text-zinc-600">
              Role: {project.role}
            </span>
            <span className="font-hand font-bold text-xs text-zinc-900 group-hover:text-red-600 flex items-center gap-1">
              Open Case File →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;