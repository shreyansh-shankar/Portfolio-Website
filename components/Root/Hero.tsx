import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import NetworkCanvas from "../NetworkCanvas";
import InteractiveTerminal from "../InteractiveTerminal";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const phrases = [
  "Infrastructure for scale.",
  "Systems that never sleep.",
  "Tools that feel alive.",
  "Interfaces with attitude.",
  "Future-ready automation.",
];

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const [display, setDisplay] = useState(phrases[0]);
  const [index, setIndex] = useState(0);

  const scrambleTo = (target: string) => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplay((prev) =>
        prev
          .split("")
          .map((_, i) =>
            i < iterations
              ? target[i]
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );

      iterations += 1;
      if (iterations >= target.length) clearInterval(interval);
    }, 30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (index + 1) % phrases.length;
      scrambleTo(phrases[next]);
      setIndex(next);
    }, 2500);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 px-6 md:px-12"
    >
      <NetworkCanvas className="absolute inset-0 z-0" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className="font-mono text-red-400 mb-3 text-sm md:text-base tracking-widest uppercase">
            I am Shreyansh Shankar
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            I build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              {display}
            </span>
          </h1>

          <p className="text-gray-400 max-w-md text-lg leading-relaxed mb-8">
            DevOps Engineer & Full-Stack Developer crafting high-performance systems
            with real personality.
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#f3f3f3" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-white text-black font-bold rounded"
            >
              View Work
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "#ef4444",
                backgroundColor: "rgba(239,68,68,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-gray-700 text-white rounded"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-auto"
        >
          <InteractiveTerminal />
        </motion.div>
      </div>

      {/* CHEVRON */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
