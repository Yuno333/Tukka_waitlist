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
    description: "Dominante specific spaces: from Web3, Content Creation to Consumer Product and Political Affairs."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-brand-bg px-6 py-24 lg:py-32">
      {/* Starry Background */}
      <StarBackground density={15} color="var(--color-brand-accent)" />

      <div className="max-w-[1060px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 block">
            The Process
          </span>
          <h2 className="font-syne text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text mb-6">
            <span className="bg-gradient-to-r from-brand-accent via-brand-text to-brand-text bg-clip-text text-transparent">Tukka</span> in Action
          </h2>
          <p className="text-base text-brand-muted max-w-[600px] mx-auto leading-relaxed">
            From content submission to exponential reach — our automated distribution engine handles the complex heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-brand-border-dark rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-brand-border last:border-b-0 last:border-r-0 hover:bg-brand-accent/[0.04] transition-colors group"
            >
              <span className="text-[10px] font-extrabold tracking-widest text-brand-muted/60 uppercase mb-6 block">
                0{index + 1}
              </span>

              <div className="w-12 h-12 rounded-2xl bg-brand-accent/[0.08] border border-brand-accent/[0.15] flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-[#f5f0e8] transition-all duration-300 shadow-sm">
                {React.cloneElement(step.icon as React.ReactElement<any>, { size: 22, strokeWidth: 2 })}
              </div>

              <h3 className="font-syne text-[17px] font-bold text-brand-text mb-3 tracking-tight group-hover:text-brand-accent transition-colors">
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
