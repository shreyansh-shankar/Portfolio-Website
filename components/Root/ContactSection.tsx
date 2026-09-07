import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2, Copy, Instagram } from "lucide-react";
import { RubberStamp, Tape, WimpyCharacter, HandDrawnArrow } from "../Doodles";

interface ContactSectionProps {
  onBackToTop?: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onBackToTop }) => {
  const [copied, setCopied] = useState(false);
  const email = "hello@shreyanshshankar.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 md:px-14 relative">
      <div className="max-w-4xl mx-auto">
        {/* CHAPTER HEADER */}
        <div className="border-b-2 border-zinc-900 pb-3 mb-12 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
              CHAPTER 6 (EPILOGUE)
            </span>
            <h2 className="font-marker text-3xl sm:text-5xl text-zinc-900 mt-1">
              Pass Me a Note
            </h2>
            <p className="font-doodle text-lg text-zinc-600 font-bold -mt-0.5">
              Like passing a folded sheet of paper in class across 4 desks.
            </p>
          </div>
          <RubberStamp text="OPEN FOR WORK" color="green" rotation="rotate-2" />
        </div>

        {/* FOLDED NOTE CONTAINER */}
        <div className="bg-[#fffdf7] p-8 sm:p-12 sketch-border sketch-shadow relative">
          <Tape className="-top-3 left-12" rotation="-rotate-3" />
          <Tape className="-top-3 right-12" rotation="rotate-2" />

          <div className="space-y-6 text-center max-w-2xl mx-auto">
            {/* Stamp & Headline */}
            <div className="flex justify-center">
              <span className="font-doodle text-xl md:text-2xl text-red-600 font-bold -rotate-1">
                Got an interesting project, role, or crazy idea?
              </span>
            </div>

            <h3 className="font-marker text-3xl sm:text-5xl text-zinc-900 leading-tight">
              Let's Build Something Memorable.
            </h3>

            <p className="font-journal text-lg sm:text-xl text-zinc-700 leading-relaxed">
              I’m always open to discussing DevOps infrastructure, full-stack platforms, open-source maintainership, freelance creative writing, speculative fiction projects, or narrative design.
            </p>

            {/* EMAIL COPY BOX (Hand-drawn badge) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:${email}`}
                className="w-full sm:w-auto px-7 py-3 bg-red-600 text-white font-hand font-bold text-lg rounded-sm sketch-shadow-sm border-2 border-zinc-900 flex items-center justify-center gap-2 hover:bg-red-700 transition-all"
              >
                <Mail size={18} />
                <span>Send Email Directly</span>
              </a>

              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-5 py-3 bg-[#fef9c3] text-zinc-900 font-hand font-bold text-base rounded-sm sketch-shadow-sm border-2 border-zinc-900 flex items-center justify-center gap-2 hover:bg-[#fde047] transition-all"
              >
                {copied ? (
                  <>
                    <CheckCircle2 size={18} className="text-emerald-700" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* SOCIAL STICKERS */}
            <div className="pt-8 border-t border-dashed border-zinc-300">
              <p className="font-doodle text-base font-bold text-zinc-600 mb-4">
                Other places you can find me:
              </p>
              <div className="flex justify-center gap-3 sm:gap-5 flex-wrap">
                <a
                  href="https://github.com/shreyansh-shankar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white rounded-sm border-2 border-zinc-900 sketch-shadow-sm font-hand font-bold text-base text-zinc-900 flex items-center gap-2 hover:bg-zinc-100 hover:rotate-1 transition-all"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/shreyanshshankar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#e0f2fe] rounded-sm border-2 border-zinc-900 sketch-shadow-sm font-hand font-bold text-base text-zinc-900 flex items-center gap-2 hover:bg-[#bae6fd] hover:-rotate-1 transition-all"
                >
                  <Linkedin size={18} className="text-blue-700" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://x.com/buildshreyansh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#fef9c3] rounded-sm border-2 border-zinc-900 sketch-shadow-sm font-hand font-bold text-base text-zinc-900 flex items-center gap-2 hover:bg-[#fde047] hover:rotate-1 transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-zinc-900 shrink-0" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X (Twitter)</span>
                </a>

                <a
                  href="https://www.instagram.com/builds.shreyansh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#fce7f3] rounded-sm border-2 border-zinc-900 sketch-shadow-sm font-hand font-bold text-base text-zinc-900 flex items-center gap-2 hover:bg-[#fbcfe8] hover:-rotate-1 transition-all"
                >
                  <Instagram size={18} className="text-pink-600 shrink-0" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* CHARACTER FOOTER DOODLE */}
            <div className="pt-8 flex flex-col items-center select-none">
              <WimpyCharacter pose="celebrating" size={130} />
              <p className="font-doodle text-base font-bold text-zinc-800 mt-2">
                "You actually made it to the end of the journal! That must mean something."
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER & END OF VOLUME 1 */}
        <footer className="mt-14 text-center space-y-3 pt-6 border-t-2 border-zinc-900">
          <div className="flex justify-center items-center">
            <RubberStamp text="END OF VOLUME 1" color="red" rotation="-rotate-1" className="text-sm px-4 py-1" />
          </div>
          <p className="font-journal text-base sm:text-lg text-zinc-800">
            &copy; {new Date().getFullYear()} Shreyansh Shankar. Illustrated & Engineered with precision.
          </p>
          <p className="font-doodle text-xs sm:text-sm text-zinc-500 font-bold">
            * 0 AI hallucinations were hurt in the building of this website.
          </p>
        </footer>

        {/* DASHED SEPARATOR & END-OF-VOLUME BANNER (From user screenshot) */}
        <div className="mt-12 pt-8 border-t-2 border-dashed border-zinc-400 select-none">
          <div className="bg-[#fffdf7] p-5 sm:p-6 rounded-sm sketch-border sketch-shadow flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-marker text-2xl text-red-600">↳</span>
              <div>
                <span className="font-mono text-xs font-bold uppercase text-zinc-500 block">
                  END OF CHAPTER 6
                </span>
                <p className="font-hand font-bold text-lg sm:text-xl text-zinc-900">
                  You have reached the end of Volume 1!
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (onBackToTop) {
                  onBackToTop();
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="px-5 py-2.5 bg-white border-2 border-zinc-900 rounded-sm sketch-shadow-sm font-hand font-bold text-base text-zinc-900 hover:bg-[#fef08a] transition-all flex items-center gap-2"
            >
              <span>↩ Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
