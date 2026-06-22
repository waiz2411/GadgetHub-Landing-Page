import React from 'react';
import { Laptop, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ) 
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      ) 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ) 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ) 
    },
  ];

  return (
    <footer className="bg-stone-950 text-white max-w-[1600px] mx-auto w-full rounded-t-[40px] mt-12">
      <div className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left">
        {/* Brand details */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white">
              <Laptop className="w-5 h-5" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter">
              GadgetHub<span className="text-brand-gold">.</span>
            </span>
          </div>
          <p className="font-sans font-medium text-xs text-stone-400 leading-relaxed max-w-sm">
            Premium electronics storefront delivering top-tier mechanical keyboards, audiophile headphones, smartwatches, and custom gaming accessories. Engineered to elevate your workspace and play space.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:border-brand-red transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold">Quick Navigation</h4>
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs text-stone-400 hover:text-brand-red transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact/Support Info */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold">Business Hours</h4>
          <ul className="space-y-2 text-xs font-sans text-stone-400">
            <li>Monday - Friday: 9 AM - 6 PM</li>
            <li>Saturday: 10 AM - 4 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-stone-900 py-6 text-center text-[10px] font-sans font-semibold text-stone-500 uppercase tracking-widest px-4 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
        <span>© {new Date().getFullYear()} GadgetHub Limited. All Rights Reserved.</span>
        <span className="flex items-center gap-1">
          Crafted with <Heart className="w-3.5 h-3.5 text-[#ED1C27] fill-current" /> in Pakistan
        </span>
      </div>
    </footer>
  );
}
