import React, { useEffect, useRef } from 'react';

const NetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Node System
    const nodes: { x: number; y: number; vx: number; vy: number; type: 'dev' | 'ops' }[] = [];
    const nodeCount = Math.min(60, Math.floor(width / 20));
    
    const mouse = { x: -1000, y: -1000 };

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        type: Math.random() > 0.5 ? 'dev' : 'ops',
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          node.x += dx * 0.01;
          node.y += dy * 0.01;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.type === 'dev' ? 2 : 3, 0, Math.PI * 2);
        ctx.fillStyle = node.type === 'dev' ? 'rgba(99, 102, 241, 0.8)' : 'rgba(168, 85, 247, 0.8)'; // Indigo / Purple
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dbx = node.x - other.x;
          const dby = node.y - other.y;
          const distance = Math.sqrt(dbx * dbx + dby * dby);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(120, 120, 120, ${1 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-40"
    />
  );
};

export default NetworkCanvas;