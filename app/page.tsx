'use client';
import React, { useState } from 'react';

// Components
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ClientsTicker } from '@/components/ClientsTicker';
import { ServicesSection } from '@/components/ServicesSection';
import { ThreeDShowcase } from '@/components/ThreeDShowcase';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ClientStories } from '@/components/ClientStories';
import { WorkflowSection } from '@/components/WorkflowSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#051C1F] text-slate-100 selection:bg-amber-400/30 selection:text-amber-200">
      {/* 1. Header Navigation */}
      <Navbar
        onOpenConsultation={() => scrollToSection('pricing')}
        onScrollToSection={scrollToSection}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onScrollToSection={scrollToSection}
          onOpenConsultation={() => scrollToSection('pricing')}
        />

        {/* 3. 50+ Clients Ticker */}
        <ClientsTicker
          onOpenConsultation={() => scrollToSection('pricing')}
        />

        {/* 4. Core Design Services */}
        <ServicesSection
          onSelectServiceForBrief={() => scrollToSection('pricing')}
          onOpenConsultation={() => scrollToSection('pricing')}
        />

        {/* 5. Real-Time 3D Spatial Art Studio */}
        <ThreeDShowcase
          onOpenConsultation={() => scrollToSection('pricing')}
          onScrollToSection={scrollToSection}
        />

        {/* 6. Selected Works Portfolio */}
        <PortfolioSection />

        {/* 7. 50+ Client Stories */}
        <ClientStories />

        {/* 8. Velocity Workflow */}
        <WorkflowSection
          onOpenConsultation={() => scrollToSection('pricing')}
          onScrollToSection={scrollToSection}
        />

        {/* 9. Agency Pricing Tiers */}
        <PricingSection
          onSelectPlan={() => scrollToSection('pricing')}
        />

        {/* 10. FAQs */}
        <FAQ />
      </main>

      {/* 11. Multi-Column Agency Footer */}
      <Footer
        onScrollToSection={scrollToSection}
        onOpenConsultation={() => scrollToSection('pricing')}
      />
    </div>
  );
}