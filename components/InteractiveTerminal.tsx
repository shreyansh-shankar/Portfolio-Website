import { useState, useEffect, useRef } from "react";

type CommandOutput = {
  text: string;
  color?: string;
};

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<CommandOutput[]>([
    { text: "Initializing virtual shell...", color: "text-amber-300" },
    { text: "Type `help` to explore commands.", color: "text-gray-300" },
    { text: "" }
  ]);

  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, () => CommandOutput | CommandOutput[]> = {
    help: () => [
      { text: "Available commands:", color: "text-blue-300" },
      { text: "help      - show this list" },
      { text: "whoami    - about me" },
      { text: "skills    - list skills" },
      { text: "projects  - current work" },
      { text: "social    - socials" },
      { text: "clear     - clear terminal" }
    ],

    whoami: () => [
      { text: "Shreyansh Shankar", color: "text-amber-300" },
      { text: "DevOps Engineer · Full-Stack Developer" },
      { text: "Automation · Systems · Design" }
    ],

    skills: () => [
      { text: "DevOps     Docker · Kubernetes · CI/CD · Linux" },
      { text: "Backend    Python · FastAPI · Node.js" },
      { text: "Frontend   React · Next.js" },
      { text: "Cloud      AWS · GCP" }
    ],

    projects: () => [
      { text: "Portfolio Website (Next.js + TS + Animations)" },
      { text: "AI Companion (Local LLM + Hindi Translation Pipeline)" },
      { text: "Pygame YouTube-like App" },
      { text: "Local Password Manager (Encrypted + 2FA)" }
    ],

    social: () => [
      { text: "GitHub   github.com/shreyanshshankar", color: "text-purple-300" },
      { text: "LinkedIn linkedin.com/in/shreyanshsh", color: "text-blue-300" }
    ],

    clear: () => {
      setHistory([]);
      return [{ text: "" }];
    }
  };

  function runCommand(cmd: string) {
    if (commands[cmd]) return commands[cmd]();
    return [{ text: `Unknown command: ${cmd}`, color: "text-red-400" }];
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cmd = input.trim();

    let result = runCommand(cmd);
    const formattedResult = Array.isArray(result) ? result : [result];

    setHistory(prev => [
      ...prev,
      { text: `$ ${cmd}`, color: "text-green-400" },
      ...formattedResult,
      { text: "" }
    ]);

    setInput("");
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [history]);

  return (
    <div
      ref={containerRef}
      onClick={() => inputRef.current?.focus()}
      className="bg-[#0b0b0c] border border-white/10 rounded-xl p-6 
                 font-mono text-sm shadow-xl backdrop-blur-md 
                 h-[28rem] w-full overflow-auto 
                 transition-all duration-300"
    >
      {/* Terminal Header (Fake window controls) */}
      <div className="flex gap-2 mb-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {history.map((line, i) => (
        <div key={i} className={`whitespace-pre-wrap ${line.color ?? ""}`}>
          {line.text}
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex items-center mt-1">
        <span className="text-green-400">$&nbsp;</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-green-300"
        />
        <span className="animate-pulse ml-1 text-green-400">█</span>
      </form>
    </div>
  );
}
