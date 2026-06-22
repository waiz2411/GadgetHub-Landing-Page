import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Laptop } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 h-16 md:h-20 bg-white/70 backdrop-blur-2xl border-b border-stone-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full transition-all duration-300">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white shadow-md shadow-brand-red/10 group-hover:bg-stone-900 transition-all duration-300">
            <Laptop className="w-5 h-5" />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter text-stone-900 group-hover:text-brand-red transition-all duration-300">
            GadgetHub<span className="text-brand-gold">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans font-medium text-sm text-stone-600 hover:text-brand-red transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+923360186282"
            className="flex items-center gap-2 px-4 py-2 bg-white text-stone-900 border border-stone-200 rounded-2xl font-sans font-bold uppercase text-[10px] tracking-wider hover:bg-stone-50 transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-stone-500" />
            Call Now
          </a>
          <a
            href="https://wa.me/923360186282"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#ED1C27] text-white rounded-2xl font-sans font-bold uppercase text-[10px] tracking-widest shadow-primary-btn hover:bg-stone-900 transition-all duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-600 hover:text-stone-900 p-2 rounded-xl hover:bg-stone-100 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-md md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-sidebar border-l border-stone-100 p-6 flex flex-col justify-between md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-stone-100">
                  <span className="font-display font-black text-xl tracking-tighter text-stone-900">
                    GadgetHub<span className="text-brand-gold">.</span>
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-stone-400 hover:text-stone-600 p-1.5 rounded-lg hover:bg-stone-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-sans font-bold text-base text-stone-950 hover:text-brand-red transition-colors py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-stone-100">
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white text-stone-900 border border-stone-200 rounded-2xl font-sans font-bold uppercase text-xs tracking-wider hover:bg-stone-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-stone-500" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-red text-white rounded-2xl font-sans font-bold uppercase text-xs tracking-widest shadow-primary-btn hover:bg-stone-900 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
