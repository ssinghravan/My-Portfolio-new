import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import * as LucideIcons from 'lucide-react';

const IconRenderer = ({ iconName, className }: { iconName: string, className?: string }) => {
  const Icon = (LucideIcons as any)[iconName] || LucideIcons.Code2;
  return <Icon className={className} />;
};

export const Skills = () => {
  const { frontend, backend, tools } = portfolioData.skills;

  const categories = [
    { title: 'Frontend', skills: frontend, color: 'from-purple-500/20 to-purple-600/20' },
    { title: 'Backend', skills: backend, color: 'from-blue-500/20 to-blue-600/20' },
    { title: 'Tools', skills: tools, color: 'from-green-500/20 to-green-600/20' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/20 rotate-12 group hover:rotate-0 transition-transform">
            <LucideIcons.Wrench className="text-white w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${category.color} border border-zinc-800 backdrop-blur-md relative group hover:border-zinc-700 transition-all shadow-2xl overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 scale-[3] pointer-events-none group-hover:scale-[4] transition-transform">
                <LucideIcons.Cpu size={120} />
              </div>

              <h3 className="text-2xl font-black text-white mb-8 border-b border-zinc-700 pb-4 flex items-center justify-between">
                {category.title}
                <span className="text-xs uppercase tracking-widest text-zinc-500">Category</span>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800 hover:border-zinc-600 transition-all group/item hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover/item:text-white transition-colors">
                      <IconRenderer iconName={skill.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest group-hover/item:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
