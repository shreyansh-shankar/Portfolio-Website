export type CommandOutput = {
    text: string;
    color?: string;
};

export type CommandHandler = (args: string[]) => CommandOutput[];

let superuserActive = false;

export const superCommands: Record<string, CommandHandler> = {
    "ls /core": () => [
        { text: "/core" },
        { text: "├── philosophy.txt" },
        { text: "├── thoughts.log" },
        { text: "└── projects.db" }
    ],
    "cat philosophy.txt": () => [
        { text: "Life is code, debug accordingly." }
    ],
    "scan projects --depth=3": () => [
        { text: "Backend: 3 modules" },
        { text: "Frontend: 2 modules" },
        { text: "DevOps: 4 pipelines" }
    ],
    "neural-map": () => [
        { text: "Generating neural map... [▒▒▒▒▒▒▒▒]" },
        { text: "Completed. Connections active.", color: "text-cyan-300" }
    ]
};

export function activateSuperuser() {
    superuserActive = true;
}

// ------------------------------
// BUILT-IN COMMANDS
// ------------------------------

const builtInCommands: Record<string, CommandHandler> = {
    help: () => [
        { text: "Available commands:", color: "text-blue-300" },
        { text: "help       - show this list" },
        { text: "whoami     - about me" },
        { text: "skills     - list skills" },
        { text: "projects   - current work" },
        { text: "social     - socials" },
        { text: "clear      - clear terminal" }
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
};

// ------------------------------
// COMMAND EXECUTOR
// ------------------------------

export function executeCommand(
    command: string,
    clearFn?: () => void
): CommandOutput[] {
    const [cmd, ...args] = command.trim().split(" ");

    if (!cmd) return [];

    if (cmd === "clear") {
        clearFn?.();
        return [{ text: "" }];
    }

    // Sudo commands: trigger superuser
    if (cmd === "sudo") {
        activateSuperuser();
        return [
            { text: "⚡ Entering Superuser Mode...", color: "text-yellow-300" },
            { text: "Type 'help' to see secret commands.", color: "text-cyan-300" }
        ];
    }

    if (cmd === "help") {
        const normalHelp = [
            { text: "Available commands:", color: "text-blue-300" },
            { text: "help       - show this list" },
            { text: "whoami     - about me" },
            { text: "skills     - list skills" },
            { text: "projects   - current work" },
            { text: "social     - socials" },
            { text: "clear      - clear terminal" }
        ];

        if (superuserActive) {
            normalHelp.push({ text: "\nSuperuser commands:", color: "text-yellow-300" });
            normalHelp.push(
                { text: "ls /core", color: "text-cyan-300" },
                { text: "cat philosophy.txt", color: "text-cyan-300" },
                { text: "scan projects --depth=3", color: "text-cyan-300" },
                { text: "neural-map", color: "text-cyan-300" }
            );
        }

        return normalHelp;
    }

    // execute superuser commands
    if (superuserActive && superCommands[command]) {
        return superCommands[command](args);
    }

    if (builtInCommands[cmd]) {
        return builtInCommands[cmd](args);
    }

    return [
        { text: `Unknown command: ${cmd}`, color: "text-red-400" },
        { text: `Type 'help' to see available commands.` }
    ];
}