import React from 'react';
import { Play, Heart, MessageCircle, Share2 } from 'lucide-react';
import StarBackground from './StarBackground';

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="relative overflow-hidden bg-brand-bg py-24 px-6 md:py-32">
      <StarBackground density={12} color="var(--color-brand-accent)" />
      <div className="max-w-[1060px] mx-auto">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 block">
          The Solution
        </span>
        <h2 className="font-syne text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text mb-6 max-w-[580px]">
          Tukka fixes <span className="bg-gradient-to-r from-brand-accent via-brand-text to-brand-text bg-clip-text text-transparent">distribution</span>
        </h2>
        <p className="text-base md:text-lg text-brand-muted mb-12 max-w-[640px] leading-relaxed">
          There’s a massive gap between creating content and distributing it. Algorithms limit reach and ads are ignored. Tukka delivers natural distribution that blends in.
        </p>

        <div className="relative rounded-[20px] overflow-hidden bg-brand-black border border-brand-border-dark shadow-[0_24px_64px_rgba(0,0,0,0.14),0_4px_16px_rgba(0,0,0,0.08)] aspect-video">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#111] via-[#1c1610] to-[#111]">
            {/* Background Animations */}
            <div className="absolute inset-0 overflow-hidden">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent animate-[walk-through_4s_ease-in-out_infinite]"
                  style={{ top: `${25 * i}%`, animationDelay: `${(i - 1) * 0.9}s`, opacity: 1 - (i * 0.2) }}
                />
              ))}

              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-brand-accent animate-[float_6s_ease-in-out_infinite]"
                  style={{
                    width: `${(i % 2 === 0 ? 4 : 6)}px`,
                    height: `${(i % 2 === 0 ? 4 : 6)}px`,
                    top: `${[22, 62, 38, 72][i - 1]}%`,
                    left: `${[18, 28, 72, 78][i - 1]}%`,
                    animationDelay: `${(i - 1) * 0.5}s`,
                    opacity: 0.7 - (i * 0.1)
                  }}
                />
              ))}
            </div>

            <button className="relative z-10 w-18 h-18 rounded-full bg-brand-accent flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-brand-accent-hover shadow-[0_0_0_12px_rgba(196,98,42,0.12),0_0_0_24px_rgba(196,98,42,0.06)] group">
              <Play className="w-6 h-6 fill-[#f5f0e8] text-[#f5f0e8] ml-1 group-hover:scale-110 transition-transform" />
            </button>
            <span className="relative z-10 text-xs text-white/35 tracking-wide">Watch the TUKKA engine in action</span>
          </div>

          {/* Engagement Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-3.5 md:p-6 bg-gradient-to-t from-black/85 to-transparent flex items-center gap-5 z-20">
            <div className="flex items-center gap-1.5 text-[13px] text-white/45 cursor-pointer hover:text-[#e8a87c] transition-colors">
              <Heart className="w-3.5 h-3.5" />
              <span>2.4k</span>
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-white/45 cursor-pointer hover:text-[#e8a87c] transition-colors">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>184</span>
            </div>
            <div className="flex-1" />
            <button className="flex items-center gap-1.5 text-xs font-medium text-[#f5f0e8] bg-brand-accent border-none rounded-full px-4 py-2 cursor-pointer hover:bg-brand-accent-hover transition-colors">
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
