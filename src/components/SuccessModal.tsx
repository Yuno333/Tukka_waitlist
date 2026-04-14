import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Copy, 
  Check, 
  Twitter, 
  Send, 
  MessageCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email?: string;
  referralCode?: string;
  role?: 'Project' | 'Creator';
}

const SuccessModal: React.FC<SuccessModalProps> = ({ 
  isOpen, 
  onClose, 
  referralCode
}) => {
  const [copied, setCopied] = useState(false);
  const displayCode = referralCode || 'EARLY-ACCESS';
  const referralLink = `https://trytukka.fun/?ref=${displayCode}`;

  const shareText = "I just joined the @tryTukka movement! Turning content into reach and unlocking natural distribution. 🚀";

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleEscape);
        clearInterval(interval);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[500px] bg-gradient-to-b from-brand-black/95 via-brand-black/80 to-brand-bg/10 border border-white/20 rounded-[2.5rem] p-8 md:p-12 text-center overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8)] z-10 backdrop-blur-3xl pointer-events-auto"
          >
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-accent/10 blur-[80px] rounded-full pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all group z-30 touch-manipulation"
              aria-label="Close modal"
            >
              <X size={24} className="transition-transform group-hover:rotate-90 group-active:scale-90" />
            </button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-brand-accent text-[11px] font-bold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                Access Granted
              </div>

              <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-[#f5f0e8] leading-none tracking-tight mb-4">
                You're In.
              </h2>
              
              <p className="text-white/50 text-base md:text-lg mb-10 leading-relaxed max-w-[320px] mx-auto">
                Authentication successful. Welcome to the future of distribution.
              </p>
            </motion.div>

            {/* Referral Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 space-y-6 mb-10"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between px-2 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                  <span>Unique Invite Link</span>
                  {copied && <motion.span initial={{ opacity: 0, x: 5 }} animate={{ opacity: 1, x: 0 }} className="text-brand-accent">Copied to clipboard</motion.span>}
                </div>
                <div 
                  onClick={handleCopy}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 transition-all hover:border-brand-accent/50 hover:bg-white/[0.07] cursor-pointer group"
                >
                  <div className="flex-1 text-left truncate text-white/70 text-sm font-mono tracking-tight">
                    {referralLink}
                  </div>
                  <div className="flex items-center gap-2 text-brand-accent transition-transform group-active:scale-90">
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </div>
                </div>
              </div>

              {/* Reward Teaser */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <span className="text-sm font-bold">+1</span>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-extrabold text-[#f5f0e8] uppercase tracking-[0.1em]">Referral Reward</h4>
                    <p className="text-[11px] text-white/50 mt-1 leading-tight">Invite 3 friends to skip 500 spots and unlock priority beta access.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 py-2 px-4">
                <div className="h-px flex-1 bg-white/5" />
                <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">Broadcast Access</span>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(referralLink)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-brand-accent hover:border-brand-accent transition-all hover:-translate-y-1 group"
                >
                  <Twitter size={20} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                </a>
                {/* 
                 <a
                   href={`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(shareText)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-[#0088cc] hover:border-[#0088cc] transition-all hover:-translate-y-1 group"
                 >
                   <Send size={20} className="group-hover:scale-110 transition-transform" />
                 </a>
                 <a
                   href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + referralLink)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all hover:-translate-y-1 group"
                 >
                   <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                 </a>
                 */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative z-10 bg-white/5 py-3 px-6 rounded-2xl inline-block"
            >
              <div className="text-[11px] text-white/40 tracking-wide">
                Current Rank: <span className="text-brand-accent font-bold">#1,402</span> • <span className="text-white/60">Top 2% of Early Adopters</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

  );
};

export default SuccessModal;
