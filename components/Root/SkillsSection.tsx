import React from "react";
import { motion } from "framer-motion";
import { Server, Layers, Code, Palette } from "lucide-react";

// Technical Skills Data (belongs WITH the section)
const skillCategories = [
  {
    title: "DevOps & Cloud",
    icon: Server,
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "GitHub Actions",
      "Linux (Debian/Ubuntu)",
      "Nginx",
      "Prometheus",
      "Grafana"
    ]
  },
  {
    title: "Full Stack Web",
    icon: Layers,
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "FastAPI",
      "Flask",
      "TailwindCSS",
      "Framer Motion",
      "Supabase Services",
      "Firebase Web Services"
    ]
  },
  {
    title: "Languages & Core",
    icon: Code,
    skills: [
      "Python",
      "JavaScript/ES6+",
      "Golang",
      "C++",
      "Java",
      "SQL",
      "Bash/Shell Scripting",
      "Computer Networks",
      "Linux Systems",
      "Database Management"
    ]
  },
  {
    title: "Tools & Creative",
    icon: Palette,
    skills: [
      "Git & GitHub",
      "Figma",
      "MongoDB",
      "Redis",
      "Vercel",
      "Netlify",
      "VSCode",
      "Hostinger",
      "Canva",
      "Wireshark",
      "Burp Suite",
      "Kdenlive"
    ]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-gray-400">
            The tools I use to break and build things.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0a0a0a] border border-red-900/20 rounded-2xl p-8 
              hover:border-red-700/40 transition-all group relative overflow-hidden 
              shadow-lg hover:shadow-red-900/20"
            >
              {/* Soft red glow */}
              <div
                className="absolute -right-12 -top-12 w-32 h-32 
                bg-gradient-to-br from-transparent to-red-600/10 
                rounded-full blur-2xl group-hover:scale-150 
                transition-transform duration-700"
              />

              {/* Title */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-4 bg-[#111] rounded-xl border border-red-900/40 
                text-red-400 group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 + sIdx * 0.05 }}
                    className="px-4 py-2 bg-[#151515] border border-red-900/20 
                    rounded-lg text-gray-400 text-sm font-mono 
                    hover:bg-[#1d1d1d] hover:text-red-300 
                    hover:border-red-700/30 hover:shadow-lg 
                    hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
