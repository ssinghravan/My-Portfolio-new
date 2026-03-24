import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, ArrowRight, ExternalLink } from 'lucide-react';

export const Blog = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-zinc-950 border-y border-zinc-900">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/20 rotate-12 group hover:rotate-0 transition-transform">
            <BookOpen className="text-white w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            Technical Blog
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 transition-all hover:scale-[1.05] group shadow-2xl relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>
              
              <div className="mb-6 flex items-center justify-between">
                <div className="px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-purple-400 group-hover:border-purple-400/30 transition-all">
                  Technology
                </div>
                <BookOpen size={20} className="text-zinc-600 group-hover:text-purple-400 transition-colors" />
              </div>

              <h3 className="text-xl font-black text-white group-hover:text-purple-400 transition-colors mb-4 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                {blog.preview}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                <a
                  href={blog.url}
                  className="text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Read Article
                  <ArrowRight size={16} className="text-purple-500" />
                </a>
                <ExternalLink size={16} className="text-zinc-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
