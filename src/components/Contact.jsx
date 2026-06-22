import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      title: "Direct Phone Call",
      value: "+92 336 0186282",
      link: "tel:+923360186282",
      icon: <Phone className="w-5 h-5 text-[#ED1C27]" />,
      actionText: "Call Now"
    },
    {
      title: "WhatsApp Chat",
      value: "+923360186282",
      link: "https://wa.me/923360186282",
      icon: <MessageCircle className="w-5 h-5 text-emerald-600" />,
      actionText: "Chat Live"
    },
    {
      title: "Email Support",
      value: "waiztahseen@gmail.com",
      link: "mailto:support@gadgethub.pk",
      icon: <Mail className="w-5 h-5 text-indigo-600" />,
      actionText: "Write Us"
    },
    {
      title: "Business HQ",
      value: "Office 24, Block D, Main Boulevard, Gulberg III, Lahore, Pakistan",
      link: "https://maps.google.com",
      icon: <MapPin className="w-5 h-5 text-stone-700" />,
      actionText: "Get Directions"
    }
  ];

  return (
    <section id="contact" className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-stone-100 bg-[#fafaf9]">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#ED1C27] bg-[#FEF2F2] px-3 py-1.5 rounded-xl border border-[#ED1C27]/10 inline-block shadow-sm">
          Contact Us
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
          Get In Touch With GadgetHub
        </h2>
        <p className="font-sans font-medium text-sm text-stone-600 max-w-lg mx-auto">
          Have an inquiry about wholesale rates, shipping details, or customized bundles? Shoot us a message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Contact details */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.link}
              target={info.link.startsWith('http') ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-stone-200 bg-white hover:border-[#ED1C27]/30 hover:shadow-default-card transition-all duration-300 flex items-start gap-4 text-left group"
            >
              <div className="w-11 h-11 rounded-xl bg-stone-50 border border-stone-150 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                {info.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-stone-500">{info.title}</h4>
                <p className="font-sans font-bold text-sm sm:text-base text-stone-900 mt-1 break-words">{info.value}</p>
                <div className="flex items-center gap-1 mt-2 text-[#ED1C27] text-[10px] font-bold uppercase tracking-widest">
                  <span>{info.actionText}</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-default-card p-2 min-h-[350px] flex">
          <div className="w-full h-full rounded-2xl overflow-hidden relative bg-stone-100 flex flex-col items-center justify-center text-center p-6">
            {/* Embedded Google Maps using standard Iframe */}
            <iframe
              src="https://maps.google.com/maps?q=Office%2024,%20Block%20D,%20Main%20Boulevard,%20Gulberg%20III,%20Lahore,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
              allowFullScreen=""
              loading="lazy"
              title="Google Map Location"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Floating indicator */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-stone-100 flex items-center gap-2 pointer-events-none z-10">
              <MapPin className="w-4 h-4 text-[#ED1C27]" />
              <span className="font-display font-bold text-[10px] uppercase tracking-wider text-stone-900">GadgetHub HQ - Lahore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
