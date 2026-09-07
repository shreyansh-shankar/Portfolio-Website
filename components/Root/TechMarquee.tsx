import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Cpu,
  Server,
  Box,
  Layers,
  Globe,
  Database,
  GitBranch,
  Code2,
  Workflow,
  Shield,
  FileCode,
} from "lucide-react";

const techItems = [
  { name: "Python", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "Docker", icon: Box },
  { name: "Kubernetes", icon: Server },
  { name: "FastAPI", icon: Cpu },
  { name: "TypeScript", icon: FileCode },
  { name: "Tailscale", icon: Shield },
  { name: "Linux / Bash", icon: Terminal },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "CI/CD Workflows", icon: Workflow },
  { name: "PostgreSQL", icon: Database },
  { name: "System Architecture", icon: Layers },
];

const TechMarquee: React.FC = () => {
  return (
    <div className="w-full relative my-8 overflow-hidden select-none py-2">
      {/* Yellow tape / ruled margin strip banner */}
      <div className="w-full bg-[#fef08a] border-y-2 border-zinc-900 shadow-sm rotate-[-0.5deg] py-3">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex items-center space-x-10 whitespace-nowrap"
        >
          {[...techItems, ...techItems, ...techItems].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="inline-flex items-center space-x-2.5 font-hand font-bold text-zinc-900 text-lg md:text-xl"
              >
                <Icon size={20} className="text-zinc-950" />
                <span>{item.name}</span>
                <span className="text-red-500 font-marker text-sm ml-4">•</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
