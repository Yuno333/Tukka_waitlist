import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StarBackground from './StarBackground';

const faqs = [
  {
    question: "How does TUKKA automate content distribution?",
    answer: "Our engine analyzes your content's DNA and matches it with real-time platform trends, automatically resizing, re-captioning, and scheduling posts for maximum impact."
  },
  {
    question: "Which platforms are currently supported?",
    answer: "We support TikTok, Instagram Reels, YouTube Shorts, and X (Twitter) natively. LinkedIn and Threads integration is coming in Q3."
  },
  {
    question: "Is there a limit to how many creators I can manage?",
    answer: "The waitlist access includes a starter tier, while our Pro and Agency tiers allow for unlimited creator profiles and localized distribution."
  },
  {
    question: "How do I secure early access?",
    answer: "Join our waitlist with your professional email. We are onboarding creators in cohorts based on their current reach and content frequency."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-brand-bg px-6 pb-24 lg:pb-32">
      <StarBackground density={10} color="var(--color-brand-accent)" />
      <div className="max-w-[700px] mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border-t border-brand-border-dark py-6 last:border-b last:border-brand-border-dark"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-start justify-between gap-4 text-left font-syne text-[15px] font-bold text-brand-text cursor-pointer select-none group"
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-brand-accent flex-shrink-0 leading-[1.1]"
              >
                <Plus size={22} strokeWidth={2} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-brand-muted leading-[1.72] pt-3">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
