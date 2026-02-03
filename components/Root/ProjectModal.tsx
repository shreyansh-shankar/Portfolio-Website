import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Github, TerminalIcon } from "lucide-react";
import { Project } from "../../types";

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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 
        bg-black/85 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          layoutId={`card-${project.id}`}
          className="w-full max-w-4xl bg-[#0e0e0e] rounded-3xl overflow-hidden relative 
          border border-red-800/40 shadow-[0_0_25px_rgba(255,0,0,0.2)] 
          max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2 bg-black/60 backdrop-blur 
            rounded-full text-white hover:bg-red-600 transition-colors 
            border border-red-700/20"
          >
            <X size={24} />
          </button>

          {/* Banner Image */}
          <div className="relative h-80 md:h-96">
            <motion.img
              layoutId={`image-${project.id}`}
              src={project.imageUrl}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t 
            from-[#0e0e0e] via-black/40 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <motion.h2
                layoutId={`title-${project.id}`}
                className="text-4xl md:text-5xl font-bold text-white mb-2 
                drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]"
              >
                {project.title}
              </motion.h2>
              <p className="text-xl text-red-400 font-mono">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-[2fr_1fr] gap-12">

              {/* Left */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TerminalIcon size={20} className="text-red-500" />
                  Project Overview
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {project.description}
                  <br /><br />
                  Built with a strong focus on performance, scalability, and UI polish.
                  This project highlights my ability to take an idea from concept to deployment.
                </p>

                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="px-6 py-3 bg-red-600 text-white font-bold 
                      rounded-lg hover:bg-red-700 transition-colors 
                      flex items-center gap-2 shadow-lg shadow-red-600/30"
                    >
                      Live Demo <ExternalLink size={18} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="px-6 py-3 border border-red-600/40 text-red-400 
                      font-bold rounded-lg hover:border-red-600 hover:text-red-300 
                      transition-colors flex items-center gap-2"
                    >
                      Source Code <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Right */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-mono text-red-500 uppercase mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#1a1a1a] 
                        border border-red-800/40 rounded 
                        text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-red-500 uppercase mb-3">
                    Role
                  </h4>
                  <p className="text-white font-medium">
                    {project.role}
                  </p>
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
