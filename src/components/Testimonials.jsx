import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ali Raza",
      role: "Verified Purchaser",
      rating: 5,
      text: "The Pro Wireless H1 headphones exceeded my expectations. Soundstage is wide, and the bass response is deep without leaking. Delivered to Lahore in 24 hours!",
      avatar: "AR"
    },
    {
      name: "Sarah Khan",
      role: "Digital Designer",
      rating: 5,
      text: "Outstanding mechanical keyboard. The tactile feedback is highly satisfying for both coding and writing. GadgetHub has earned a customer for life.",
      avatar: "SK"
    },
    {
      name: "Zainab Malik",
      role: "Gaming Enthusiast",
      rating: 5,
      text: "The Apex M3 mouse is extremely precise. Lightweight construction, flawless tracking, and comfortable ergonomics during marathon Valorant sessions.",
      avatar: "ZM"
    },
    {
      name: "Bilal Ahmed",
      role: "Product Manager",
      rating: 4,
      text: "Excellent power bank and webcam quality. Very professional packaging and swift customer service responses. Highly recommended for remote workers.",
      avatar: "BA"
    },
    {
      name: "Ayesha Omer",
      role: "Tech Reviewer",
      rating: 5,
      text: "Tried their Bluetooth speaker and wireless earbuds. Both output punchy clear audio with reliable connection. Easily matching premium international standards.",
      avatar: "AO"
    },
    {
      name: "Hamza Lodhi",
      role: "Software Engineer",
      rating: 5,
      text: "The smartwatch matches high-end devices in tracking stats accurately. Battery persists for a solid week. Prompt notifications and solid metal build.",
      avatar: "HL"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 2));
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? Math.ceil(reviews.length / 2) - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 2));
  };

  return (
    <section id="reviews" className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-stone-100 bg-[#fafaf9]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="text-left space-y-4 max-w-xl">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#ED1C27] bg-[#FEF2F2] px-3 py-1.5 rounded-xl border border-[#ED1C27]/10 inline-block shadow-sm">
            Reviews
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
            Loved By Tech Enthusiasts
          </h2>
          <p className="font-sans font-medium text-sm text-stone-600">
            Read authentic reviews from professionals and gamers who choose GadgetHub for their setup.
          </p>
        </div>

        <div className="flex gap-2.5 mt-6 md:mt-0">
          <button 
            onClick={handlePrev}
            className="w-11 h-11 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-stone-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="w-11 h-11 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-stone-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 ease-in-out">
          {reviews.slice(activeIndex * 2, activeIndex * 2 + 2).map((review, idx) => (
            <motion.div
              key={activeIndex + '-' + idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-stone-100 rounded-3xl p-6 md:p-8 shadow-default-card hover:shadow-card-hover hover:border-stone-200 transition-all duration-300 relative flex flex-col justify-between"
            >
              <Quote className="absolute right-6 top-6 w-10 h-10 text-stone-100" />
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 fill-current ${i < review.rating ? 'text-[#FACD3E]' : 'text-stone-200'}`} 
                    />
                  ))}
                </div>
                <p className="font-sans font-medium text-sm text-stone-700 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-3.5 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-brand-soft border border-brand-red/10 flex items-center justify-center font-display font-black text-xs text-[#ED1C27]">
                  {review.avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-sm text-stone-900 leading-tight">{review.name}</h4>
                  <p className="text-[10px] text-stone-500 font-medium tracking-wide uppercase mt-0.5">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
