import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { QuickWhatsAppOrder } from './components/QuickWhatsAppOrder';
import { IngredientsAndTrust } from './components/IngredientsAndTrust';
import { AnonymousReviews } from './components/AnonymousReviews';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const PATH_TO_SECTION = {
  '/male-vitality-herbal-oil': 'products',
  '/women-herbal-hair-oil': 'products',
  '/whatsapp-order': 'quick-order',
  '/ingredients': 'ingredients',
  '/anonymous-reviews': 'reviews',
  '/faqs': 'faqs',
};

export default function App() {
  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    const targetId = PATH_TO_SECTION[path];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF5] text-[#102212]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductsSection />
        <QuickWhatsAppOrder />
        <IngredientsAndTrust />
        <AnonymousReviews />
        <FAQSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
