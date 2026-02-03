import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Layers,
  Terminal as TerminalIcon,
} from "lucide-react";

const skills = [
  { icon: Layers, title: "Full Stack", desc: "Next.js, Flask, FastAPI" },
  { icon: TerminalIcon, title: "DevOps", desc: "Docker, K8s, CI/CD" },
  { icon: Code, title: "Open Source", desc: "Maintainer & Contributor" },
  { icon: Layout, title: "Design", desc: "UI/UX, Interactions" },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Not your average <br />
            <span className="text-red-500">Computer Engineer.</span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg">
            <p>
              I don't just write code; I architect systems. While many focus on one
              layer of the stack, I thrive in the full vertical slice—from
              configuring bare-metal servers to tweaking animation bezier curves.
            </p>
            <p>
              I maintain open-source tools and build resilient platforms. My
              philosophy? Build systems that are robust by design, scale
              effortlessly under load, and feel magical to use.
            </p>
          </div>

          {/* SKILL CARDS */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: "rgba(239, 68, 68, 0.4)" }}
                className="bg-[#111] p-4 rounded-lg border border-gray-800 transition-colors"
              >
                <skill.icon className="text-red-400 mb-3" size={24} />
                <h4 className="text-white font-bold mb-1">
                  {skill.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — ROTATING RINGS */}
        <div className="relative w-full flex justify-center md:justify-end mt-12 md:mt-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-56 h-56 rounded-full cursor-default"
          >
            {/* Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 border-4 border-red-700/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute inset-0 border-2 border-red-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
              className="absolute inset-0 border-2 border-red-600/10 rounded-full"
            />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-900/20 to-red-700/10 blur-xl" />

            {/* Number */}
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <motion.p
                className="text-6xl font-bold text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
              >
                6+
              </motion.p>
              <p className="text-gray-500 mt-2 uppercase tracking-wider text-sm">
                Years Building
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
