import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';

export const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/20 rotate-12 group hover:rotate-0 transition-transform">
            <Award className="text-white w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all hover:scale-[1.05] group shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 scale-[2] pointer-events-none group-hover:scale-[3] transition-transform">
                <Award size={100} />
              </div>

              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Building2 size={18} className="text-blue-500" />
                    <span className="text-sm font-bold uppercase tracking-widest">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Calendar size={18} className="text-blue-500" />
                    <span className="text-sm font-bold uppercase tracking-widest">{cert.date}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={cert.url}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-bold text-xs uppercase tracking-[0.2em] group-hover:bg-blue-600 group-hover:border-blue-600 transition-all"
                  >
                    View Certificate
                    <ExternalLink size={14} />
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
