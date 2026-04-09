import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (!supabase) {
      setStatus('error');
      setMessage("Waitlist is currently unavailable (Supabase not configured).");
      return;
    }

    setStatus('loading');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, created_at: new Date().toISOString() }]);

      if (error) throw error;

      setStatus('success');
      setMessage("You're on the list! We'll be in touch soon.");
      setEmail('');
    } catch (err: any) {
      console.error('Waitlist error:', err);
      setStatus('error');
      setMessage(err.message || 'Something went wrong. Please try again.');
    }
  };


  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <motion.video
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          autoPlay
          muted
          loop
          playsInline
          className="w-full pb-15 pt-15 h-full object-cover object-center"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </motion.video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#f0ebe0]/5 via-[#0a0a0a]/40 to-brand-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-[860px]">
        <motion.div
          initial={{ opacity: 1, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(80, 41, 18, 0.35)] bg-[hsla(30, 100%, 0%, 0.99)] mb-9"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-[pulse_2s_infinite]" />
          <span className="text-[11px] font-medium tracking-[0.09em] uppercase text-[#0E0E0E]">
            Platform Launching Soon
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-syne text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.0] tracking-[-3px] text-[#f5f0e8] mb-7 drop-shadow-[0_2px_48px_rgba(0,0,0,0.4)]"
        >
          Turn Content Into Reach
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-11 space-y-4"
        >
          <div className="space-y-2">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Distribution is broken. Tukka fixes it.
            </p>
            <p className="text-sm md:text-base text-white/50 max-w-[580px] mx-auto leading-relaxed">
              Tukka turns your content into an organic distribution network — powered by real people, real pages, and real audiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative max-w-[460px] mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            id="waitlist"
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3.5 font-dm-sans text-sm text-[#f5f0e8] outline-none backdrop-blur-md transition-all focus:border-brand-accent/60 focus:bg-white/15 placeholder:text-white/30 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="bg-brand-accent text-[#f5f0e8] border-none rounded-full px-7 py-3.5 font-dm-sans text-sm font-medium cursor-pointer whitespace-nowrap transition-all duration-200 hover:bg-brand-accent-hover hover:-translate-y-px active:translate-y-0 tracking-wide disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Early Access'}
            </button>
          </form>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center justify-center gap-2 text-[#f5c8a8] text-sm"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{message}</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center justify-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{message}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center mt-12 mx-auto max-w-[420px] rounded-2xl overflow-hidden backdrop-blur-md bg-black/20 border border-white/12"
        >
          <div className="flex-1 p-4 md:p-5 text-center border-r border-white/10">
            <span className="block font-syne text-xl font-bold text-[#f5f0e8]">12k+</span>
            <span className="text-[11px] text-white/40 tracking-wider uppercase">Creators</span>
          </div>
          <div className="flex-1 p-4 md:p-5 text-center border-r border-white/10">
            <span className="block font-syne text-xl font-bold text-[#f5f0e8]">50M</span>
            <span className="text-[11px] text-white/40 tracking-wider uppercase">Reach</span>
          </div>
          <div className="flex-1 p-4 md:p-5 text-center">
            <span className="block font-syne text-xl font-bold text-[#f5f0e8]">24/7</span>
            <span className="text-[11px] text-white/40 tracking-wider uppercase">AI Drive</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-white/30">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-accent/70 to-transparent animate-[line-pulse_2s_ease-in-out_infinite]" />
      </motion.div>
    </section>
  );
};

export default Hero;
