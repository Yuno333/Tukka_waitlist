import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  AlertCircle,
  Mail,
  ArrowRight
} from 'lucide-react';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  email?: string;
  message?: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ 
  isOpen, 
  onClose, 
  email,
  message = "You're already on the list!"
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
          {/* Backdrop Blur - using a separate div for consistency with SuccessModal if needed, 
              but AnimatePresence handles the modal itself */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[440px] bg-gradient-to-b from-[#1a1a1a] to-brand-bg border border-white/10 rounded-[2.5rem] p-6 md:p-8 text-center overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)] z-10 backdrop-blur-3xl pointer-events-auto"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-red-500/5 blur-[100px] pointer-events-none" />
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all group z-30"
              aria-label="Close modal"
            >
              <X size={20} className="transition-transform group-hover:rotate-90" />
            </button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent">
                <Mail size={24} />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-5">
                 Already Registered
              </div>

              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#f5f0e8] leading-tight tracking-tight mb-4">
                You're Already <br />In the Pack.
              </h2>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
                <p className="text-white/60 text-[13px] leading-relaxed">
                  The email <span className="text-brand-accent font-medium">{email}</span> is already on the waitlist. We'll notify you soon.
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={onClose}
                  className="w-full bg-brand-accent text-[#f5f0e8] rounded-full py-3.5 font-bold text-sm tracking-widest hover:bg-brand-accent-hover transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(196,98,42,0.2)]"
                >
                  GOT IT
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-[11px] text-white/30 uppercase tracking-[0.2em]">
                  Invite friends to jump the queue
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ErrorModal;
