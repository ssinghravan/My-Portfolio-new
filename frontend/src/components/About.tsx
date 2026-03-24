import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { User, Code, Heart, Zap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/20 rotate-12 group hover:rotate-0 transition-transform">
            <User className="text-white w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm relative group hover:border-purple-500/50 transition-all">
              <div className="absolute top-0 left-0 w-2 h-0 bg-purple-500 group-hover:h-full transition-all duration-500 rounded-l-full"></div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6 font-medium italic">
                "{portfolioData.about.description}"
              </p>
              <p className="text-zinc-400 leading-relaxed text-base">
                {portfolioData.about.story}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3 group hover:bg-zinc-800 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Code className="text-purple-400 w-5 h-5" />
                </div>
                <span className="text-zinc-300 font-semibold text-sm">Full Stack Expert</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3 group hover:bg-zinc-800 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Zap className="text-blue-400 w-5 h-5" />
                </div>
                <span className="text-zinc-300 font-semibold text-sm">High Performance</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3 group hover:bg-zinc-800 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <Heart className="text-pink-400 w-5 h-5" />
                </div>
                <span className="text-zinc-300 font-semibold text-sm">Clean Design</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3 group hover:bg-zinc-800 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <User className="text-green-400 w-5 h-5" />
                </div>
                <span className="text-zinc-300 font-semibold text-sm">User Focused</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {portfolioData.about.strengths.map((strength, index) => (
              <motion.div
                key={strength}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-blue-500/30 transition-all hover:scale-105 group shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all text-blue-400">
                  <Zap size={24} />
                </div>
                <h3 className="text-white font-black text-lg mb-2">{strength}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Delivering high-quality solutions with attention to detail and efficiency.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
