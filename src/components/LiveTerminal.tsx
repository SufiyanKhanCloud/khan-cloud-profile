import { useState, useEffect, useCallback } from "react";

const COMMANDS = [
  {
    prompt: "sufiyan@ubuntu:~$ ",
    command: "terraform apply --auto-approve",
    output: "Apply complete! Resources: 3 added, 0 changed, 0 destroyed.",
  },
  {
    prompt: "sufiyan@ubuntu:~$ ",
    command: "docker-compose up -d",
    output: "Container mas-simulator-api  Started",
  },
  {
    prompt: "sufiyan@ubuntu:~$ ",
    command: "wg-quick up wg0",
    output: "  [#] interface wg0 up",
  },
];

const TYPE_SPEED = 45;
const OUTPUT_DELAY = 1000;
const PAUSE_BETWEEN = 500;
const LOOP_DELAY = 4000;

interface Line {
  type: "command" | "output";
  prompt?: string;
  text: string;
}

export function LiveTerminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [currentTyping, setCurrentTyping] = useState("");
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState<"idle" | "typing" | "waiting">("idle");

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(interval);
  }, []);

  const runSequence = useCallback(async () => {
    setLines([]);
    setCurrentTyping("");
    setCurrentPrompt("");

    for (let i = 0; i < COMMANDS.length; i++) {
      const { prompt, command, output } = COMMANDS[i];

      // Show prompt, type command char by char
      setCurrentPrompt(prompt);
      setPhase("typing");

      for (let j = 0; j <= command.length; j++) {
        setCurrentTyping(command.slice(0, j));
        await new Promise((r) => setTimeout(r, TYPE_SPEED));
      }

      // Wait, then show output
      setPhase("waiting");
      await new Promise((r) => setTimeout(r, OUTPUT_DELAY));

      setLines((prev) => [
        ...prev,
        { type: "command", prompt, text: command },
        { type: "output", text: output },
      ]);
      setCurrentTyping("");
      setCurrentPrompt("");

      if (i < COMMANDS.length - 1) {
        await new Promise((r) => setTimeout(r, PAUSE_BETWEEN));
      }
    }

    // Final blinking cursor
    setCurrentPrompt("sufiyan@ubuntu:~$ ");
    setPhase("idle");
    await new Promise((r) => setTimeout(r, LOOP_DELAY));
  }, []);

  useEffect(() => {
    let cancelled = false;
    const loop = async () => {
      while (!cancelled) {
        await runSequence();
      }
    };
    loop();
    return () => { cancelled = true; };
  }, [runSequence]);

  return (
    <div className="w-full rounded-lg overflow-hidden border border-border/40 shadow-elevated bg-[#0d1117] font-mono text-[13px] sm:text-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-border/30">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[#8b949e] text-xs ml-2">sufiyan@ubuntu — bash</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 min-h-[180px] sm:min-h-[200px] max-h-[260px] overflow-hidden">
        {lines.map((line, i) => (
          <div key={i} className="leading-6">
            {line.type === "command" ? (
              <span>
                <span className="text-[#3fb950]">{line.prompt}</span>
                <span className="text-[#e6edf3]">{line.text}</span>
              </span>
            ) : (
              <span className="text-[#58a6ff]">{line.text}</span>
            )}
          </div>
        ))}

        {/* Currently typing line */}
        {currentPrompt && (
          <div className="leading-6">
            <span className="text-[#3fb950]">{currentPrompt}</span>
            <span className="text-[#e6edf3]">{currentTyping}</span>
            <span
              className={`inline-block w-[8px] h-[16px] ml-[1px] align-middle transition-opacity ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundColor: "#58a6ff" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
