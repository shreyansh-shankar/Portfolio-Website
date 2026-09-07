import React from "react";
import { motion } from "framer-motion";
import { Layers, Terminal as TerminalIcon, Code, BookOpen } from "lucide-react";
import { WimpyCharacter, RubberStamp, Tape } from "../Doodles";

const pillars = [
  {
    icon: TerminalIcon,
    title: "DevOps & Infrastructure",
    tools: "Docker, Linux, Tailscale, Bedrock",
    note: "Building private internets and zero-downtime systems.",
    tagColor: "bg-[#fef9c3]",
  },
  {
    icon: Layers,
    title: "Full-Stack & Runtimes",
    tools: "Next.js, FastAPI, Python, Opsa",
    note: "From event-sourced engines to polished web UIs.",
    tagColor: "bg-[#e0f2fe]",
  },
  {
    icon: Code,
    title: "Interactive Platforms",
    tools: "The Last Deploy, Open Source",
    note: "Teaching DevOps by breaking real systems locally.",
    tagColor: "bg-[#dcfce7]",
  },
  {
    icon: BookOpen,
    title: "Creative Writing & Fiction",
    tools: "Speculative Fiction, Essays, Worldbuilding",
    note: "Crafting narratives that explore human curiosity.",
    tagColor: "bg-[#fce7f3]",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 md:px-14 relative">
      <div className="max-w-6xl mx-auto">
        {/* CHAPTER HEADER */}
        <div className="border-b-2 border-zinc-900 pb-3 mb-10 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
              CHAPTER 1
            </span>
            <h2 className="font-marker text-3xl sm:text-5xl text-zinc-900 mt-1">
              Why I Build Things
            </h2>
            <p className="font-doodle text-lg text-zinc-600 font-bold -mt-0.5">
              (Or: How extreme aversion to manual labor became a career)
            </p>
          </div>
          <RubberStamp text="CLASSIFIED LORE" color="black" rotation="rotate-2" />
        </div>

        {/* 2-COL GRID: Left Story + Right Visual Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: The Candid Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-journal text-xl text-zinc-800 space-y-4 leading-relaxed bg-[#fffdf7] p-6 sm:p-8 sketch-border sketch-shadow relative">
              <Tape className="-top-3 left-10" rotation="-rotate-3" />
              <Tape className="-bottom-3 right-10" rotation="rotate-2" />

              <p>
                Most developers write on their portfolio that they were born with a keyboard in hand and a burning passion to "disrupt synergistic paradigms."
              </p>
              
              <p>
                <strong className="font-hand text-zinc-950 font-bold highlight-yellow">
                  Let’s be honest:
                </strong>{" "}
                I got into coding because I realized that humans spend hours doing boring, repetitive tasks that a Python script can finish before you even grab a glass of water.
              </p>

              <p>
                Over the past <span className="font-bold underline decoration-red-500 decoration-wavy">6+ years</span>, that drive evolved into building platforms like <strong>The Last Deploy</strong> (learn DevOps by fixing broken systems), architecting <strong>Project Bedrock</strong> (a miniature private internet), engineering runtime engines like <strong>Opsa</strong>, and writing speculative fiction and philosophical essays.
              </p>

              <p>
                My philosophy? <em>Build systems that are rock-solid by design, write stories with depth, and make sure whatever you put into the world has real personality.</em>
              </p>

              {/* Scribbled postscript */}
              <div className="pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between">
                <span className="font-doodle text-base font-bold text-red-600 -rotate-1">
                  P.S. Yes, I still test in production sometimes. (Just kidding. Maybe.)
                </span>
                <span className="font-mono text-xs text-zinc-400">pg. 14</span>
              </div>
            </div>

            {/* 4 PILLARS AS INDEX CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -4, rotate: idx % 2 === 0 ? -1 : 1 }}
                    className={`${item.tagColor} p-4 rounded sketch-border-sm sketch-shadow-sm border-2 border-zinc-900 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon size={18} className="text-zinc-900" />
                        <h4 className="font-hand font-bold text-base text-zinc-900">
                          {item.title}
                        </h4>
                      </div>
                      <p className="font-mono text-xs text-zinc-700 font-semibold mb-2">
                        {item.tools}
                      </p>
                    </div>
                    <p className="font-journal text-sm text-zinc-600 italic border-t border-zinc-900/10 pt-1.5">
                      "{item.note}"
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Visual Character & Stamp Box */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-8">
            {/* Thinking Character Card */}
            <div className="relative w-full max-w-sm bg-[#fffdf7] sketch-border p-6 sketch-shadow flex flex-col items-center rotate-1">
              <Tape className="-top-3.5 left-1/3" rotation="-rotate-1" />
              
              <WimpyCharacter pose="thinking" size={170} />

              <div className="text-center mt-2 border-t border-zinc-300 pt-2 w-full">
                <p className="font-hand font-bold text-lg text-zinc-900">
                  Figure 1.2: Pondering System Architecture
                </p>
                <p className="font-doodle text-sm text-zinc-600 font-semibold">
                  (Or wondering where that trailing comma went)
                </p>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="font-mono text-xs bg-zinc-100 border border-zinc-300 px-2 py-1 rounded">
                  status: thinking
                </span>
                <span className="font-mono text-xs bg-zinc-100 border border-zinc-300 px-2 py-1 rounded">
                  uptime: 99.9%
                </span>
              </div>
            </div>

            {/* 6+ YEARS EXPERIENCE STAMP / POST-IT */}
            <motion.div
              whileHover={{ scale: 1.03, rotate: 0 }}
              className="bg-[#fef9c3] sketch-border p-6 sketch-shadow w-full max-w-sm rotate-[-2deg] relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 border-2 border-zinc-900" />
              
              <div className="text-center space-y-1">
                <span className="font-mono text-xs uppercase font-bold text-zinc-500 tracking-wider">
                  Official Verification
                </span>
                <div className="font-marker text-5xl text-red-600 leading-none py-1">
                  6+ YEARS
                </div>
                <p className="font-hand font-bold text-lg text-zinc-900 leading-tight">
                  Of Building, Breaking & Fixing Software
                </p>
                <p className="font-journal text-sm text-zinc-700 pt-1">
                  From early script automations to distributed architectures and hackathon trophies.
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-dashed border-zinc-400 flex justify-between items-center text-xs font-mono text-zinc-600">
                <span>SEAL: VERIFIED</span>
                <RubberStamp text="100% REAL" color="green" rotation="rotate-3" className="text-[10px] py-0.5 px-2" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
