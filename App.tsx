import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ChevronDown, Code, Layout, Layers, Terminal as TerminalIcon, X, ExternalLink, Server, Palette } from 'lucide-react';
import NetworkCanvas from './components/NetworkCanvas';
import DevOpsPipeline from './components/DevOpsPipeline';
import ProjectCard from './components/ProjectCard';
import TerminalBot from './components/TerminalBot';
import { Project } from './types';

// Bento Grid Project Data
const projects: Project[] = [
  {
    id: 'nodebox',
    title: 'NodeBox',
    tagline: 'Python-Native Workflow Engine',
    description: 'Design and deploy workflows with Python-native nodes. Run automations on your machine without API costs or cloud dependencies. A local-first approach to visual programming.',
    role: 'Maintainer',
    techStack: ['Python', 'React', 'Node.js', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?q=80&w=2071&auto=format&fit=crop',
    githubUrl: '#',
    demoUrl: 'https://nodeboxlab.web.app',
    featured: true,
    category: 'OpenSource',
    color: '#3b82f6',
    gridClass: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'curious',
    title: 'The Curious Outlook',
    tagline: 'Philosophy & Reflection',
    description: 'Have you ever found yourself awake at night, staring at the ceiling, lost in thoughts about life, purpose, or the vast unknown? At The Curious Outlook, we celebrate this space for reflection—when the world grows silent, and your curiosity takes center stage. A blog built on Next.js.',
    role: 'Creator',
    techStack: ['Next.js', 'Tailwind', 'MDX', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?q=80&w=2071&auto=format&fit=crop',
    demoUrl: 'https://thecuriousoutlook.vercel.app',
    featured: false,
    category: 'Design',
    color: '#a855f7',
    gridClass: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 'busmitra',
    title: 'Bus Mitra',
    tagline: 'Realtime Transit Tracking',
    description: 'A realtime bus tracking service android application built for Smart India Hackathon 2024. Features live telemetry and route optimization.',
    role: 'Android Dev',
    techStack: ['Android', 'Kotlin', 'Firebase', 'Google Maps API'],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop',
    githubUrl: '#',
    featured: true,
    category: 'Mobile',
    color: '#f59e0b',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'realeyes',
    title: 'RealEyes',
    tagline: 'AI Deepfake Detection',
    description: 'A smart AI-based deepfake detection and analysis tool that uses advanced computer vision models to verify media authenticity.',
    role: 'AI Engineer',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'FastAPI'],
    imageUrl: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2000&auto=format&fit=crop',
    githubUrl: '#',
    featured: true,
    category: 'AI',
    color: '#ef4444',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'stashly',
    title: 'Stashly',
    tagline: 'Minimalist Link Manager',
    description: 'Stashly is a minimalist desktop application built with Python - PyQt6 that lets you save, organize, and manage all kinds of web links. Add tags, categories, and notes to create your own personalized stash.',
    role: 'Developer',
    techStack: ['Python', 'PyQt6', 'SQLite'],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
    githubUrl: '#',
    featured: false,
    category: 'OpenSource',
    color: '#10b981',
    gridClass: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'birsa',
    title: 'Birsa-Setu',
    tagline: 'SIH 2025 Web App',
    description: 'Another web application built for Smart India Hackathon 2025. Bridging the digital divide with accessible resource management tools.',
    role: 'Full Stack',
    techStack: ['React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
    githubUrl: '#',
    demoUrl: 'https://fra-tribal-implementation.onrender.com/',
    featured: true,
    category: 'FullStack',
    color: '#ec4899',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'taskops',
    title: 'TaskOPS',
    tagline: 'CLI Task Manager',
    description: 'taskOPS is a fast, minimalist, and distraction-free command-line task manager. Built for developers who live in the terminal.',
    role: 'Developer',
    techStack: ['Go', 'C++', 'Shell'],
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2074&auto=format&fit=crop',
    githubUrl: '#',
    featured: false,
    category: 'DevOps',
    color: '#64748b',
    gridClass: 'md:col-span-1 md:row-span-1'
  }
];

// Technical Skills Data
const skillCategories = [
  {
    title: "DevOps & Cloud",
    icon: Server,
    color: "text-indigo-400",
    skills: ["Docker", "Kubernetes", "AWS (EC2, S3, Lambda)", "Terraform", "GitHub Actions", "Linux (Arch/Ubuntu)", "Nginx", "Prometheus", "Grafana"]
  },
  {
    title: "Full Stack Web",
    icon: Layers,
    color: "text-purple-400",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "FastAPI", "Flask", "TailwindCSS", "Framer Motion", "Redux Toolkit"]
  },
  {
    title: "Languages & Core",
    icon: Code,
    color: "text-green-400",
    skills: ["Python", "JavaScript/ES6+", "Go", "C++", "Java", "SQL", "Bash/Shell Scripting"]
  },
  {
    title: "Tools & Creative",
    icon: Palette,
    color: "text-pink-400",
    skills: ["Git & GitHub", "Postman", "Figma", "MongoDB", "Redis", "Vercel", "Three.js", "Blender (Basic)"]
  }
];

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-indigo-500 selection:text-white font-sans">
      {/* Navigation */}
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
        >
          {/* LOGO */}
          <motion.div
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer flex items-center gap-2 group"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >

            {/* Signature SS */}
            <motion.span
              className="font-mansalva text-5xl text-red-400 group-hover:text-red-300 transition-all"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              SS
            </motion.span>

            {/* .com */}
            <motion.span
              className="font-mono text-lg tracking-tight text-gray-300 group-hover:text-red-400 transition-all"
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1, x: 3 }}
            >
              .com
            </motion.span>
          </motion.div>

          {/* NAV LINKS */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative hover:text-white transition-colors"
              >
                {item}

                {/* Hover underline beam */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </motion.button>
            ))}
          </div>

          {/* RESUME BUTTON */}
          <motion.a
            href="/Resume.pdf"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 18px rgba(239, 68, 68, 0.7)", // red glow
            }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-white text-black text-sm font-bold rounded transition-all hover:bg-red-500 hover:text-white"
          >
            Resume
          </motion.a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <NetworkCanvas />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-mono text-red-400 mb-4 text-sm md:text-base tracking-widest uppercase">
              Hello, I'm Shreyansh Shankar
            </h2>

            <h1 className="text-4xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              Building the{" "}
              <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Infrastructure
              </span>
              <br />
              of the Future.
            </h1>


            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              A hybrid <strong className="text-gray-200">DevOps Engineer</strong> & <strong className="text-gray-200">Creative Technologist</strong>.
              I bridge the gap between complex backend systems and stunning user experiences.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f3f3f3" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors w-full md:w-auto"
              >
                View Work
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: "#ef4444", // red-500
                  backgroundColor: "rgba(239,68,68,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border border-gray-700 text-white font-medium rounded hover:border-red-500 transition-colors w-full md:w-auto"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Tech Stack Marquee */}
      <div className="w-full bg-[#0a0a0a] border-y border-gray-900 py-6 overflow-hidden">
        <div className="flex justify-center gap-12 text-gray-600 font-mono text-sm uppercase tracking-widest">
          {['Python', 'Next.js', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'FastAPI', 'TypeScript'].map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.2, color: '#f75555ff' }}
              className="cursor-default transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* About Section (Red Accents) */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Not your average <br />
              <span className="text-red-500">Computer Engineer.</span>
            </h2>


            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                I don't just write code; I architect systems. While many focus on one layer of the stack, I thrive in the full vertical slice—from configuring bare-metal servers to tweaking animation bezier curves.
              </p>
              <p>
                I maintain open-source tools and build resilient platforms. My philosophy?
                Build systems that are <strong className="text-white">robust</strong> by design,
                scale <strong className="text-white">effortlessly</strong> under load, and
                feel <strong className="text-white">magical</strong> to use.
              </p>
            </div>


            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { icon: Layers, title: "Full Stack", desc: "Next.js, Flask, FastAPI" },
                { icon: TerminalIcon, title: "DevOps", desc: "Docker, K8s, CI/CD" },
                { icon: Code, title: "Open Source", desc: "Maintainer & Contributor" },
                { icon: Layout, title: "Design", desc: "UI/UX, Interactions" }
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, borderColor: 'rgba(239, 68, 68, 0.4)' }}
                  className="bg-[#111] p-4 rounded-lg border border-gray-800 transition-colors"
                >
                  <skill.icon className="text-red-400 mb-3" size={24} />
                  <h4 className="text-white font-bold mb-1">{skill.title}</h4>
                  <p className="text-sm text-gray-500">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>


          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-full bg-gradient-to-tr from-red-900/20 to-red-700/20 border border-white/10 relative flex items-center justify-center p-12 cursor-default"
            >
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite] border-2 border-dashed border-red-800 rounded-full"></div>
              <div className="text-center z-10">
                <p className="text-6xl font-bold text-white">6+</p>
                <p className="text-gray-500 mt-2 uppercase tracking-wider text-sm">Years Building</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DevOps Visual Section */}
      <section id="devops" className="py-20 bg-[#0a0a0a] border-y border-red-900/20">
        <DevOpsPipeline />
      </section>

      {/* Projects Section - Bento Grid */}
      <section id="projects" className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Selected Works</h2>
              <p className="text-gray-400 max-w-md text-lg">
                A curated collection of experiments, tools, and production systems.
              </p>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(300px,auto)]">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>

          <div className="mt-24 text-center">
            <a
              href="https://github.com/shreyansh-shankar"
              className="group inline-flex items-center gap-3 text-xl font-bold text-white hover:text-red-400 transition-colors"
            >
              View Github Profile
              <span className="p-2 rounded-full bg-white/10 group-hover:bg-red-500 group-hover:text-white transition-all">
                <Github size={20} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="w-full max-w-4xl bg-[#0e0e0e] rounded-3xl overflow-hidden relative 
        border border-red-800/40 shadow-[0_0_25px_rgba(255,0,0,0.2)] max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-black/60 backdrop-blur rounded-full text-white 
          hover:bg-red-600 hover:text-white transition-colors border border-red-700/20"
              >
                <X size={24} />
              </button>

              {/* Banner Image */}
              <div className="relative h-80 md:h-96">
                <motion.img
                  layoutId={`image-${selectedProject.id}`}
                  src={selectedProject.imageUrl}
                  className="w-full h-full object-cover"
                />

                {/* Red Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-black/40 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <motion.h2
                    layoutId={`title-${selectedProject.id}`}
                    className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]"
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <p className="text-xl text-red-400 font-mono">{selectedProject.tagline}</p>
                </div>
              </div>

              {/* Inner Content */}
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-[2fr_1fr] gap-12">

                  {/* Left Section */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <TerminalIcon size={20} className="text-red-500" />
                      Project Overview
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {selectedProject.description}
                      <br /><br />
                      Built with a strong focus on performance, scalability, and UI polish.
                      This project highlights my ability to take an idea from concept to deployment.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg 
                    hover:bg-red-700 transition-colors flex items-center gap-2 shadow-lg shadow-red-600/30"
                        >
                          Live Demo <ExternalLink size={18} />
                        </a>
                      )}

                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          className="px-6 py-3 border border-red-600/40 text-red-400 font-bold rounded-lg 
                    hover:border-red-600 hover:text-red-300 transition-colors flex items-center gap-2"
                        >
                          Source Code <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="space-y-8">

                    <div>
                      <h4 className="text-sm font-mono text-red-500 uppercase mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-[#1a1a1a] border border-red-800/40 rounded text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-mono text-red-500 uppercase mb-3">Role</h4>
                      <p className="text-white font-medium">{selectedProject.role}</p>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skills & Arsenal Section */}
      <section id="skills" className="py-32 px-6 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-gray-400">The tools I use to break and build things.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0a0a0a] border border-red-900/20 rounded-2xl p-8 
                     hover:border-red-700/40 transition-all group relative overflow-hidden 
                     shadow-lg hover:shadow-red-900/20"
              >
                {/* 🔥 Soft Red Glow Bubble */}
                <div
                  className={`absolute -right-12 -top-12 w-32 h-32 
                        bg-gradient-to-br from-transparent to-red-600/10 
                        rounded-full blur-2xl group-hover:scale-150 
                        transition-transform duration-700`}
                />

                <div className="flex items-center gap-4 mb-8 relative z-10">
                  {/* 🔥 Icon container with dynamic shade */}
                  <div
                    className={`p-4 bg-[#111] rounded-xl border border-red-900/40 
                          text-red-${300 + (idx % 4) * 100} 
                          group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill, sIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1 + (sIdx * 0.05) }}
                      className="px-4 py-2 bg-[#151515] border border-red-900/20 rounded-lg 
                           text-gray-400 text-sm font-mono 
                           hover:bg-[#1d1d1d] hover:text-red-300 
                           hover:border-red-700/30 hover:shadow-lg 
                           hover:-translate-y-0.5 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900 to-transparent" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Let's ship <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">
              something epic.
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            Open for freelance projects, startup collaborations, or just a chat about Kubernetes configurations.
          </p>

          {/* ICONS */}
          <div className="flex justify-center gap-6 mb-16">

            {/* GitHub - soft red */}
            <motion.a
              href="https://github.com/shreyansh-shankar"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-[#111] rounded-full text-gray-400 transition-colors shadow-lg
                   hover:text-red-300 hover:shadow-red-700/40"
            >
              <Github size={24} />
            </motion.a>

            {/* LinkedIn - bright red */}
            <motion.a
              href="https://linkedin.com/in/shreyanshshankar"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-[#111] rounded-full text-gray-400 transition-colors shadow-lg
                   hover:text-red-400 hover:shadow-red-600/40"
            >
              <Linkedin size={24} />
            </motion.a>

            {/* Twitter - deep red */}
            <motion.a
              href="#"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-[#111] rounded-full text-gray-400 transition-colors shadow-lg
                   hover:text-red-500 hover:shadow-red-500/40"
            >
              <Twitter size={24} />
            </motion.a>

            {/* Mail - intense red */}
            <motion.a
              href="mailto:shreyanshbussiness@gmail.com"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-[#111] rounded-full text-gray-400 transition-colors shadow-lg
                   hover:text-red-600 hover:shadow-red-400/40"
            >
              <Mail size={24} />
            </motion.a>

          </div>

          <footer className="text-sm text-gray-600 font-mono">
            &copy; {new Date().getFullYear()} Shreyansh Shankar. Crafted with React, Tailwind & Caffeine.
          </footer>
        </div>
      </section>

      {/* Interactive AI Bot */}
      <TerminalBot />
    </div>
  );
};

export default App;