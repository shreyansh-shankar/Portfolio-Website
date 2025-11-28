import { useState, useEffect, useRef } from "react";
import { executeCommand, CommandOutput } from "./CommandRouter";
import bootLogs from "./bootLogs";

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [input, setInput] = useState("");
  const [bootDone, setBootDone] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // -------------------------
  // Boot Sequence Animation
  // -------------------------
  useEffect(() => {
    let index = 0;

    function nextLine() {
      if (index < bootLogs.length) {
        setHistory(prev => [
          ...prev,
          { text: bootLogs[index], color: "text-green-300" }
        ]);
        index++;
        setTimeout(nextLine, 300); // Adjust speed
      } else {
        setBootDone(true);
        setHistory(prev => [
          ...prev,
          { text: "" },
          { text: "System Ready.", color: "text-amber-300" },
          { text: "Type `help` to begin.", color: "text-gray-300" },
          { text: "" }
        ]);
      }
    }

    nextLine();
  }, []);

  // Scroll to bottom on new history
  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [history]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!bootDone) return;

    const result = executeCommand(input, () => setHistory([]));
    setHistory(prev => [
      ...prev,
      { text: `$ ${input}`, color: "text-green-400" },
      ...result,
      { text: "" }
    ]);
    setInput("");
  }

  return (
    <div
      ref={containerRef}
      onClick={() => inputRef.current?.focus()}
      className="bg-[#0b0b0c] border border-white/10 rounded-xl p-6 font-mono text-sm shadow-xl backdrop-blur-md h-[28rem] w-full overflow-auto"
    >
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
