import { motion } from 'framer-motion';
import { Download, Rocket, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-8 group"
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-2xl">
            <img 
              src="/profile.jpg" 
              alt={portfolioData.name} 
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
            />
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute -inset-4 border border-dashed border-purple-500/30 rounded-full pointer-events-none"
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-purple-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-2xl"
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
          Available for New Projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 leading-tight"
        >
          {portfolioData.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-2xl font-medium text-zinc-300 max-w-2xl mb-8 leading-relaxed"
        >
          {portfolioData.tagline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-zinc-400 max-w-xl mb-12 text-base md:text-lg leading-relaxed"
        >
          {portfolioData.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#projects"
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-purple-500/20"
          >
            <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View Projects
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            download="Sahil_Kumar_Resume.pdf"
            className="group px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white font-bold flex items-center gap-2 transition-all hover:bg-zinc-800 hover:scale-105"
          >
            <Download className="w-5 h-5 text-purple-400" />
            Download Resume
          </a>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Scroll Down</span>
            <div className="w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
