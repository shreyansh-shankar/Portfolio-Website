import { useEffect, useRef } from "react";

type VisualTerminalOutputProps = {
  command: string;
};

export default function VisualTerminalOutput({ command }: VisualTerminalOutputProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clean canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (command === "matrix") {
      // Matrix rain effect
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
      const fontSize = 16;
      const columns = Math.floor(canvas.width / fontSize);
      const drops = Array(columns).fill(1);

      const interval = setInterval(() => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0F0";
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, i) => {
          const text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillText(text, i * fontSize, y * fontSize);
          drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }

    if (command === "neural-map") {
      // Simple node connecting animation
      const nodes = Array.from({ length: 8 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1
      }));

      const interval = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0ff";
        nodes.forEach(n => {
          ctx.beginPath();
          ctx.arc(n.x, n.y, 5, 0, Math.PI * 2);
          ctx.fill();
        });
        // draw lines
        ctx.strokeStyle = "#0ff";
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
        // move nodes
        nodes.forEach(n => {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
          if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        });
      }, 50);

      return () => clearInterval(interval);
    }

    if (command === "circuit") {
      // Minimal procedural PCB-like animation
      const interval = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#0ff";
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          const x1 = Math.random() * canvas.width;
          const y1 = Math.random() * canvas.height;
          const x2 = Math.random() * canvas.width;
          const y2 = Math.random() * canvas.height;
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }, 100);

      return () => clearInterval(interval);
    }

  }, [command]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={200}
      className="mt-2 border border-white/20 rounded-lg"
    />
  );
}