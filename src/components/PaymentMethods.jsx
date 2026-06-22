import React from 'react';
import { ShieldCheck, CreditCard, Landmark, Wallet, Check } from 'lucide-react';

export default function PaymentMethods() {
  const paymentMethods = [
    {
      name: "Easypaisa Merchant",
      enabled: true,
      icon: <Wallet className="w-6 h-6 text-emerald-600" />,
      description: "Direct merchant account billing"
    },
    {
      name: "Mastercard",
      enabled: true,
      icon: <CreditCard className="w-6 h-6 text-amber-500" />,
      description: "Credit or Debit card authorization"
    },
    {
      name: "Visa",
      enabled: true,
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      description: "Fast credit checkout"
    },
    {
      name: "Bank Transfer",
      enabled: true,
      icon: <Landmark className="w-6 h-6 text-stone-700" />,
      description: "Direct deposit / online banking"
    }
  ];

  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-stone-100 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left side details */}
        <div className="lg:col-span-5 text-left space-y-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#ED1C27] bg-[#FEF2F2] px-3 py-1.5 rounded-xl border border-[#ED1C27]/10 inline-block shadow-sm">
            Payment Methods
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-stone-900 tracking-tight">
            100% Secure Checkout Channels
          </h2>
          <p className="font-sans font-medium text-sm text-stone-600 leading-relaxed">
            Pay securely using Easypaisa Merchant Account, Mastercard, Visa Cards, or Bank Transfer.
          </p>
          <div className="flex items-center gap-2 p-3 bg-stone-50 border border-stone-100 rounded-2xl max-w-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <span className="text-xs font-semibold text-stone-600">PCI-DSS Compliant Encryption Standard</span>
          </div>
        </div>

        {/* Right side list */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {paymentMethods.map((method, index) => (
            <div 
              key={index}
              className={`p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                method.enabled 
                  ? 'bg-stone-50/50 border-stone-200 hover:border-stone-300 hover:bg-white hover:shadow-default-card' 
                  : 'opacity-55 bg-stone-100 border-transparent cursor-not-allowed'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                {method.icon}
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-bold text-sm text-stone-900">{method.name}</h4>
                  {method.enabled && (
                    <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-stone-500 mt-1 font-medium">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
