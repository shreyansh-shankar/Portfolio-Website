import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Package, Server, Cloud, ShieldCheck, Activity } from 'lucide-react';

const Stage = ({ icon: Icon, label, delay }: { icon: any, label: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1, filter: "brightness(1.3)" }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col items-center gap-3 relative z-10 cursor-pointer"
  >
    <div className="w-16 h-16 rounded-xl bg-[#111] border border-red-700 flex items-center justify-center text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.25)] hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.45)] transition-all">
      <Icon size={28} />
    </div>
    <span className="font-mono text-sm text-gray-400 tracking-wider uppercase">{label}</span>
  </motion.div>
);

const Connection = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ delay, duration: 0.8, ease: "circOut" }}
    viewport={{ once: true }}
    className="h-0.5 bg-gradient-to-r from-gray-800 via-red-900 to-gray-800 flex-1 mx-2 origin-left relative"
  >
    <motion.div 
      animate={{ x: [-10, 100] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 -translate-y-1/2 w-8 h-1 bg-red-500 blur-sm rounded-full opacity-60"
    />
  </motion.div>
);

const DevOpsPipeline: React.FC = () => {
  return (
    <div className="w-full py-12 px-4 bg-[#080808] border-y border-red-900/20 relative overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-mono text-gray-300 mb-2">
            <span className="text-red-500">{'>'}</span> ARCHITECTURE_FLOW
          </h3>
          <p className="text-gray-500 text-sm">End-to-end automation strategy</p>
        </div>

        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-8 md:pb-0 min-w-[800px]">
          <Stage icon={GitCommit} label="Commit" delay={0} />
          <Connection delay={0.3} />
          <Stage icon={Package} label="Build" delay={0.6} />
          <Connection delay={0.9} />
          <Stage icon={ShieldCheck} label="Test" delay={1.2} />
          <Connection delay={1.5} />
          <Stage icon={Server} label="Deploy" delay={1.8} />
          <Connection delay={2.1} />
          <Stage icon={Activity} label="Monitor" delay={2.4} />
        </div>
      </div>
    </div>
  );
};

export default DevOpsPipeline;
