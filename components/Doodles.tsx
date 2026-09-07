import React from "react";

// Stick Figure Greg-Style Character
export const WimpyCharacter: React.FC<{
  pose?: "coding" | "thinking" | "shrugging" | "celebrating";
  className?: string;
  size?: number;
}> = ({ pose = "coding", className = "", size = 160 }) => {
  if (pose === "coding") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`stroke-zinc-900 ${className}`}
        style={{ strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }}
      >
        {/* Head */}
        <circle cx="95" cy="55" r="28" fill="#fbf8ef" />
        {/* 3 hairs on head */}
        <path d="M88 27 Q83 14 78 17" />
        <path d="M96 27 Q96 10 98 12" />
        <path d="M104 27 Q111 14 115 18" />
        {/* Eyes */}
        <circle cx="85" cy="50" r="3.5" fill="#18181b" />
        <circle cx="102" cy="49" r="3.5" fill="#18181b" />
        {/* Nose */}
        <path d="M92 52 Q100 56 94 62" />
        {/* Smirk / Determined smile */}
        <path d="M86 67 Q95 72 105 66" />
        {/* Ear */}
        <path d="M123 54 Q128 58 122 64" fill="#fbf8ef" />

        {/* Torso */}
        <path d="M96 83 L96 135" />

        {/* Chair back */}
        <path d="M60 90 L60 160 M55 160 L65 160 M60 120 L75 120" stroke="#71717a" strokeDasharray="4 3" />

        {/* Legs sitting */}
        <path d="M96 135 L125 135 L128 170" />
        <path d="M94 135 L115 138 L116 170" />
        {/* Shoes */}
        <path d="M124 170 C124 170 142 170 142 176 C142 180 120 180 120 174 Z" fill="#18181b" />
        <path d="M112 170 C112 170 130 170 130 176 C130 180 108 180 108 174 Z" fill="#18181b" />

        {/* Desk line */}
        <path d="M120 145 L190 145" stroke="#18181b" strokeWidth="3.5" />
        <path d="M185 145 L185 190" stroke="#18181b" />

        {/* Arms typing on laptop */}
        <path d="M96 95 Q115 105 135 125" />
        <path d="M96 98 Q120 115 142 128" />

        {/* Laptop */}
        <path d="M130 142 L165 142 L172 120 L138 120 Z" fill="#fbf8ef" />
        {/* Screen */}
        <path d="M138 120 L145 92 L178 96 L172 120 Z" fill="#ffffff" />
        {/* Screen glow / code lines */}
        <path d="M148 100 L168 102" stroke="#71717a" strokeWidth="1.5" />
        <path d="M147 106 L165 108" stroke="#71717a" strokeWidth="1.5" />
        <path d="M146 112 L172 115" stroke="#71717a" strokeWidth="1.5" />
        {/* Red sticker on back */}
        <circle cx="160" cy="107" r="2.5" fill="#ef4444" />
      </svg>
    );
  }

  if (pose === "thinking") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`stroke-zinc-900 ${className}`}
        style={{ strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }}
      >
        <circle cx="80" cy="50" r="28" fill="#fbf8ef" />
        <path d="M72 22 Q68 10 63 14" />
        <path d="M80 22 Q81 7 84 10" />
        <path d="M89 22 Q96 11 100 16" />
        <circle cx="72" cy="45" r="3.5" fill="#18181b" />
        <circle cx="88" cy="44" r="3.5" fill="#18181b" />
        <path d="M78 48 Q86 52 80 57" />
        <path d="M73 63 Q82 61 90 64" />
        <path d="M80 78 L80 135" />
        {/* Thinking hand to chin */}
        <path d="M80 92 Q62 100 68 70 Q70 65 76 65" />
        <path d="M80 95 Q98 105 105 125" />
        {/* Legs */}
        <path d="M80 135 L68 170" />
        <path d="M80 135 L92 170" />
        <path d="M60 170 C60 170 75 170 75 176 C75 180 56 180 56 174 Z" fill="#18181b" />
        <path d="M88 170 C88 170 104 170 104 176 C104 180 84 180 84 174 Z" fill="#18181b" />
      </svg>
    );
  }

  // Celebrating / Shrugging
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-zinc-900 ${className}`}
      style={{ strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }}
    >
      <circle cx="80" cy="50" r="28" fill="#fbf8ef" />
      <path d="M72 22 Q68 10 63 14" />
      <path d="M80 22 Q81 7 84 10" />
      <path d="M89 22 Q96 11 100 16" />
      <circle cx="70" cy="45" r="3.5" fill="#18181b" />
      <circle cx="90" cy="45" r="3.5" fill="#18181b" />
      <path d="M80 48 Q87 53 81 58" />
      {/* Big grin */}
      <path d="M68 60 Q80 74 92 60 Z" fill="#18181b" />
      <path d="M80 78 L80 130" />
      {/* Arms up celebrating */}
      <path d="M80 90 L52 70 L40 50" />
      <path d="M80 90 L108 70 L120 50" />
      {/* Legs */}
      <path d="M80 130 L65 168" />
      <path d="M80 130 L95 168" />
      <path d="M58 168 C58 168 72 168 72 174 C72 178 54 178 54 172 Z" fill="#18181b" />
      <path d="M90 168 C90 168 106 168 106 174 C106 178 88 178 88 172 Z" fill="#18181b" />
    </svg>
  );
};

// Hand-drawn arrow pointing to things
export const HandDrawnArrow: React.FC<{
  direction?: "right" | "down" | "curved-right" | "curved-left";
  className?: string;
  label?: string;
}> = ({ direction = "curved-right", className = "", label }) => {
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      {label && (
        <span className="font-doodle text-base font-bold text-zinc-800 -rotate-2 select-none mb-1">
          {label}
        </span>
      )}
      <svg
        width="60"
        height="40"
        viewBox="0 0 80 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-zinc-900"
        style={{ strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }}
      >
        {direction === "curved-right" && (
          <>
            <path d="M10 15 Q40 5 65 30" />
            <path d="M52 28 L66 31 L64 18" />
          </>
        )}
        {direction === "curved-left" && (
          <>
            <path d="M70 15 Q40 5 15 30" />
            <path d="M28 28 L14 31 L16 18" />
          </>
        )}
        {direction === "down" && (
          <>
            <path d="M40 5 Q42 25 40 42" />
            <path d="M30 33 L40 43 L48 32" />
          </>
        )}
        {direction === "right" && (
          <>
            <path d="M10 25 L65 25" />
            <path d="M55 17 L67 25 L55 33" />
          </>
        )}
      </svg>
    </div>
  );
};

// Scotch Tape component
export const Tape: React.FC<{ className?: string; rotation?: string }> = ({
  className = "",
  rotation = "-rotate-3",
}) => {
  return (
    <div
      className={`tape-strip absolute h-6 w-24 z-20 pointer-events-none opacity-85 ${rotation} ${className}`}
      style={{
        clipPath:
          "polygon(0% 0%, 5% 40%, 0% 100%, 95% 100%, 100% 60%, 95% 0%)",
        background: "rgba(255, 255, 235, 0.75)",
        border: "1px dashed rgba(0,0,0,0.12)",
      }}
    />
  );
};

// Rubber Stamp badge (e.g. APPROVED, 150+ PRS, NO CLOUD BILLS)
export const RubberStamp: React.FC<{
  text: string;
  color?: "red" | "blue" | "green" | "black";
  className?: string;
  rotation?: string;
}> = ({ text, color = "red", className = "", rotation = "-rotate-6" }) => {
  const colorMap = {
    red: "border-red-600 text-red-600",
    blue: "border-blue-600 text-blue-600",
    green: "border-emerald-700 text-emerald-700",
    black: "border-zinc-900 text-zinc-900",
  };

  return (
    <div
      className={`inline-block border-4 border-dashed px-3 py-1 font-marker text-xs md:text-sm tracking-wider uppercase font-bold select-none opacity-90 transition-transform hover:scale-105 ${colorMap[color]} ${rotation} ${className}`}
      style={{
        borderRadius: "6px",
        boxShadow: "inset 0 0 4px rgba(0,0,0,0.05)",
      }}
    >
      {text}
    </div>
  );
};

// Sticky Note Component
export const StickyNote: React.FC<{
  children: React.ReactNode;
  color?: "yellow" | "blue" | "pink" | "green";
  className?: string;
  rotation?: string;
  title?: string;
}> = ({
  children,
  color = "yellow",
  className = "",
  rotation = "rotate-1",
  title,
}) => {
  const bgMap = {
    yellow: "bg-[#fef9c3] text-zinc-900 border-[#fde047]",
    blue: "bg-[#e0f2fe] text-zinc-900 border-[#bae6fd]",
    pink: "bg-[#fce7f3] text-zinc-900 border-[#fbcfe8]",
    green: "bg-[#dcfce7] text-zinc-900 border-[#bbf7d0]",
  };

  return (
    <div
      className={`relative p-5 rounded-sm shadow-md border sketch-shadow-sm transition-transform hover:rotate-0 hover:scale-102 ${bgMap[color]} ${rotation} ${className}`}
    >
      {/* Pushpin at top center */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-zinc-900 shadow-xs z-10" />
      {title && (
        <h4 className="font-hand font-bold text-lg border-b border-zinc-900/20 pb-1 mb-2">
          {title}
        </h4>
      )}
      <div className="font-journal text-base md:text-lg leading-relaxed">{children}</div>
    </div>
  );
};

// Comic Speech Bubble
export const SpeechBubble: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`relative bg-white sketch-border px-5 py-3 sketch-shadow-sm text-zinc-900 font-journal text-lg ${className}`}>
      {children}
      {/* Bubble tail */}
      <div
        className="absolute -bottom-3 left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-zinc-900"
      />
      <div
        className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white"
      />
    </div>
  );
};

// Notebook Binder Holes & Rings for left margin
export const NotebookSpine: React.FC = () => {
  return (
    <div className="absolute left-2 top-0 bottom-0 w-8 flex flex-col justify-around py-12 pointer-events-none z-20 hidden md:flex select-none">
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} className="flex items-center gap-1.5 my-2">
          <div className="w-4 h-4 rounded-full bg-zinc-800/80 border-2 border-zinc-900 shadow-inner" />
          <div className="w-6 h-2 rounded bg-zinc-400 border border-zinc-700 -ml-2 rotate-[-15deg] shadow-xs" />
        </div>
      ))}
    </div>
  );
};

