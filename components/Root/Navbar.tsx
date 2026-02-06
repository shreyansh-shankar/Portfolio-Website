import { motion } from "framer-motion";
import React from "react";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const navLinks = [
  { label: "Vision", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Builds", id: "projects" },
  { label: "Stack", id: "skills" },
  { label: "Connect", id: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        {/* LOGO */}
        <motion.div
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer flex items-center gap-2 group"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.div className="flex items-end">
            <motion.span
              className="font-mansalva text-5xl text-red-600 group-hover:text-white transition-all"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              SS
            </motion.span>

            <motion.span
              className="font-mono text-2xl font-bold tracking-wider text-gray-300 group-hover:text-red-400 transition-all relative top-1"
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1, x: 3 }}
            >
              <span className="text-red-300">.</span>
              <span className="text-white group-hover:text-red-600">com</span>
            </motion.span>
          </motion.div>
        </motion.div>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              whileHover={{ scale: 1.25, rotate: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(link.id)}
              className="relative group tracking-wider"
            >
              <span className="group-hover:text-white transition-all duration-300 relative">
                <span className="absolute left-0 top-0 text-red-600 opacity-0 group-hover:opacity-40 translate-x-[2px] translate-y-[1px]">
                  {link.label}
                </span>
                {link.label}
              </span>

              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-red-500 to-red-700 rounded-full"
                whileHover={{ width: "120%" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />

              <motion.div className="absolute inset-0 rounded blur-md bg-red-500 opacity-0 group-hover:opacity-20 transition-all" />
              <span className="absolute inset-0 rounded-full scale-0 group-active:scale-100 bg-red-500/20 transition-transform" />
            </motion.button>
          ))}
        </div>

        {/* RESUME BUTTON — FULL EFFECT RESTORED */}
        <motion.a
          href="/resume.pdf"
          whileHover={{
            scale: 1.12,
            rotate: 1,
            boxShadow: "0 0 35px rgba(255, 50, 50, 0.85)",
          }}
          whileTap={{ scale: 0.95 }}
          className="
            relative px-6 py-2.5 
            font-bold text-sm uppercase tracking-[0.15em]
            rounded-xl 
            bg-gradient-to-br from-black via-red-900/40 to-black
            text-white
            border border-red-500/50
            shadow-[0_0_15px_rgba(255,0,0,0.45)]
            overflow-hidden
            group
          "
        >
          {/* 1. Hologram shimmer sweep */}
          <span
            className="
              absolute inset-0 bg-gradient-to-r
              from-transparent via-red-400/20 to-transparent
              translate-x-[-120%] group-hover:translate-x-[120%]
              transition-transform duration-700 ease-out
            "
          />

          {/* 2. Outer neon ring */}
          <span className="absolute inset-0 rounded-xl border border-red-500/30 shadow-[0_0_20px_rgba(255,0,0,0.4)]" />

          {/* 3. Corner frames */}
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500" />

          {/* 4. Subtle pulse */}
          <motion.span
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 rounded-xl bg-red-500/5"
          />

          {/* Text */}
          <span className="relative z-10 font-extrabold tracking-widest">
            Resume
          </span>
        </motion.a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
