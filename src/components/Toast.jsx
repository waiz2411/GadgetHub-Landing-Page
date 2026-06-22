import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  const getStyle = () => {
    switch (toast.type) {
      case 'success':
        return {
          containerClass: 'bg-white text-stone-900 border-l-[6px] border-[#10b981]',
          icon: <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0" />,
        };
      case 'error':
        return {
          containerClass: 'bg-white text-stone-900 border-l-[6px] border-[#ED1C27]',
          icon: <AlertTriangle className="w-5 h-5 text-[#ED1C27] flex-shrink-0" />,
        };
      case 'info':
      default:
        return {
          containerClass: 'bg-stone-900 text-white border-l-[6px] border-stone-600',
          icon: <Info className="w-5 h-5 text-stone-400 flex-shrink-0" />,
        };
    }
  };

  const { containerClass, icon } = getStyle();

  return (
    <div className="fixed bottom-6 right-6 z-100 w-full max-w-sm px-4 md:px-0">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex items-start gap-3 p-4 rounded-2xl shadow-toast border border-stone-100 ${containerClass}`}
        >
          {icon}
          <div className="flex-1 min-w-0">
            <h4 className="font-display font-bold text-sm tracking-wide">
              {toast.title}
            </h4>
            <p className="text-xs mt-1 text-stone-500 opacity-90">
              {toast.message}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 transition-colors p-0.5 rounded-lg hover:bg-stone-100"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
