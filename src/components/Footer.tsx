import React from 'react';
import { Mail, Shield, FileText } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-brand-border-dark px-6 py-7 md:px-12 flex flex-wrap items-center justify-between gap-4  bg-[#C8A27A]/85">
      <a href="#" className="flex items-center gap-2 no-underline">
        <div className="h-11 w-11 bg-[#0E0E0E] rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
          <img src={logo} alt="Tukka Logo" className="h-11 w- object-contain  " />
        </div>
        <span className="font-syne font-bold text-[15px] text-[#8B5E3C]">Tukka</span>
      </a>

      <div className="flex gap-5">
        <a href="#" className="text-[12px] text-brand-muted no-underline flex items-center gap-1.5 transition-colors hover:text-brand-accent">
          <Shield size={12} />
          <span>Privacy Policy</span>
        </a>
        <a href="#" className="text-[12px] text-brand-muted no-underline flex items-center gap-1.5 transition-colors hover:text-brand-accent">
          <FileText size={12} />
          <span>Terms of Service</span>
        </a>
        <a href="mailto:hello@tukka.ai" className="text-[12px] text-brand-muted no-underline flex items-center gap-1.5 transition-colors hover:text-brand-accent">
          <Mail size={12} />
          <span>Contact</span>
        </a>
      </div>

      <p className="text-[12px] text-brand-text/30">
        &copy; {year} Tukka. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
