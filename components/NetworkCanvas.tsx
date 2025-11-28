import { useRef, useEffect } from "react";

export default function CircuitPulseMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      buildCircuit();
    };
    window.addEventListener("resize", resize);

    // Circuit Data
    const traces: { x1: number; y1: number; x2: number; y2: number }[] = [];
    const nodes: { x: number; y: number; pulse: number }[] = [];

    const chipPads: { x: number; y: number; w: number; h: number }[] = [];

    function buildCircuit() {
      traces.length = 0;
      nodes.length = 0;
      chipPads.length = 0;

      // Grid base spacing
      const spacing = 80;
      const jitter = 20;

      for (let x = spacing; x < width; x += spacing) {
        const y = spacing + Math.random() * jitter - jitter / 2;

        // horizontal line
        traces.push({
          x1: 0,
          y1: y,
          x2: width,
          y2: y,
        });
      }

      for (let y = spacing; y < height; y += spacing) {
        const x = spacing + Math.random() * jitter - jitter / 2;

        // vertical line
        traces.push({
          x1: x,
          y1: 0,
          x2: x,
          y2: height,
        });
      }

      // Junction nodes at intersections
      traces.forEach((t1) => {
        traces.forEach((t2) => {
          if (t1 === t2) return;
          if (t1.y1 === t1.y2 && t2.x1 === t2.x2) {
            if (
              t2.x1 >= Math.min(t1.x1, t1.x2) &&
              t2.x1 <= Math.max(t1.x1, t1.x2) &&
              t1.y1 >= Math.min(t2.y1, t2.y2) &&
              t1.y1 <= Math.max(t2.y1, t2.y2)
            ) {
              nodes.push({ x: t2.x1, y: t1.y1, pulse: Math.random() * 100 });
            }
          }
        });
      });

      // Chips
      for (let i = 0; i < 6; i++) {
        chipPads.push({
          x: Math.random() * width,
          y: Math.random() * height,
          w: 60 + Math.random() * 40,
          h: 30 + Math.random() * 20,
        });
      }
    }

    buildCircuit();

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Fade glow layer
      ctx.fillStyle = "rgba(0,0,0,0.25)";
      ctx.fillRect(0, 0, width, height);

      // Draw traces
      ctx.strokeStyle = "rgba(150, 80, 255, 0.4)";
      ctx.lineWidth = 2;

      traces.forEach((t) => {
        ctx.beginPath();
        ctx.moveTo(t.x1, t.y1);
        ctx.lineTo(t.x2, t.y2);
        ctx.stroke();
      });

      // Draw chips
      chipPads.forEach((chip) => {
        ctx.fillStyle = "rgba(40, 0, 60, 0.9)";
        ctx.fillRect(chip.x, chip.y, chip.w, chip.h);

        ctx.strokeStyle = "rgba(160, 120, 255, 0.7)";
        ctx.lineWidth = 2;
        ctx.strokeRect(chip.x, chip.y, chip.w, chip.h);
      });

      // Pulsing nodes (LEDs)
      nodes.forEach((n) => {
        n.pulse += 0.05;
        const glow = (Math.sin(n.pulse) + 1) / 2;

        ctx.beginPath();
        ctx.arc(n.x, n.y, 4 + glow * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 80, 255, ${0.4 + glow * 0.6})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    const anim = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(anim);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-60"
    />
  );
}
