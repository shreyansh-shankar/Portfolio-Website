import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Terminal,
  Cpu,
  PenTool,
  Layers,
  Sparkles,
  GitBranch,
  Search,
  Compass,
  FileCode,
  Sliders,
} from "lucide-react";
import { RubberStamp, Tape, WimpyCharacter, SpeechBubble } from "../Doodles";

interface ParallelComparison {
  id: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  techSide: {
    title: string;
    subtitle: string;
    details: string;
  };
  writingSide: {
    title: string;
    subtitle: string;
    details: string;
  };
  candidObservation: string;
  tagColor: string;
}

const comparisons: ParallelComparison[] = [
  {
    id: "worldbuilding",
    category: "Architecture & Lore",
    icon: Compass,
    tagColor: "bg-[#fef9c3]",
    techSide: {
      title: "System Architecture & Bedrock",
      subtitle: "Defining DNS, networks, gateways & invariants",
      details:
        "Building self-hosted infrastructure where every service, reverse proxy, and subnetwork has strict deterministic rules and failover boundaries.",
    },
    writingSide: {
      title: "Worldbuilding & Speculative Lore",
      subtitle: "Constructing consistent societies & fictional physics",
      details:
        "Designing fictional realms where magic, technology, and political motives follow unbreakable rules so the universe feels organically real.",
    },
    candidObservation:
      "If your DNS routes fail, traffic drops into the void. If your fantasy world violates its own rules, the illusion shatters. Both require rock-solid internal consistency.",
  },
  {
    id: "events",
    category: "Causality & Flow",
    icon: GitBranch,
    tagColor: "bg-[#e0f2fe]",
    techSide: {
      title: "Event-Sourced Runtimes (Opsa)",
      subtitle: "Immutable logs, CQRS & deterministic replays",
      details:
        "State is never mutated blindly in place. Every state change is an immutable event appended to an append-only log that can be replayed chronologically.",
    },
    writingSide: {
      title: "Narrative Causality & Plotting",
      subtitle: "Cause and consequence over convenient coincidence",
      details:
        "Every dramatic beat must be an inevitable consequence of prior character decisions. No unearned miracles, no deus ex machina, zero plot holes.",
    },
    candidObservation:
      "A bug occurs when state mutates without an event log. Bad writing occurs when a hero wins without paying a thematic price. Causality is everything.",
  },
  {
    id: "editing",
    category: "Refinement & Economy",
    icon: PenTool,
    tagColor: "bg-[#dcfce7]",
    techSide: {
      title: "Refactoring Codebases",
      subtitle: "Deleting boilerplate & simplifying abstractions",
      details:
        "Pruning bloated dependencies, removing redundant utility wrappers, and leaving tight, readable, self-documenting functions.",
    },
    writingSide: {
      title: "Line Editing & Prose Polish",
      subtitle: "Cutting purple prose & sharpening dialogue",
      details:
        "Ruthlessly striking through paragraphs of unnecessary exposition so the dialogue and emotional subtext have room to breathe.",
    },
    candidObservation:
      "The best commit is 20 lines added, 350 lines deleted. The best draft revision is cutting three pages of self-indulgent scenery description.",
  },
  {
    id: "debugging",
    category: "Diagnostics & Truth",
    icon: Search,
    tagColor: "bg-[#fce7f3]",
    techSide: {
      title: "Debugging Incident Logs",
      subtitle: "Tracing stack traces & packet dumps at 2 AM",
      details:
        "Inspecting telemetry, error rates, and race conditions until you locate the exact line where reality diverged from assumption.",
    },
    writingSide: {
      title: "Diagnosing Pacing & Reader Drop-off",
      subtitle: "Reading aloud to identify narrative sluggishness",
      details:
        "Tracking where readers get bored, confused, or disengaged, and diagnosing whether the scene lacked stakes, tension, or curiosity.",
    },
    candidObservation:
      "A compiler returns a stack trace; a bored reader simply closes your tab. Debugging code is stressful, but diagnosing fiction requires total ego detachment.",
  },
];

const DualCraftSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = comparisons[activeTab];
  const Icon = active.icon;

  return (
    <section id="craft" className="py-20 px-4 sm:px-8 md:px-14 relative">
      <div className="max-w-6xl mx-auto">
        {/* CHAPTER HEADER */}
        <div className="border-b-2 border-zinc-900 pb-3 mb-10 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
              CHAPTER 2
            </span>
            <h2 className="font-marker text-3xl sm:text-5xl text-zinc-900 mt-1">
              Systems & Stories: The Dual Craft
            </h2>
            <p className="font-doodle text-lg text-zinc-600 font-bold -mt-0.5">
              Why writing speculative fiction and architecting distributed runtimes require the exact same brain.
            </p>
          </div>
          <RubberStamp text="LOGIC & LORE" color="blue" rotation="-rotate-2" />
        </div>

        {/* CANDID INTRO SPEECH BUBBLE WITH CHARACTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-8">
            <SpeechBubble className="w-full">
              <p className="text-base sm:text-lg leading-snug text-zinc-900">
                <span className="font-bold underline">People often ask me if doing tech and fiction is a weird split:</span>{" "}
                "Aren't software engineers cold calculators, and fiction writers daydreamers?"
                <br className="my-1" />
                The truth is, both crafts are about one single thing:{" "}
                <span className="font-marker text-red-600">simulating intricate universes</span>.
                In code, silicon chips run your rules. In fiction, human imaginations run your prose. If there’s an unhandled paradox in either, the whole illusion crashes.
              </p>
            </SpeechBubble>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="bg-[#fffdf7] p-3 sketch-border sketch-shadow relative -rotate-2">
              <Tape className="-top-3 right-6" rotation="rotate-6" />
              <WimpyCharacter pose="thinking" size={145} />
              <div className="text-center pt-1 border-t border-zinc-200">
                <span className="font-doodle text-xs font-bold text-zinc-600">
                  Figure 2.1: Me debugging a plot hole like a stack trace
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE COMPARISON PAD */}
        <div className="bg-[#fffdf7] p-6 sm:p-8 sketch-border sketch-shadow relative">
          <Tape className="-top-3 left-12" rotation="-rotate-2" />
          <Tape className="-top-3 right-12" rotation="rotate-3" />

          {/* TAB SELECTOR */}
          <div className="flex flex-wrap items-center justify-between border-b-2 border-zinc-900 pb-3 mb-6 gap-3">
            <span className="font-hand font-bold text-xl text-zinc-900 flex items-center gap-2">
              <Sliders size={18} className="text-red-600" />
              <span>Select a Discipline Lens:</span>
            </span>

            <div className="flex flex-wrap gap-2">
              {comparisons.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 rounded-sm text-sm font-hand font-bold border-2 border-zinc-900 transition-all select-none ${
                    activeTab === idx
                      ? "bg-[#fef08a] sketch-shadow-sm -translate-y-0.5 text-zinc-900"
                      : "bg-white text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  {c.category}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE COMPARISON SPLIT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* LEFT CARD: THE SYSTEMS / TECH SIDE */}
            <motion.div
              key={`tech-${active.id}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f8fafc] border-2 border-zinc-900 rounded-sm p-5 sketch-shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-zinc-200 pb-2">
                  <div className="flex items-center gap-2">
                    <Terminal size={18} className="text-zinc-900" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-600">
                      The Systems Side
                    </span>
                  </div>
                  <span className="font-mono text-[10px] bg-zinc-900 text-white px-2 py-0.5 rounded">
                    RUNTIME
                  </span>
                </div>

                <h4 className="font-hand font-bold text-2xl text-zinc-900 leading-tight mb-1">
                  {active.techSide.title}
                </h4>
                <p className="font-mono text-xs font-bold text-red-600 mb-3">
                  {active.techSide.subtitle}
                </p>
                <p className="font-journal text-base text-zinc-700 leading-relaxed">
                  {active.techSide.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">
                  Target: Resilient Infrastructure
                </span>
                <span className="font-doodle text-xs font-bold text-emerald-700">
                  #Deterministic
                </span>
              </div>
            </motion.div>

            {/* RIGHT CARD: THE LITERARY / WRITING SIDE */}
            <motion.div
              key={`writing-${active.id}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#fffbf0] border-2 border-zinc-900 rounded-sm p-5 sketch-shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-zinc-200 pb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-red-600" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-600">
                      The Literary Side
                    </span>
                  </div>
                  <span className="font-mono text-[10px] bg-red-600 text-white px-2 py-0.5 rounded">
                    NARRATIVE
                  </span>
                </div>

                <h4 className="font-hand font-bold text-2xl text-zinc-900 leading-tight mb-1">
                  {active.writingSide.title}
                </h4>
                <p className="font-mono text-xs font-bold text-blue-700 mb-3">
                  {active.writingSide.subtitle}
                </p>
                <p className="font-journal text-base text-zinc-700 leading-relaxed">
                  {active.writingSide.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">
                  Target: Compelling Speculative Voice
                </span>
                <span className="font-doodle text-xs font-bold text-purple-700">
                  #Worldbuilding
                </span>
              </div>
            </motion.div>
          </div>

          {/* CANDID OBSERVATION FOOTER BANNER */}
          <motion.div
            key={`obs-${active.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 bg-[#fef9c3] p-4 rounded-sm border-2 border-dashed border-zinc-900/60 flex items-start sm:items-center gap-3"
          >
            <PenTool size={20} className="text-zinc-900 mt-1 sm:mt-0 shrink-0" />
            <p className="font-doodle text-base sm:text-lg font-bold text-zinc-900 leading-snug">
              <span className="underline">The Wimpy Kid Take:</span> "{active.candidObservation}"
            </p>
          </motion.div>
        </div>

        {/* SIDE-BY-SIDE TOOLKIT INDEX CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Engineering Arsenal Note */}
          <div className="bg-[#faf6ea] p-5 rounded-sm sketch-border-sm sketch-shadow-sm border-2 border-zinc-900">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-3">
              <h3 className="font-marker text-xl text-zinc-900 flex items-center gap-2">
                <Cpu size={18} className="text-zinc-900" />
                <span>The Silicon Lab Toolkit</span>
              </h3>
              <RubberStamp text="BATTLE TESTED" color="black" className="text-[10px]" />
            </div>
            <ul className="space-y-1.5 font-journal text-base text-zinc-800">
              <li>• <strong>Docker & Linux Containers:</strong> Hermetic, portable runtimes.</li>
              <li>• <strong>Tailscale & Private DNS:</strong> Mesh networking for personal infrastructure.</li>
              <li>• <strong>FastAPI & Python:</strong> High-performance event handlers & CLI backbones.</li>
              <li>• <strong>Next.js & TypeScript:</strong> Polished, responsive, accessible user interfaces.</li>
            </ul>
          </div>

          {/* Literary Arsenal Note */}
          <div className="bg-[#fdf2f8] p-5 rounded-sm sketch-border-sm sketch-shadow-sm border-2 border-zinc-900">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-3">
              <h3 className="font-marker text-xl text-zinc-900 flex items-center gap-2">
                <BookOpen size={18} className="text-red-600" />
                <span>The Narrative Prose Toolkit</span>
              </h3>
              <RubberStamp text="CRAFTED DRAFTS" color="red" className="text-[10px]" />
            </div>
            <ul className="space-y-1.5 font-journal text-base text-zinc-800">
              <li>• <strong>Speculative Worldbuilding:</strong> Grounded rules, high consequence.</li>
              <li>• <strong>Causality & Tension:</strong> Plot turns driven by human contradiction.</li>
              <li>• <strong>Line Editing:</strong> Cutting dead adjectives to let rhythm lead the page.</li>
              <li>• <strong>Essays & Cultural Critiques:</strong> Examining how tech reshapes our lives.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualCraftSection;

