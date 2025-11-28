import { useState, useEffect, useRef } from "react";
import { executeCommand, CommandOutput } from "./Terminal/CommandRouter";
import bootLogs, { BootLog } from "./Terminal/bootLogs";

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [input, setInput] = useState("");
  const [bootDone, setBootDone] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // -------------------------
  // Boot Sequence (Typewriter Effect)
  // -------------------------
  const bootStarted = useRef(false);

  useEffect(() => {
    if (bootStarted.current) return;
    bootStarted.current = true;

    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = "";

    function typeChar() {
      if (lineIndex >= bootLogs.length) {
        // Boot finished
        setBootDone(true);
        setHistory(prev => [
          ...prev,
          { text: "" },
          { text: "System Ready.", color: "text-amber-300" },
          { text: "Type `help` to begin.", color: "text-gray-300" },
          { text: "" }
        ]);
        return;
      }

      const line = bootLogs[lineIndex]; // line is now a BootLog object

      if (charIndex < line.text.length) {
        currentLine += line.text[charIndex];  // use line.text
        charIndex++;
        setHistory(prev => [
          ...prev.slice(0, -1),
          { text: currentLine, color: line.color ?? "text-green-300" }  // use line.color
        ]);
        setTimeout(typeChar, 10); // adjust typing speed
      } else {
        // Move to next line
        currentLine = "";
        charIndex = 0;
        lineIndex++;
        setHistory(prev => [...prev, { text: "" }]);
        setTimeout(typeChar, 200); // pause between lines
      }
    }

    setHistory([{ text: "" }]);
    typeChar();
  }, []);

  const [superuserPasswordPrompt, setSuperuserPasswordPrompt] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!bootDone) return;

    let result: CommandOutput[] = [];

    const trimmed = input.trim();

    // Superuser password entry mode
    if (superuserPasswordPrompt) {
      activateSuperuser();
      setSuperuserPasswordPrompt(false);
      result = [
        { text: "Access granted.", color: "text-green-400" },
        { text: "Entering Shreyansh_Internal_Mode...", color: "text-cyan-300" }
      ];
    } else if (trimmed === "sudo enable --deep") {
      // Trigger sudo password prompt
      setSuperuserPasswordPrompt(true);
      result = [{ text: "[sudo] password for user:", color: "text-yellow-300" }];
    } else {
      // Execute the command normally
      result = executeCommand(trimmed, clearHistory);
    }

    setHistory(prev => [
      ...prev,
      { text: `$ ${input}`, color: "text-green-400" },
      ...result,
      { text: "" }
    ]);

    setInput("");
  }

  // visual command output handler
  const [lastVisualCommand, setLastVisualCommand] = useState<string | null>(null);

  // Scroll to bottom
  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  function clearHistory() { setHistory([]); }

  return (
    <div
      ref={containerRef}
      onClick={() => inputRef.current?.focus()}
      className="bg-[#0b0b0c] border border-white/10 rounded-xl p-6 font-mono text-sm shadow-xl backdrop-blur-md h-[28rem] w-full overflow-auto"
    >
      {/* Fake Window Controls */}
      <div className="flex gap-2 mb-4">
        <span className="w-3 h-3 bg-red-500 rounded-full" />
        <span className="w-3 h-3 bg-yellow-500 rounded-full" />
        <span className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      {history.map((line, i) => (
        <div key={i} className={`whitespace-pre-wrap ${line.color ?? ""}`}>{line.text}</div>
      ))}

      {bootDone && (
        <form onSubmit={handleSubmit} className="flex items-center mt-1">
          <span className="text-green-400">$&nbsp;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-green-300"
          />
          <span className="animate-pulse ml-1 text-green-400">█</span>
        </form>
      )}
    </div>
  );
}
