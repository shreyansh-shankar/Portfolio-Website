import React from "react";
import { motion } from "framer-motion";

const techStack = [
  "Python",
  "Next.js",
  "Docker",
  "Kubernetes",
  "AWS",
  "Terraform",
  "FastAPI",
  "TypeScript",
];

const TechMarquee: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0a0a] border-y border-gray-900 py-6 overflow-hidden">
      <div className="flex justify-center gap-12 text-gray-600 font-mono text-sm uppercase tracking-widest">
        {techStack.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{ scale: 1.2, color: "#f75555ff" }}
            className="cursor-default transition-colors"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
