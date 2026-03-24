import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-8 shadow-2xl shadow-purple-500/20 group hover:rotate-12 transition-transform"
          >
            <Code2 className="text-white w-8 h-8" />
          </motion.div>

          <h3 className="text-3xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            {portfolioData.name}
          </h3>

          <div className="flex items-center gap-8 mb-12">
            <a
              href={portfolioData.socials.github}
              className="text-zinc-500 hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              className="text-zinc-500 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${portfolioData.socials.email}`}
              className="text-zinc-500 hover:text-pink-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-12"></div>

          <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase flex items-center gap-2">
            Built with <Heart size={14} className="text-pink-500 fill-pink-500 animate-pulse" /> using React & Tailwind v4
          </p>
          <p className="text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase mt-4">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
    </footer>
  );
};
