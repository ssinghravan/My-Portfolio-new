import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Github, Linkedin, Instagram, Send, MessageSquare, User, AtSign, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name.toLowerCase().replace(' ', '')]: value }));
    };

    // Special handler for fields since labels have spaces
    const handleFieldChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setResponseMessage(data.message || 'Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                setResponseMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus('error');
            setResponseMessage('Failed to connect to the server. Please check your internet connection.');
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-16 text-center"
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/20 rotate-12 group hover:rotate-0 transition-transform">
                        <MessageSquare className="text-white w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-5 scale-[2] pointer-events-none">
                                <Send size={120} />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                                Let's collaborate!
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                                I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="space-y-6">
                                <a
                                    href={`mailto:${portfolioData.socials.email}`}
                                    className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 hover:bg-zinc-900 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white text-purple-400 transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-zinc-500 text-xs font-bold uppercase tracking-widest">Email</span>
                                        <span className="text-white font-bold">{portfolioData.socials.email}</span>
                                    </div>
                                </a>
                                <a
                                    href={portfolioData.socials.github}
                                    className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white text-blue-400 transition-all">
                                        <Github size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-zinc-500 text-xs font-bold uppercase tracking-widest">GitHub</span>
                                        <span className="text-white font-bold">github.com/ssinghravan</span>
                                    </div>
                                </a>
                                <a
                                    href={portfolioData.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white text-blue-400 transition-all">
                                        <Linkedin size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-zinc-500 text-xs font-bold uppercase tracking-widest">LinkedIn</span>
                                        <span className="text-white font-bold">linkedin.com/in/sahil-singh</span>
                                    </div>
                                </a>
                                <a
                                    href={(portfolioData.socials as any).instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-pink-500/50 hover:bg-zinc-900 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white text-pink-400 transition-all">
                                        <Instagram size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-zinc-500 text-xs font-bold uppercase tracking-widest">Instagram</span>
                                        <span className="text-white font-bold">@07_sahil_singh</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                                    <User size={14} className="text-purple-500" />
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => handleFieldChange('name', e.target.value)}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                                    <AtSign size={14} className="text-purple-500" />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => handleFieldChange('email', e.target.value)}
                                    placeholder="hello@example.com"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                                    <MessageSquare size={14} className="text-purple-500" />
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => handleFieldChange('message', e.target.value)}
                                    placeholder="How can I help you?"
                                    rows={5}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                                />
                            </div>

                            {status === 'success' && (
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                                    <CheckCircle size={18} />
                                    {responseMessage}
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                    <AlertCircle size={18} />
                                    {responseMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black uppercase tracking-[0.3em] text-xs shadow-xl shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 group"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
