'use client';
import React, { useState } from 'react';

// Exactly matching your components folder
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ClientsTicker } from '@/components/ClientsTicker';
import { ClientStories } from '@/components/ClientStories';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
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

        {/* 5. Selected Works Portfolio */}
        <PortfolioSection />

        {/* 6. 50+ Client Stories & Testimonials */}
        <ClientStories />

        {/* 7. Velocity Workflow */}
        <WorkflowSection
          onOpenConsultation={() => scrollToSection('pricing')}
          onScrollToSection={scrollToSection}
        />

        {/* 8. Agency Pricing Tiers */}
        <PricingSection
          onSelectPlan={() => scrollToSection('pricing')}
        />

        {/* 9. FAQs */}
        <FAQ />
      </main>

      {/* 10. Complete Multi-Column Agency Footer with CTA Banner */}
      <Footer
        onScrollToSection={scrollToSection}
        onOpenConsultation={() => scrollToSection('pricing')}
      />
    </div>
  );
}