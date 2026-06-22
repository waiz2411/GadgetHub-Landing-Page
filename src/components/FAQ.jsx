import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "What is the standard delivery timeline?",
      a: "For major metropolitan areas like Lahore, Karachi, and Islamabad, we deliver within 24 to 48 hours. Deliveries to other regions across Pakistan typically require 3 to 5 business days."
    },
    {
      q: "Which payment channels do you support?",
      a: "You can securely complete your transactions via Easypaisa Merchant Account, Visa, Mastercard, or direct Bank Wire Transfer. We use secure compliance servers to protect all buyer data."
    },
    {
      q: "What is your refund & exchange policy?",
      a: "We offer a 7-day hassle-free return policy if the product is found to be defective, damaged during transit, or deviates from the catalog description. The item must remain unused and in original packaging."
    },
    {
      q: "Do products come with an official warranty?",
      a: "Yes, all our hardware and tech accessories include a 6-month or 12-month manufacturer replacement warranty (stated explicitly on each product invoice) for absolute peace of mind."
    },
    {
      q: "How can I place an order?",
      a: "Simply browse our product gallery, click the 'Order Now' button on any gadget, complete the quick checkout modal form with your delivery & payment parameters, and click 'Confirm Order'."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-stone-100 bg-white">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#ED1C27] bg-[#FEF2F2] px-3 py-1.5 rounded-xl border border-[#ED1C27]/10 inline-block shadow-sm">
          Support
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
          Frequently Answered Questions
        </h2>
        <p className="font-sans font-medium text-sm text-stone-600 max-w-lg mx-auto">
          Need clarification? Browse our general solutions or contact our 24/7 customer help desk.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="border border-stone-200 rounded-2xl overflow-hidden bg-stone-50/50 hover:bg-white hover:border-stone-300 transition-colors duration-300"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <div className="flex items-center gap-3.5 pr-4">
                  <HelpCircle className="w-5 h-5 text-stone-400 flex-shrink-0" />
                  <span className="font-display font-bold text-sm sm:text-base text-stone-900">{faq.q}</span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-600 flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="p-5 pt-0 border-t border-stone-200/50 text-stone-600 font-sans font-medium text-xs sm:text-sm leading-relaxed text-left">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
