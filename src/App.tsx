import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OpeningHoursSection } from './components/OpeningHoursSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StoreShowcase } from './components/StoreShowcase';
import { StoresSection } from './components/StoresSection';
import { ProductsShowcase } from './components/ProductsShowcase';
import { InstagramSection } from './components/InstagramSection';
import { FAQSection } from './components/FAQSection';
import { ConversionCTA } from './components/ConversionCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialService, setInitialService] = useState<'banho-e-tosa' | 'clinica'>('banho-e-tosa');

  const handleOpenBookingModal = (service: 'banho-e-tosa' | 'clinica' = 'banho-e-tosa') => {
    setInitialService(service);
    setBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#00A651] selection:text-white flex flex-col">
      {/* Header & Sticky Navigation */}
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 6: Hero Section */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* Section 3: Visual Opening Hours Highlight */}
        <OpeningHoursSection />

        {/* Section 7: Categories (Cães, Gatos, Pássaros, Roedores, Higiene, Aquarismo) */}
        <CategoriesSection />

        {/* Section 8: Services (Clínica Veterinária, Banho e Tosa) */}
        <ServicesSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Section 9: Differentials (Por que escolher a Terra Fértil Pet?) */}
        <WhyChooseUs />

        {/* Section 10: Store Presentation & Atmosphere */}
        <StoreShowcase />

        {/* Section 11: Nossas Lojas Multi-Unit Structure */}
        <StoresSection />

        {/* Section 12: Products Variety Showcase with Filters & Search */}
        <ProductsShowcase />

        {/* Section 13: Instagram Feed & Community (@terrafertilpet) */}
        <InstagramSection />

        {/* FAQ Section: Common Questions & Quick Guidance */}
        <FAQSection />

        {/* Section 14: Strong Conversion CTA Banner */}
        <ConversionCTA />
      </main>

      {/* Section 15: Institutional Footer */}
      <Footer onOpenBookingModal={handleOpenBookingModal} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenBookingModal={handleOpenBookingModal} />

      {/* Quick Booking / Contact Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBookingModal}
        initialService={initialService}
      />
    </div>
  );
}
