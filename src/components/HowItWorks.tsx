import React from 'react';
import { Upload, Zap, BarChart3, Rocket } from 'lucide-react';
import StarBackground from './StarBackground';

const steps = [
  {
    icon: <Upload />,
    title: "Upload Content",
    description: "Creators submit content — videos, tweets, memes, or campaigns — directly to the Tukka engine."
  },
  {
    icon: <Zap />,
    title: "Spreaders Distribute",
    description: "Our network of Spreaders reposts and edits in their own voice: meme style, professional, or niche-specific."
  },
  {
    icon: <BarChart3 />,
    title: "Reach Multiplies",
    description: "Watch your message compound as it spreads organically across platforms that algorithms usually limit."
  },
  {
    icon: <Rocket />,
    title: "Niche Ecosystems",
    description: "Dominante specific spaces: from Crypto and Meme pages to Investment and Political communities."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-brand-bg px-6 pb-24 lg:pb-32">
      {/* Starry Background */}
      <StarBackground density={15} color="var(--color-brand-accent)" />

      <div className="max-w-[1060px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-brand-border-dark rounded-2xl overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-brand-border last:border-b-0 last:border-r-0 hover:bg-brand-accent/[0.04] transition-colors group"
            >
              <span className="text-[11px] font-medium tracking-widest text-brand-muted uppercase mb-5 block">
                Step 0{index + 1}
              </span>

              <div className="w-11 h-11 rounded-xl bg-brand-accent/[0.08] border border-brand-accent/[0.15] flex items-center justify-center mb-4.5 text-brand-accent group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(step.icon as React.ReactElement<any>, { size: 20 })}
              </div>

              <h3 className="font-syne text-base font-bold text-brand-text mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
