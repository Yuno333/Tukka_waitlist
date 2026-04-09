import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { Loader2, AlertCircle } from 'lucide-react';
import SuccessModal from './SuccessModal';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [role] = useState<'Creator' | 'Spreader'>('Creator');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [referredBy, setReferredBy] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) setReferredBy(ref);
  }, []);

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
      const { data, error } = await supabase
        .from('waitlist')
        .insert([{ 
          email, 
          role,
          referred_by: referredBy,
          created_at: new Date().toISOString() 
        }])
        .select('referral_code')
        .single();

      if (error) throw error;
      
      setSubmittedEmail(email);
      if (data?.referral_code) {
        setReferralCode(data.referral_code);
      }
      setStatus('success');
      setShowModal(true);
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
      <div className="relative z-10 max-w-[1400px] w-full">
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
          className="font-syne text-4xl md:text-6xl lg:text-8xl font-extrabold leading-[1.1] tracking-[-1px] md:tracking-[-3px] mb-8 drop-shadow-[0_2px_48px_rgba(0,0,0,0.4)] text-center px-4 text-[#f5f0e8]"
        >
          <span className="bg-gradient-to-br from-brand-accent via-[#f5f0e8] to-[#f5f0e8] bg-clip-text text-transparent">Turn</span> Content Into <span className="bg-gradient-to-bl from-[#f5f0e8] via-[#f5f0e8] to-brand-accent bg-clip-text text-transparent">Reach</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-12 space-y-6"
        >
          <div className="space-y-5 px-2">
            <p className="text-lg md:text-2xl lg:text-3xl font-bold text-[#f5f0e8] tracking-tight text-center leading-tight">
              Distribution is <s className="decoration-brand-accent/60 opacity-60">broken</s>. <br className="sm:hidden" />
              Tukka <span className="text-brand-accent">fixes it.</span>
            </p>
            <p className="text-[13px] md:text-base text-white/70 max-w-[1000px] mx-auto leading-relaxed text-center px-4 font-medium balance">
              Tukka turns your content into an organic distribution network — powered by real people, real pages, and real audiences.
            </p>
          </div>
        </motion.div>

        {/* Role Selector hidden per user request, defaulting to Creator */}
        {/*
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex justify-center mb-10"
        >
            <div className="relative p-1 bg-white/5 border border-white/10 rounded-2xl flex items-center backdrop-blur-md">
                <motion.div
                    className="absolute h-[calc(100%-8px)] rounded-xl bg-brand-accent shadow-[0_0_20px_rgba(196,98,42,0.3)]"
                    initial={false}
                    animate={{
                        x: role === 'Creator' ? 0 : '100%',
                        width: '50%'
                    }}
                    transition={{ type: "spring", damping: 28, stiffness: 260 }}
                />
                
                <button
                    type="button"
                    onClick={() => setRole('Creator')}
                    className={`relative flex-1 px-8 py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 z-10 whitespace-nowrap outline-none ${role === 'Creator' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
                >
                    Creator
                </button>
                <button
                    type="button"
                    onClick={() => setRole('Spreader')}
                    className={`relative flex-1 px-8 py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 z-10 whitespace-nowrap outline-none ${role === 'Spreader' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
                >
                    Spreader
                </button>
            </div>
        </motion.div>
        */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative max-w-[460px] mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            id="waitlist"
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1 relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-white/[0.12] border-2 border-[#000] rounded-full px-6 py-3.5 font-dm-sans text-sm text-[#f5f0e8] outline-none backdrop-blur-md transition-all focus:bg-white/15 placeholder:text-white/30 disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="bg-brand-accent text-[#f5f0e8] border-none rounded-full px-6 py-2.5 font-dm-sans text-[13px] font-bold cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-brand-accent-hover hover:-translate-y-0.5 active:translate-y-0 tracking-widest disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(196,98,42,0.15)] hover:shadow-[0_0_30px_rgba(196,98,42,0.25)]"
            >
              {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'EARLY ACCESS'}
            </button>
          </form>

          <AnimatePresence>
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 flex items-center justify-center gap-2 text-red-500 font-medium text-sm bg-red-500/10 py-2 px-4 rounded-xl border border-red-500/20"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{message}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Success Modal */}
        <SuccessModal 
          isOpen={showModal} 
          onClose={() => setShowModal(false)} 
          email={submittedEmail}
          referralCode={referralCode}
          role={role}
        />

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
