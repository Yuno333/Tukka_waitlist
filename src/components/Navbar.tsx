import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState < string | null > (null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Demo', href: '#demo' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center h-20 px-6 md:px-12 bg-white/70 backdrop-blur-2xl border-b border-brand-border/10">
        {/* Logo Column */}
        <div className="flex-1 flex justify-start">
          <a href="#" className="flex items-center gap-2.5 no-underline group">
            <div className="h-11 w-11 bg-[#0E0E0E] rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <img src={logo} alt="Tukka Logo" className="h-11 w-11 object-contain  " />
            </div>
            <span className="font-syne font-bold text-[15px]  text-[#8B5E3C]">Tukka</span>
          </a>
        </div>

        {/* Centered Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[13px] font-medium text-brand-muted no-underline transition-colors hover:text-brand-text whitespace-nowrap"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.name}
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Button & Mobile Toggle Column */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <a
            href="#waitlist"
            className="hidden sm:inline-block text-[12px] md:text-[13px] font-medium text-brand-bg bg-brand-accent no-underline px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all duration-300 hover:bg-brand-accent-hover hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(196,98,42,0.25)] active:translate-y-0"
          >
            Join Waitlist
          </a>

          <button
            className="md:hidden p-2 text-brand-text hover:bg-brand-accent/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[150] md:hidden bg-white/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-syne font-bold text-brand-text border-b border-brand-border/10 pb-4"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 text-center text-base font-bold text-brand-bg bg-brand-accent py-4 rounded-2xl shadow-lg shadow-brand-accent/20"
            >
              Start Early Access
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
