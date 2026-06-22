import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, CheckCircle2, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Fast Delivery',
      desc: 'Swift door-to-door delivery across all major cities with real-time package tracking.',
      icon: <Truck className="w-6 h-6 text-[#ED1C27]" />,
      bg: 'bg-brand-soft border-[#ED1C27]/10',
    },
    {
      title: 'Secure Payments',
      desc: 'Multiple verified checkout pathways including Easypaisa Merchant & Visa/Mastercard.',
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      bg: 'bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Original Products',
      desc: '100% genuine products directly sourced from official manufacturers with certified warranties.',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      bg: 'bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Customer Support',
      desc: 'Dedicated 24/7 client care desk to assist you with inquiries, setups, and returns.',
      icon: <Headphones className="w-6 h-6 text-[#FACD3E]" />,
      bg: 'bg-amber-50 border-amber-100',
    },
  ];

  return (
    <section id="features" className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-stone-100 bg-stone-50/50">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#ED1C27] bg-[#FEF2F2] px-3 py-1.5 rounded-xl border border-[#ED1C27]/10 inline-block shadow-sm">
          Why GadgetHub
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
          Uncompromised Quality & Support
        </h2>
        <p className="font-sans font-medium text-sm text-stone-600 max-w-lg mx-auto">
          We pride ourselves on offering the best shopping experience for all our gadget enthusiasts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-white border border-stone-100 rounded-3xl p-6 shadow-default-card hover:shadow-card-hover hover:border-stone-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.bg}`}>
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-stone-900 mb-3 group-hover:text-brand-red transition-colors">
                {feature.title}
              </h3>
              <p className="font-sans font-medium text-xs text-stone-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
            <div className="mt-6 w-full h-[3px] bg-stone-100 rounded-full overflow-hidden">
              <div className="w-0 group-hover:w-full h-full bg-[#ED1C27] transition-all duration-500 ease-out" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
