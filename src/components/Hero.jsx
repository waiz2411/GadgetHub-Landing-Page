import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, ShieldAlert, Headphones, Mouse, Keyboard, Watch, ArrowRight, Laptop } from 'lucide-react';

export default function Hero() {
  const trustItems = [
    { text: 'Secure Payments', icon: <ShieldCheck className="w-5 h-5 text-emerald-500" /> },
    { text: 'Fast Delivery', icon: <Truck className="w-5 h-5 text-brand-gold" /> },
    { text: 'Original Products', icon: <ShieldAlert className="w-5 h-5 text-brand-red" /> },
  ];

  const floatingGadgets = [
    {
      name: 'Pro Wireless H1',
      type: 'Headphones',
      price: '$129',
      icon: <Headphones className="w-8 h-8 text-[#ED1C27]" />,
      className: 'top-10 left-6 sm:left-12 lg:left-0',
      delay: 0,
      yRange: [0, -15, 0]
    },
    {
      name: 'Apex Gaming M3',
      type: 'Gaming Mouse',
      price: '$79',
      icon: <Mouse className="w-8 h-8 text-[#FACD3E]" />,
      className: 'top-40 right-6 sm:right-12 lg:right-4',
      delay: 0.5,
      yRange: [0, -20, 0]
    },
    {
      name: 'Clicky Mechanical K2',
      type: 'Keyboard',
      price: '$149',
      icon: <Keyboard className="w-8 h-8 text-stone-900" />,
      className: 'bottom-20 left-4 sm:left-10 lg:-left-6',
      delay: 1,
      yRange: [0, -12, 0]
    },
    {
      name: 'Aero Watch S5',
      type: 'Smartwatch',
      price: '$199',
      icon: <Watch className="w-8 h-8 text-indigo-600" />,
      className: 'bottom-6 right-8 sm:right-16 lg:right-12',
      delay: 1.5,
      yRange: [0, -18, 0]
    }
  ];

  return (
    <section id="home" className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side Info */}
        <div className="lg:col-span-6 text-left space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-[#ED1C27] bg-[#FEF2F2] px-3 py-1.5 rounded-xl border border-[#ED1C27]/10 inline-block shadow-sm">
              Premium Gear Store
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-stone-900 leading-tight">
              Premium Tech Gadgets <span className="text-[#ED1C27] block sm:inline">Delivered To Your Doorstep</span>
            </h1>
            <p className="font-sans font-medium text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
              Shop the latest headphones, gaming accessories, mice, keyboards, smart gadgets and tech accessories at unbeatable prices.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#products"
              className="bg-[#ED1C27] hover:bg-stone-900 text-white rounded-2xl px-6 py-3.5 font-sans font-bold uppercase text-xs tracking-widest shadow-primary-btn hover:shadow-soft-gen transition-all duration-300 flex items-center gap-2 group"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="bg-white text-stone-900 border border-stone-200 rounded-2xl px-6 py-3.5 font-sans font-bold uppercase text-xs tracking-widest hover:bg-stone-50 hover:border-stone-300 transition-all duration-300"
            >
              View Features
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 border-t border-stone-100 flex flex-wrap gap-6 items-center"
          >
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-stone-700">
                {item.icon}
                <span className="font-sans font-semibold text-xs uppercase tracking-wide">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side Showcase */}
        <div className="lg:col-span-6 relative h-[450px] sm:h-[500px] w-full flex items-center justify-center">
          {/* Central background badge ring */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-radial from-[#ED1C27]/5 via-[#FACD3E]/5 to-transparent blur-xl" />
          <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-stone-200/40 animate-[spin_40s_linear_infinite]" />

          {/* Gadget Hub Center Hub card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute z-10 w-44 h-44 rounded-3xl bg-white border border-stone-100 shadow-card-hover flex flex-col items-center justify-center p-4 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center text-[#ED1C27] mb-3">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-base text-stone-900 leading-tight">GadgetHub</h3>
            <p className="font-sans text-[10px] text-stone-500 uppercase tracking-widest mt-1">Official Gear</p>
          </motion.div>

          {/* Floating Showcase Cards */}
          {floatingGadgets.map((gadget, idx) => (
            <motion.div
              key={idx}
              animate={{
                y: gadget.yRange,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: gadget.delay,
              }}
              className={`absolute ${gadget.className} z-20 w-44 bg-white/80 backdrop-blur-md rounded-2xl border border-stone-100 p-4 shadow-default-card hover:shadow-card-hover hover:border-stone-200 hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 rounded-xl bg-stone-50 border border-stone-100/50">
                  {gadget.icon}
                </div>
                <span className="font-display font-black text-sm text-[#ED1C27]">
                  {gadget.price}
                </span>
              </div>
              <div className="text-left mt-2">
                <p className="font-sans font-bold text-xs text-stone-900 truncate">{gadget.name}</p>
                <p className="font-sans text-[9px] text-stone-500 uppercase tracking-wider mt-0.5">{gadget.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
