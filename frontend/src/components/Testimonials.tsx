import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Quote, User, Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/20 rotate-12 group hover:rotate-0 transition-transform">
            <Quote className="text-white w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            Client Reviews
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(portfolioData as any).reviews.map((review: any, index: number) => (
            <motion.div
              key={review.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm relative group hover:border-blue-500/50 transition-all hover:scale-[1.02] shadow-2xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-500/10 -z-10" />
                <p className="text-zinc-300 text-lg leading-relaxed font-medium italic">
                  "{review.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-zinc-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black tracking-tight uppercase text-sm">{review.client}</h4>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
