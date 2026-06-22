import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import PaymentMethods from './components/PaymentMethods';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import Toast from './components/Toast';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleOrderSubmit = (orderData) => {
    // Log the structure as specified for future API integration
    console.log("Order Data:", orderData);
    
    setIsModalOpen(false);
    setToast({
      type: 'success',
      title: 'Order Submitted!',
      message: `Successfully processed order for ${orderData.product}. We will contact you soon.`
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <Products onOrderClick={handleOrderClick} />
        <WhyChooseUs />
        <PaymentMethods />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
      <Footer />

      <OrderModal 
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleOrderSubmit}
      />

      <Toast 
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}

export default App;
