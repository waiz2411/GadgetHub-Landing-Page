import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Send } from 'lucide-react';

export default function OrderModal({ isOpen, product, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    whatsapp: '',
    city: '',
    address: '',
    paymentMethod: 'Easypaisa Merchant',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (!isOpen || !product) return null;

  const validate = () => {
    const tempErrors = {};
    if (!formData.customerName.trim()) tempErrors.customerName = 'Full name is required';
    if (!formData.phone.trim()) tempErrors.phone = 'Phone number is required';
    else if (!/^\+?[0-9]{7,15}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      tempErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.whatsapp.trim() && !/^\+?[0-9]{7,15}$/.test(formData.whatsapp.replace(/[\s-]/g, ''))) {
      tempErrors.whatsapp = 'Please enter a valid WhatsApp number';
    }
    if (!formData.city.trim()) tempErrors.city = 'City is required';
    if (!formData.address.trim()) tempErrors.address = 'Complete address is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);

    onSubmit({
      ...formData,
      product: product.name,
      price: product.price
    });
    
    // Reset form
    setFormData({
      customerName: '',
      phone: '',
      whatsapp: '',
      city: '',
      address: '',
      paymentMethod: 'Easypaisa Merchant',
      notes: ''
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/40 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-white rounded-modal shadow-toast overflow-hidden border border-stone-100 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-soft flex items-center justify-center text-brand-red">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-stone-900 leading-tight">Place Your Order</h3>
                <p className="text-xs text-stone-500 mt-0.5">Quick single-page checkout</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-stone-400 hover:text-stone-600 transition-colors p-1.5 rounded-lg hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
            {/* Selected Product Banner */}
            <div className="p-4 bg-brand-soft rounded-2xl border border-brand-red/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-red bg-white px-2 py-0.5 rounded-md shadow-sm border border-brand-red/5">Selected Product</span>
                <h4 className="font-display font-bold text-base text-stone-900 mt-1">{product.name}</h4>
              </div>
              <div className="text-right">
                <div className="text-stone-400 line-through text-xs">{product.oldPrice}</div>
                <div className="font-display font-black text-xl text-brand-red">{product.price}</div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block font-display font-semibold text-xs text-stone-700 uppercase tracking-wider mb-1.5">Full Name *</label>
                <input 
                  type="text" 
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full bg-stone-100/50 hover:border-stone-200 focus:bg-white border border-transparent rounded-2xl px-5 py-3 font-medium text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red/30 transition-all duration-300 ${errors.customerName ? 'border-brand-red/40 bg-brand-soft/20' : ''}`}
                />
                {errors.customerName && <p className="text-brand-red text-xs mt-1 font-medium">{errors.customerName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-display font-semibold text-xs text-stone-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 03001234567"
                    className={`w-full bg-stone-100/50 hover:border-stone-200 focus:bg-white border border-transparent rounded-2xl px-5 py-3 font-medium text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red/30 transition-all duration-300 ${errors.phone ? 'border-brand-red/40 bg-brand-soft/20' : ''}`}
                  />
                  {errors.phone && <p className="text-brand-red text-xs mt-1 font-medium">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block font-display font-semibold text-xs text-stone-700 uppercase tracking-wider mb-1.5">WhatsApp Number (Optional)</label>
                  <input 
                    type="tel" 
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="e.g. 03001234567"
                    className={`w-full bg-stone-100/50 hover:border-stone-200 focus:bg-white border border-transparent rounded-2xl px-5 py-3 font-medium text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red/30 transition-all duration-300 ${errors.whatsapp ? 'border-brand-red/40 bg-brand-soft/20' : ''}`}
                  />
                  {errors.whatsapp && <p className="text-brand-red text-xs mt-1 font-medium">{errors.whatsapp}</p>}
                </div>
              </div>

              <div>
                <label className="block font-display font-semibold text-xs text-stone-700 uppercase tracking-wider mb-1.5">City *</label>
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Lahore"
                  className={`w-full bg-stone-100/50 hover:border-stone-200 focus:bg-white border border-transparent rounded-2xl px-5 py-3 font-medium text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red/30 transition-all duration-300 ${errors.city ? 'border-brand-red/40 bg-brand-soft/20' : ''}`}
                />
                {errors.city && <p className="text-brand-red text-xs mt-1 font-medium">{errors.city}</p>}
              </div>

              <div>
                <label className="block font-display font-semibold text-xs text-stone-700 uppercase tracking-wider mb-1.5">Complete Address *</label>
                <textarea 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street, Sector, Area, House No."
                  rows={2}
                  className={`w-full bg-stone-100/50 hover:border-stone-200 focus:bg-white border border-transparent rounded-2xl px-5 py-3 font-medium text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red/30 transition-all duration-300 resize-none ${errors.address ? 'border-brand-red/40 bg-brand-soft/20' : ''}`}
                />
                {errors.address && <p className="text-brand-red text-xs mt-1 font-medium">{errors.address}</p>}
              </div>

              {/* Payment Methods Radio buttons */}
              <div>
                <label className="block font-display font-semibold text-xs text-stone-700 uppercase tracking-wider mb-2.5">Payment Method *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${formData.paymentMethod === 'Easypaisa Merchant' ? 'border-brand-red bg-brand-soft/30' : 'border-stone-200 hover:border-stone-300 bg-white'}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="Easypaisa Merchant"
                      checked={formData.paymentMethod === 'Easypaisa Merchant'}
                      onChange={handleChange}
                      className="w-4 h-4 text-brand-red focus:ring-brand-red accent-[#ED1C27]"
                    />
                    <div className="text-left">
                      <p className="font-display font-bold text-sm text-stone-900">Easypaisa Merchant</p>
                      <p className="text-[10px] text-stone-500 mt-0.5">Pay via App or Mobile Account</p>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${formData.paymentMethod === 'Mastercard' ? 'border-brand-red bg-brand-soft/30' : 'border-stone-200 hover:border-stone-300 bg-white'}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="Mastercard"
                      checked={formData.paymentMethod === 'Mastercard'}
                      onChange={handleChange}
                      className="w-4 h-4 text-brand-red focus:ring-brand-red accent-[#ED1C27]"
                    />
                    <div className="text-left">
                      <p className="font-display font-bold text-sm text-stone-900">Mastercard</p>
                      <p className="text-[10px] text-stone-500 mt-0.5">Pay via credit/debit card</p>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-display font-semibold text-xs text-stone-700 uppercase tracking-wider mb-1.5">Order Notes (Optional)</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Special instructions for delivery..."
                  rows={2}
                  className="w-full bg-stone-100/50 hover:border-stone-200 focus:bg-white border border-transparent rounded-2xl px-5 py-3 font-medium text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red/30 transition-all duration-300 resize-none"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-red hover:bg-stone-900 text-white rounded-2xl px-6 py-4 font-display font-bold uppercase text-xs tracking-widest shadow-primary-btn hover:shadow-soft-gen transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-75 disabled:pointer-events-none"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Order...
                  </>
                ) : (
                  <>
                    Confirm Order
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
