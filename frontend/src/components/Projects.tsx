import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/20 rotate-12 group hover:rotate-0 transition-transform">
            <Layers className="text-white w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 transition-all hover:scale-[1.02] shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <a
                    href={project.github}
                    className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-md flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveDemo}
                    className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-purple-400 group-hover:border-purple-400/30 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                  <a
                    href={project.liveDemo}
                    className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    Explore Project
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChevronRight = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
