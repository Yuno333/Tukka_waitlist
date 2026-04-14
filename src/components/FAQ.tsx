import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StarBackground from './StarBackground';

const faqs = [
  {
    question: "What is Tukka?",
    answer: "Tukka is a content distribution platform that helps projects, public figures, and crypto projects amplify their reach through a network of real users (“Creators”) sharing content across social media. Instead of relying on ads, Tukka turns everyday users into a distributed marketing engine."
  },
  {
    question: "How does Tukka distribution work?",
    answer: (
      <div className="space-y-4">
        <p>Tukka connects your content to a network of Creators who share it within their niche and audience.</p>
        <div className="space-y-2">
          <p className="font-bold text-brand-text">Projects can:</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <span className="text-brand-accent">🔸</span> Choose their target audience (location, niche, interests)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-accent">🔸</span> Launch campaigns instantly
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-accent">🔸</span> Get content distributed across multiple platforms
            </li>
          </ul>
        </div>
        <p>Creators don’t just repost — they <span className="text-brand-accent font-bold">add their own opinions</span>, making the content feel native and trusted.</p>
      </div>
    )
  },
  {
    question: "How do Creators earn on Tukka?",
    answer: (
      <div className="space-y-4">
        <p>Creators earn through a <span className="text-brand-accent font-bold">CPM-based model (pay per 100 views)</span>.</p>
        <div className="space-y-2">
          <p className="font-bold text-brand-text">Earnings are based on:</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <span className="text-brand-accent">🔸</span> Views generated
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-accent">🔸</span> Audience location (higher-value regions earn more)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-accent">🔸</span> Engagement quality
            </li>
          </ul>
        </div>
        <p>The more attention your content drives, the more you earn — simple.</p>
      </div>
    )
  },
  {
    question: "Do I need a large following to earn as a Creator?",
    answer: (
      <div className="space-y-4">
        <p>No — follower count doesn’t matter on Tukka.</p>
        <div className="space-y-2">
          <p className="font-bold text-brand-text">What matters is:</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <span className="text-brand-accent">🔸</span> How well your content performs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-accent">🔸</span> How your audience responds to your opinion
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-accent">🔸</span> Your ability to drive real conversations
            </li>
          </ul>
        </div>
        <p>A small, engaged audience can generate strong CPM returns.</p>
        <p className="font-bold text-brand-accent border-t border-brand-accent/20 pt-4 mt-4">
          On Tukka, distribution + attention = earnings.
        </p>
      </div>
    )
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState < number | null > (null);

  return (
    <section id="faq" className="relative overflow-hidden bg-brand-bg px-6 py-24 lg:py-32">
      <StarBackground density={10} color="var(--color-brand-accent)" />
      <div className="max-w-[700px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 block">
            Questions
          </span>
          <h2 className="font-syne text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text mb-6">
            Clear the <span className="bg-gradient-to-r from-brand-accent via-brand-text to-brand-text bg-clip-text text-transparent">Noise</span>
          </h2>
        </div>

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
                  <div className="text-sm text-brand-muted leading-[1.72] pt-3">
                    {faq.answer}
                  </div>
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
