export type BootLog = {
  text: string;
  color?: string;
};

const bootLogs: BootLog[] = [
  { text: "[INIT] ShreyOS v1.0", color: "text-amber-300" },
  { text: "[KERNEL] Loading modules...", color: "text-green-300" },
  { text: "[FS] Mounting virtual filesystem...", color: "text-blue-300" },
  { text: "[SERVICES] Starting system services...", color: "text-purple-300" },
  { text: "[NETWORK] Checking stack...", color: "text-cyan-300" },
  { text: "[NET] System ready...", color: "text-green-400" }
];

export default bootLogs;