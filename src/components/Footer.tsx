import React from 'react';
import { Mail, Shield, FileText } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-brand-border-dark px-6 py-7 md:px-12 flex flex-wrap items-center justify-between gap-4">
      <a href="#" className="flex items-center gap-2 no-underline">
        <div className="h-11 w-11 bg-[#0E0E0E] rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
          <img src={logo} alt="Tukka Logo" className="h-11 object-contain" />
        </div>
        <span className="font-syne font-bold text-[15px] text-[#8B5E3C]">Tukka</span>
      </a>

      <div className="flex gap-5">
        <a href="https://www.notion.so/Tukka-Privacy-Policy-33d264aa8e488092a95fc9af63cb70d6?source=copy_link" className="text-[12px] text-brand-muted no-underline flex items-center gap-1.5 transition-colors hover:text-brand-accent">
          <Shield size={12} />
          <span>Privacy Policy</span>
        </a>
        <a href="https://www.notion.so/Tukka-Terms-of-Service-33d264aa8e4880578616d2c71b638f11?source=copy_link" className="text-[12px] text-brand-muted no-underline flex items-center gap-1.5 transition-colors hover:text-brand-accent">
          <FileText size={12} />
          <span>Terms of Service</span>
        </a>
        <a href="mailto:[trytukka@gmail.com]" className="text-[12px] text-brand-muted no-underline flex items-center gap-1.5 transition-colors hover:text-brand-accent">
          <Mail size={12} />
          <span>Contact</span>
        </a>
      </div>

      <div className="flex flex-col items-end gap-1">
        <p className="text-[12px] text-brand-text/30">
          &copy; {year} Tukka. All rights reserved.
        </p>
        <p className="text-[10px] text-brand-text/20 font-medium">
          Built by <a href="mailto:rasheedsanni3@gmail.com" className="hover:text-brand-accent transition-colors">rasheedsanni3@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
