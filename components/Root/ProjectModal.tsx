import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Github, Terminal, CheckCircle, PenTool } from "lucide-react";
import { Project } from "../../types";
import { Tape, RubberStamp } from "../Doodles";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-zinc-900/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          layoutId={`card-${project.id}`}
          className="w-full max-w-3xl bg-[#fbf8ef] sketch-border sketch-shadow-lg rounded-sm overflow-hidden relative max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Tape Strips */}
          <Tape className="-top-3 left-10" rotation="-rotate-3" />
          <Tape className="-top-3 right-16" rotation="rotate-2" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 bg-white border-2 border-zinc-900 rounded-sm sketch-shadow-sm text-zinc-900 hover:bg-red-50 hover:text-red-600 transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>

          {/* Header Banner with Screenshot */}
          <div className="relative border-b-2 border-zinc-900 bg-zinc-100">
            <div className="h-64 sm:h-80 w-full overflow-hidden">
              <motion.img
                layoutId={`image-${project.id}`}
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="font-mono text-xs font-bold bg-white text-zinc-900 px-2.5 py-0.5 rounded uppercase tracking-wider">
                  CASE FILE: {project.id}
                </span>
                <motion.h2
                  layoutId={`title-${project.id}`}
                  className="font-marker text-3xl sm:text-4xl text-white mt-1 drop-shadow"
                >
                  {project.title}
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Tagline & Stamp */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-900/20 pb-3">
              <p className="font-hand font-bold text-xl text-red-600">
                {project.tagline}
              </p>
              {project.stamp && (
                <RubberStamp text={project.stamp} color="red" rotation="-rotate-2" />
              )}
            </div>

            {/* Main Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column: Description & Retrospective */}
              <div className="md:col-span-2 space-y-4">
                <div className="font-journal text-lg text-zinc-800 leading-relaxed space-y-3">
                  <p>{project.description}</p>
                  {project.diaryNote && (
                    <div className="bg-[#fef9c3] p-3 rounded sketch-border-sm border-zinc-900 flex items-start gap-2">
                      <PenTool size={16} className="text-zinc-700 mt-0.5 shrink-0" />
                      <p className="font-doodle text-base font-bold text-zinc-900">
                        Developer Reflection: "{project.diaryNote}"
                      </p>
                    </div>
                  )}
                </div>

                {/* External Action Links */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-red-600 text-white font-hand font-bold text-base rounded-sm sketch-shadow-sm border-2 border-zinc-900 flex items-center gap-2 hover:bg-red-700 transition-colors"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white text-zinc-900 font-hand font-bold text-base rounded-sm sketch-shadow-sm border-2 border-zinc-900 flex items-center gap-2 hover:bg-zinc-50 transition-colors"
                    >
                      <Github size={16} />
                      <span>View GitHub Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Meta & Tech Specs */}
              <div className="space-y-4 bg-white/70 p-4 sketch-border-sm">
                <div>
                  <h4 className="font-mono text-xs uppercase font-bold text-zinc-500 mb-1">
                    Assigned Role
                  </h4>
                  <p className="font-hand font-bold text-lg text-zinc-900">
                    {project.role}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase font-bold text-zinc-500 mb-2">
                    Tech Blueprint
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-hand font-bold bg-[#fef9c3] border border-zinc-900 rounded-xs text-zinc-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-200">
                  <span className="font-doodle text-xs text-zinc-500 font-bold block">
                    Classification: {project.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
