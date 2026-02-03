import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#050505] relative overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px 
        bg-gradient-to-r from-transparent via-red-900 to-transparent" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Let's ship <br />
          <span className="text-transparent bg-clip-text 
            bg-gradient-to-r from-red-400 to-white">
            something epic.
          </span>
        </h2>

        <p className="text-xl text-gray-400 mb-12">
          Open for freelance projects, startup collaborations, or just a chat
          about Kubernetes configurations.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-16">
          <SocialIcon
            href="https://github.com/shreyansh-shankar"
            hover="hover:text-red-300 hover:shadow-red-700/40"
          >
            <Github size={24} />
          </SocialIcon>

          <SocialIcon
            href="https://linkedin.com/in/shreyanshshankar"
            hover="hover:text-red-400 hover:shadow-red-600/40"
          >
            <Linkedin size={24} />
          </SocialIcon>

          <SocialIcon
            href="mailto:hello@shreyanshshankar.com"
            hover="hover:text-red-600 hover:shadow-red-400/40"
          >
            <Mail size={24} />
          </SocialIcon>
        </div>

        <footer className="text-sm text-gray-600 font-mono">
          &copy; {new Date().getFullYear()} Shreyansh Shankar. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;

/* ---------------------------------- */
/* Reusable icon wrapper               */
/* ---------------------------------- */

const SocialIcon: React.FC<{
  href: string;
  hover: string;
  children: React.ReactNode;
}> = ({ href, hover, children }) => (
  <motion.a
    href={href}
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`p-4 bg-[#111] rounded-full text-gray-400 
      transition-colors shadow-lg ${hover}`}
  >
    {children}
  </motion.a>
);
