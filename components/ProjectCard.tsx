import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]); // Reduced tilt for bento stability
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  // Glow Effect
  const maskImage = useMotionTemplate`radial-gradient(350px at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, white, transparent)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize mouse coordinates to -0.5 to 0.5 for rotation
    const mouseXVal = (e.clientX - rect.left) / width - 0.5;
    const mouseYVal = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXVal);
    y.set(mouseYVal);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${project.id}`}
      onClick={() => onClick(project)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group cursor-pointer perspective-1000 w-full h-full min-h-[300px] ${project.gridClass || 'col-span-1 row-span-1'}`}
    >
      <div 
        className="absolute inset-0 bg-[#0e0e0e] rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 shadow-xl"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Glow Overlay */}
        <motion.div
          className="absolute inset-0 z-20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ maskImage }}
        />

        {/* Background Image - Absolute fill */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            layoutId={`image-${project.id}`}
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out opacity-40 group-hover:opacity-50 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <motion.div layoutId={`title-${project.id}`}>
               <div className="flex items-center justify-between mb-2">
                 <h3 className="text-2xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all opacity-0 group-hover:opacity-100" size={20} />
               </div>
            </motion.div>

            <motion.p 
              className="font-mono text-xs text-indigo-400 mb-2 uppercase tracking-widest"
            >
              {project.tagline}
            </motion.p>

            {/* Description - Hidden on small cards in grid unless hovered or large */}
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4 opacity-80 group-hover:opacity-100 transition-opacity">
              {project.techStack.slice(0, 3).map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-white/5 border border-white/5 rounded-md text-gray-400 group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;