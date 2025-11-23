import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface VisualProps {
  color: string;
}

// --- 1. Particle System (Canvas) ---
const ParticleVisual: React.FC<VisualProps> = ({ color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; s: number }[] = [];
    
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resize();
    
    // Init particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        s: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [color]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />;
};

// --- 2. Network/Grid (Canvas) ---
const NetworkVisual: React.FC<VisualProps> = ({ color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      // Re-init nodes on resize to keep density sane
      nodes = [];
      for (let i = 0; i < 15; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3
        });
      }
    };
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 1;
      
      // Update and Draw Nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw Connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = color; // Simplified color handling for demo
            ctx.globalAlpha = 1 - dist / 100;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });
      animId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [color]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />;
};

// --- 3. Terminal/Code (DOM) ---
const TerminalVisual: React.FC<VisualProps> = ({ color }) => {
  return (
    <div className="p-4 font-mono text-xs overflow-hidden h-full opacity-70 select-none">
      <div className="flex gap-2 mb-2 opacity-50">
        <div className="w-2 h-2 rounded-full bg-red-500"/>
        <div className="w-2 h-2 rounded-full bg-yellow-500"/>
        <div className="w-2 h-2 rounded-full bg-green-500"/>
      </div>
      <div className="space-y-1" style={{ color }}>
        <motion.div 
          animate={{ opacity: [0, 1, 1, 0] }} 
          transition={{ repeat: Infinity, duration: 2, times: [0, 0.1, 0.9, 1] }}
        >
          $ npm run build
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          > optimizing...
        </motion.div>
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.2 }}
        >
          > chunks: 42
        </motion.div>
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.8 }}
        >
           <span className="animate-pulse">_</span>
        </motion.div>
      </div>
    </div>
  );
};

// --- 4. Code Scroll (DOM) ---
const CodeVisual: React.FC<VisualProps> = ({ color }) => {
  return (
     <div className="p-4 font-mono text-[10px] leading-3 opacity-40 overflow-hidden h-full" style={{ color }}>
       <motion.div
         animate={{ y: [-20, -100] }}
         transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
       >
         {Array.from({ length: 20 }).map((_, i) => (
           <div key={i} className="whitespace-nowrap">
             {i % 2 === 0 ? 'function init() {' : '  return true;'}
             {i % 3 === 0 && ' // TODO: Refactor'}
           </div>
         ))}
       </motion.div>
     </div>
  );
};

// --- 5. Waveform (CSS/SVG) ---
const WaveVisual: React.FC<VisualProps> = ({ color }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-70">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="w-2 rounded-full"
          style={{ backgroundColor: color }}
          animate={{ height: [20, 60, 20] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1, 
            ease: "easeInOut", 
            delay: i * 0.1 
          }}
        />
      ))}
    </div>
  );
};

// --- 6. Blob (SVG) ---
const BlobVisual: React.FC<VisualProps> = ({ color }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-60">
      <motion.div
        className="w-32 h-32 rounded-full blur-2xl"
        style={{ backgroundColor: color }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          borderRadius: ["50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50%"]
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </div>
  );
};

// --- 7. Glass/UI (CSS) ---
const GlassVisual: React.FC<VisualProps> = ({ color }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
       <motion.div 
         className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-xl flex items-center justify-center"
         animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
         transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
       >
          <div className="w-8 h-8 rounded-full opacity-50" style={{ backgroundColor: color }} />
       </motion.div>
    </div>
  );
};

// --- 8. Toggle (CSS) ---
const ToggleVisual: React.FC<VisualProps> = ({ color }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
       <div className="w-16 h-8 bg-white/10 rounded-full p-1 relative border border-white/5">
         <motion.div 
           className="w-6 h-6 rounded-full shadow-lg"
           style={{ backgroundColor: color }}
           animate={{ x: [0, 32, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
         />
       </div>
    </div>
  );
};

// --- 9. Cube (CSS 3D) ---
const CubeVisual: React.FC<VisualProps> = ({ color }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center perspective-500">
       <motion.div 
          className="w-16 h-16 relative preserve-3d"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
       >
          <div className="absolute inset-0 border border-white/20 opacity-50" style={{ transform: 'translateZ(32px)' }} />
          <div className="absolute inset-0 border border-white/20 opacity-50" style={{ transform: 'rotateY(180deg) translateZ(32px)' }} />
          <div className="absolute inset-0 border border-white/20 opacity-50" style={{ transform: 'rotateY(90deg) translateZ(32px)' }} />
          <div className="absolute inset-0 border border-white/20 opacity-50" style={{ transform: 'rotateY(-90deg) translateZ(32px)' }} />
          <div className="absolute inset-0 border border-white/20 opacity-50" style={{ transform: 'rotateX(90deg) translateZ(32px)' }} />
          <div className="absolute inset-0 border border-white/20 opacity-50" style={{ transform: 'rotateX(-90deg) translateZ(32px)' }} />
          
          <div className="absolute inset-4 opacity-30 blur-md" style={{ backgroundColor: color, transform: 'translateZ(0)' }} />
       </motion.div>
    </div>
  );
};

// --- 10. Gradient (CSS) ---
const GradientVisual: React.FC<VisualProps> = ({ color }) => {
    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.div 
                className="w-[200%] h-[200%]"
                style={{ 
                    background: `conic-gradient(from 0deg, transparent, ${color}, transparent)` 
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
            <div className="absolute inset-2 bg-[#111] rounded-xl" />
        </div>
    )
}

// --- Main Dispatcher ---
export const LabVisual = ({ type, colorClass }: { type: string, colorClass: string }) => {
  // Extract Hex from tailwind class approximation
  const getColor = (cls: string) => {
     if (cls.includes('pink')) return '#ec4899';
     if (cls.includes('purple')) return '#a855f7';
     if (cls.includes('indigo')) return '#6366f1';
     if (cls.includes('blue')) return '#3b82f6';
     if (cls.includes('cyan')) return '#06b6d4';
     if (cls.includes('teal')) return '#14b8a6';
     if (cls.includes('emerald')) return '#10b981';
     if (cls.includes('green')) return '#22c55e';
     if (cls.includes('lime')) return '#84cc16';
     if (cls.includes('yellow')) return '#eab308';
     if (cls.includes('amber')) return '#f59e0b';
     if (cls.includes('orange')) return '#f97316';
     if (cls.includes('red')) return '#ef4444';
     return '#ffffff';
  };

  const color = getColor(colorClass);

  switch (type) {
    case 'particles': return <ParticleVisual color={color} />;
    case 'network': return <NetworkVisual color={color} />;
    case 'terminal': return <TerminalVisual color={color} />;
    case 'code': return <CodeVisual color={color} />;
    case 'wave': return <WaveVisual color={color} />;
    case 'audio': return <WaveVisual color={color} />;
    case 'blob': return <BlobVisual color={color} />;
    case 'glass': return <GlassVisual color={color} />;
    case 'toggle': return <ToggleVisual color={color} />;
    case 'cube': return <CubeVisual color={color} />;
    case 'gradient': return <GradientVisual color={color} />;
    default: return <ParticleVisual color={color} />;
  }
};
