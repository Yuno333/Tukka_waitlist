import React from 'react';
import { X, Camera, Video, Link } from 'lucide-react';
import StarBackground from './StarBackground';

const CTA: React.FC = () => {
    const socialIcons = [
        { icon: <X />, label: "Twitter" },
        { icon: <Camera />, label: "Instagram" },
        { icon: <Video />, label: "YouTube" },
        { icon: <Link />, label: "LinkedIn" }

      ];

  return (
    <section className="relative overflow-hidden bg-brand-bg px-6 pb-24 lg:pb-32">
      <StarBackground density={8} color="var(--color-brand-accent)" />
      <div className="max-w-[1060px] mx-auto bg-brand-text rounded-3xl p-15 md:p-20 flex flex-wrap items-center justify-between gap-10 relative overflow-hidden group">
        
        {/* Decorative Background Element */}
        <div className="absolute -top-15 -right-15 w-60 h-60 rounded-full bg-radial-[circle,rgba(196,98,42,0.2),transparent_70%] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />

        <div>
          <h2 className="font-syne text-3xl md:text-5xl font-extrabold tracking-tight text-[#f5f0e8] mb-4">
            The future of <span className="bg-gradient-to-r from-brand-accent via-[#f5f0e8] to-[#f5f0e8] bg-clip-text text-transparent">distribution.</span>
          </h2>
          <p className="text-base text-[#f5f0e8]/50">
            Stop fighting algorithms. Join the waitlist and secure your spot in the network.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-5">
            <div className="flex gap-2.5">
                {socialIcons.map((social, index) => (
                    <a 
                        key={index}
                        href="#" 
                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f5f0e8] transition-all hover:bg-brand-accent/20 hover:border-brand-accent/40 hover:-translate-y-0.5"
                    >
                        {React.cloneElement(social.icon as React.ReactElement<any>, { size: 18, strokeWidth: 2 })}
                    </a>
                ))}
            </div>
            {/* Minimal legal or subtext if needed */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
