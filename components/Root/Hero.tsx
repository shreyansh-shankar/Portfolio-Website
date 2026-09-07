import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Send, FileText, ArrowRight } from "lucide-react";
import { WimpyCharacter, SpeechBubble, HandDrawnArrow, RubberStamp, Tape } from "../Doodles";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const candidThoughts = [
  {
    topic: "Systems & DevOps",
    answer: "Rule #1: If it works on my machine, containerize it with Docker so it works everywhere. Rule #2: It's always DNS.",
    doodle: "Infrastructure that scales",
  },
  {
    topic: "Fiction & Writing",
    answer: "Writing speculative fiction and architecting distributed systems use the exact same brain: you construct an intricate universe from pure text, and one tiny contradiction ruins the plot.",
    doodle: "Worldbuilding & Narrative Prose",
  },
  {
    topic: "The Last Deploy",
    answer: "Because 10-hour video tutorials don't prepare you for a real incident. You only truly learn DevOps when you deliberately break a system and fix it locally.",
    doodle: "Break it, fix it, master it",
  },
  {
    topic: "What I Actually Do",
    answer: "Building self-hosted private internets (Bedrock), operational runtimes (Opsa), open-source labs, and crafting freelance fiction & essays.",
    doodle: "Systems & Stories",
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const [activeThought, setActiveThought] = useState(0);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 px-4 sm:px-8 md:px-14 flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* TOP ENTRY DATE BANNER */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-zinc-900 pb-3 mb-8 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest bg-zinc-900 text-white px-2.5 py-0.5 rounded-xs">
              ENTRY #001
            </span>
            <span className="font-journal text-lg text-zinc-700 font-bold">
              — "The Day I Put My Journal On The Internet"
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-doodle text-sm font-semibold text-zinc-600 hidden sm:inline">
              Weather: 72°F and 1 new fiction draft
            </span>
            <RubberStamp text="SYSTEMS & STORIES" color="red" rotation="rotate-2" />
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT COLUMN: The Wimpy Story & Title */}
          <div className="lg:col-span-7 space-y-6">
            {/* BOOK TITLE */}
            <div>
              <p className="font-doodle text-xl md:text-2xl font-bold text-red-600 -rotate-1 mb-1">
                Shreyansh Shankar presents:
              </p>
              <h1 className="font-marker text-4xl sm:text-6xl md:text-7xl text-zinc-900 tracking-tight leading-none uppercase">
                Diary of a <br className="hidden sm:inline" />
                <span className="relative inline-block text-red-600">
                  Code Kid
                  {/* Underline doodle */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-zinc-900"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5 C 50 1, 150 7, 198 3"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* SPEECH BUBBLE FROM GREG/SHREYANSH */}
            <SpeechBubble className="max-w-xl">
              <p className="leading-snug">
                <span className="font-bold underline">First of all, let me get something straight:</span> this is a{" "}
                <span className="font-marker text-red-600">JOURNAL</span>, not a generic portfolio.
                Whether I'm engineering self-hosted private internets, building open-source systems, or writing speculative fiction, I'd rather just show the things I created than write boring corporate buzzwords.
              </p>
            </SpeechBubble>

            {/* HONEST INTRO TEXT ON LINED PAPER */}
            <div className="space-y-3 font-journal text-lg md:text-xl text-zinc-800 leading-relaxed max-w-xl">
              <p>
                I am a <strong className="font-hand text-zinc-950 font-bold highlight-yellow">DevOps & Systems Builder</strong> and an aspiring <strong className="font-hand text-red-600 font-bold highlight-yellow">Creative Writer</strong>. 
                I engineer resilient infrastructure with Docker & Linux, and craft stories and essays that explore human curiosity.
              </p>
              <p className="text-base text-zinc-600 font-journal">
                (Yes, systems and storytelling. Read on to see both in action.)
              </p>
            </div>

            {/* STAMPS & BADGES */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <RubberStamp text="6+ Years Building" color="black" rotation="-rotate-3" />
              <RubberStamp text="Creator @ The Last Deploy" color="blue" rotation="rotate-2" />
              <RubberStamp text="Fiction & Essays" color="green" rotation="-rotate-1" />
            </div>

            {/* ACTION BUTTONS (Hand-drawn look) */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.04, rotate: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection("projects")}
                className="px-7 py-3 bg-zinc-900 text-white font-hand font-bold text-lg rounded-sm sketch-shadow flex items-center gap-2 border-2 border-zinc-900 hover:bg-zinc-800 transition-all"
              >
                <BookOpen size={20} className="text-yellow-400" />
                <span>Read My Works (Ch. 4)</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, rotate: 1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-[#fef9c3] text-zinc-900 font-hand font-bold text-lg rounded-sm sketch-shadow-sm border-2 border-zinc-900 hover:bg-[#fde047] transition-all flex items-center gap-2"
              >
                <Send size={18} className="text-zinc-900" />
                <span>Pass Me a Note</span>
              </motion.button>
            </div>
          </div>

          {/* RIGHT COLUMN: Character Illustration + Interactive Notepad */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* CHARACTER DOODLE */}
            <div className="relative mb-6">
              <Tape className="-top-3 left-6" rotation="-rotate-6" />
              <div className="bg-[#fffdf7] sketch-border p-4 sketch-shadow flex flex-col items-center relative">
                <WimpyCharacter pose="coding" size={175} />
                <div className="mt-2 text-center border-t border-zinc-200 pt-1 w-full">
                  <span className="font-doodle text-sm font-bold text-zinc-700">
                    Figure 1.1: Me deploying at 1:47 AM hoping tests pass
                  </span>
                </div>
              </div>
            </div>

            {/* INTERACTIVE HONEST NOTES: Legal Pad style */}
            <div className="w-full max-w-md bg-[#fef9c3] sketch-border p-5 sketch-shadow-sm relative rotate-1">
              <Tape className="-top-3 right-8" rotation="rotate-3" />
              
              <div className="flex items-center justify-between border-b border-zinc-900/20 pb-2 mb-3">
                <h3 className="font-hand font-bold text-lg text-zinc-900 flex items-center gap-1.5">
                  <Sparkles size={16} className="text-amber-600" />
                  <span>Candid Developer Truths</span>
                </h3>
                <span className="font-mono text-[11px] text-zinc-500 font-bold uppercase">
                  Click to inspect
                </span>
              </div>

              {/* TABS */}
              <div className="grid grid-cols-2 gap-1.5 mb-3">
                {candidThoughts.map((item, idx) => (
                  <button
                    key={item.topic}
                    onClick={() => setActiveThought(idx)}
                    className={`px-2.5 py-1 text-xs font-hand font-bold rounded-sm border transition-all text-left ${
                      activeThought === idx
                        ? "bg-zinc-900 text-white border-zinc-900 sketch-shadow-sm"
                        : "bg-white/80 text-zinc-800 border-zinc-900/30 hover:bg-white"
                    }`}
                  >
                    {item.topic}
                  </button>
                ))}
              </div>

              {/* CONTENT */}
              <div className="bg-white/70 p-3 rounded border border-zinc-900/10 min-h-[95px] flex flex-col justify-between">
                <p className="font-journal text-base text-zinc-900 leading-snug">
                  "{candidThoughts[activeThought].answer}"
                </p>
                <div className="mt-2 pt-2 border-t border-dashed border-zinc-300 flex justify-between items-center text-xs">
                  <span className="font-doodle text-zinc-700 font-bold">
                    {candidThoughts[activeThought].doodle}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-400">
                    entry_{activeThought + 1}.log
                  </span>
                </div>
              </div>
            </div>

            {/* HAND-DRAWN ARROW POINTING DOWN */}
            <div className="mt-6 flex flex-col items-center select-none">
              <span className="font-doodle text-sm font-bold text-zinc-700">
                keep scrolling, it gets better ↓
              </span>
              <HandDrawnArrow direction="down" className="scale-75 -mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
