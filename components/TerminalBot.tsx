import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, X, Minimize2, Maximize2, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalMessage } from '../types';
import { generateChatResponse } from '../services/geminiService';

const TerminalBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<TerminalMessage[]>([
    { role: 'system', content: 'Initializing Shreyansh.OS v2.0...', timestamp: new Date() },
    { role: 'assistant', content: 'Greetings. I am the system guardian. Ask me anything about Shreyansh\'s stack, projects, or background.', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: TerminalMessage = { role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.filter(m => m.role !== 'system').map(m => ({ role: m.role, content: m.content }));
      const responseText = await generateChatResponse(history, userMsg.content);

      const aiMsg: TerminalMessage = { role: 'assistant', content: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'system', content: 'Error: Connection lost.', timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Trigger */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-full shadow-lg shadow-indigo-900/50 flex items-center gap-2 group border border-indigo-400"
          >
            <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-mono text-sm">
              Term_Access
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
              height: isMinimized ? 'auto' : '500px',
              width: isMinimized ? '300px' : 'min(90vw, 500px)'
            }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono text-sm"
          >
            {/* Header */}
            <div className="bg-[#1a1a1a] p-3 flex items-center justify-between border-b border-gray-800 cursor-move">
              <div className="flex items-center gap-2 text-indigo-400">
                <Cpu size={16} />
                <span className="font-bold tracking-wider">ROOT_ACCESS // AI</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <button onClick={() => setIsMinimized(!isMinimized)} className="hover:text-white transition-colors">
                  {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                </button>
                <button onClick={() => setIsOpen(false)} className="hover:text-red-400 transition-colors">
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Body */}
            {!isMinimized && (
              <>
                <div
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4 text-gray-300"
                >
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-block p-2 rounded ${msg.role === 'user'
                          ? 'bg-indigo-900/30 text-indigo-200 border border-indigo-800'
                          : msg.role === 'system'
                            ? 'text-yellow-500 italic text-xs'
                            : 'text-green-400'
                        }`}>
                        <span className="opacity-50 text-xs block mb-1">
                          [{msg.role.toUpperCase()}] {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="text-left text-green-400 animate-pulse">
                      <span>&gt; Processing query...</span>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-3 bg-[#111] border-t border-gray-800 flex items-center gap-2">
                  <span className="text-green-500">{'>'}</span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Execute command..."
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-gray-600"
                    autoFocus
                  />
                  <button onClick={handleSend} disabled={isLoading} className="text-gray-400 hover:text-white disabled:opacity-50">
                    <Send size={16} />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TerminalBot;