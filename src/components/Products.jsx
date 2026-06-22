import React from 'react';
import { Star, ArrowUpRight, Headphones, Mouse, Keyboard, Volume2, Watch, BatteryCharging, Video } from 'lucide-react';

export default function Products({ onOrderClick }) {
  const products = [
    {
      id: 1,
      name: "Pro Wireless H1",
      description: "Audiophile-grade active noise cancelling over-ear headphones with 45hr playback.",
      oldPrice: "$199",
      price: "$129",
      rating: 5,
      icon: <Headphones className="w-12 h-12 text-[#ED1C27]" />,
      badgeColor: "bg-blue-600",
      gradient: "from-blue-500/10 to-indigo-500/5",
    },
    {
      id: 2,
      name: "Apex Gaming M3",
      description: "Ultra-lightweight 16,000 DPI gaming mouse with custom optical switches.",
      oldPrice: "$99",
      price: "$79",
      rating: 5,
      icon: <Mouse className="w-12 h-12 text-[#FACD3E]" />,
      badgeColor: "bg-emerald-600",
      gradient: "from-emerald-500/10 to-teal-500/5",
    },
    {
      id: 3,
      name: "Clicky Mechanical K2",
      description: "Compact 75% mechanical keyboard featuring hot-swappable tactile blue switches.",
      oldPrice: "$189",
      price: "$149",
      rating: 4,
      icon: <Keyboard className="w-12 h-12 text-stone-900" />,
      badgeColor: "bg-violet-600",
      gradient: "from-violet-500/10 to-fuchsia-500/5",
    },
    {
      id: 4,
      name: "Boom Box 360",
      description: "IPX7 waterproof portable Bluetooth speaker with deep dual-subwoofer bass.",
      oldPrice: "$129",
      price: "$89",
      rating: 5,
      icon: <Volume2 className="w-12 h-12 text-[#ED1C27]" />,
      badgeColor: "bg-rose-600",
      gradient: "from-rose-500/10 to-pink-500/5",
    },
    {
      id: 5,
      name: "Aero Watch S5",
      description: "Active health smartwatch featuring continuous heart rate monitor and AMOLED UI.",
      oldPrice: "$249",
      price: "$199",
      rating: 5,
      icon: <Watch className="w-12 h-12 text-indigo-600" />,
      badgeColor: "bg-cyan-600",
      gradient: "from-cyan-500/10 to-blue-500/5",
    },
    {
      id: 6,
      name: "Power Tank 20K",
      description: "20,000mAh ultra-compact power bank with 22.5W dual USB-C power delivery.",
      oldPrice: "$69",
      price: "$49",
      rating: 4,
      icon: <BatteryCharging className="w-12 h-12 text-[#FACD3E]" />,
      badgeColor: "bg-amber-600",
      gradient: "from-amber-500/10 to-orange-500/5",
    },
    {
      id: 7,
      name: "Streamer Cam 4K",
      description: "Ultra-HD 4K streaming webcam with auto-focus ring light and noise filter mic.",
      oldPrice: "$149",
      price: "$119",
      rating: 5,
      icon: <Video className="w-12 h-12 text-stone-900" />,
      badgeColor: "bg-slate-700",
      gradient: "from-slate-500/10 to-zinc-500/5",
    },
    {
      id: 8,
      name: "SoundBuds Air",
      description: "True wireless active noise-cancellation earbuds with deep comfort seal design.",
      oldPrice: "$99",
      price: "$69",
      rating: 5,
      icon: <Headphones className="w-12 h-12 text-emerald-600" />, // Styled for wireless earbuds
      badgeColor: "bg-pink-600",
      gradient: "from-pink-500/10 to-rose-500/5",
    }
  ];

  return (
    <section id="products" className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-stone-100 bg-white">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#ED1C27] bg-[#FEF2F2] px-3 py-1.5 rounded-xl border border-[#ED1C27]/10 inline-block shadow-sm">
          Featured Collection
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
          Explore Our Bestsellers
        </h2>
        <p className="font-sans font-medium text-sm text-stone-600 max-w-lg mx-auto">
          Equip your desk with standard-setting, precision-engineered hardware components.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border border-stone-100 rounded-[32px] overflow-hidden shadow-default-card hover:shadow-card-hover hover:border-stone-200 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Header / Illustration */}
            <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center p-6 relative`}>
              <div className="absolute top-4 left-4">
                <span className={`text-[9px] font-black text-white px-2.5 py-1 rounded-xl uppercase tracking-widest shadow-md ${product.badgeColor}`}>
                  Featured
                </span>
              </div>
              <div className="group-hover:scale-110 transition-transform duration-500">
                {product.icon}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between items-stretch">
              <div>
                {/* Rating */}
                <div className="flex gap-0.5 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 fill-current ${i < product.rating ? 'text-[#FACD3E]' : 'text-stone-200'}`} 
                    />
                  ))}
                </div>

                {/* Name & Desc */}
                <h3 className="font-display font-bold text-lg text-stone-900 leading-tight mb-2 group-hover:text-[#ED1C27] transition-colors">
                  {product.name}
                </h3>
                <p className="font-sans font-medium text-xs text-stone-500 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Pricing & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <div className="text-left">
                  <span className="text-[10px] text-stone-400 line-through block leading-none">{product.oldPrice}</span>
                  <span className="font-display font-black text-lg text-stone-900 leading-none mt-1 block">{product.price}</span>
                </div>

                <button
                  onClick={() => onOrderClick(product)}
                  className="bg-[#ED1C27] hover:bg-stone-900 text-white rounded-2xl px-4 py-2.5 font-sans font-bold uppercase text-[10px] tracking-widest shadow-md shadow-brand-red/10 transition-colors flex items-center gap-1.5"
                >
                  Order Now
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
