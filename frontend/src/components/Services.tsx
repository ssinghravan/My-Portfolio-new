import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import * as LucideIcons from 'lucide-react';

const IconRenderer = ({ iconName, className }: { iconName: string, className?: string }) => {
  const Icon = (LucideIcons as any)[iconName] || LucideIcons.Code2;
  return <Icon className={className} />;
};

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/20 rotate-12 group hover:rotate-0 transition-transform">
            <LucideIcons.Briefcase className="text-white w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            My Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(portfolioData as any).services.map((service: any, index: number) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 transition-all hover:scale-[1.02] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <IconRenderer iconName={service.icon} className="w-32 h-32" />
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <IconRenderer iconName={service.icon} className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-purple-400 transition-colors">
                {service.name}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium italic">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors text-xs font-black tracking-widest uppercase">
                Explore More <LucideIcons.ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
