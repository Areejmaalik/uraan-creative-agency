'use client';
import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Megaphone, 
  Boxes, 
  Layout, 
  Cpu, 
  PackageCheck,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { AGENCY_SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBrief: (serviceName: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBrief,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, any> = {
    Sparkles,
    Megaphone,
    Boxes,
    Layout,
    Cpu,
    PackageCheck
  };

  const categories = ['all', 'Branding', 'Marketing Design', '3D & Motion', 'Digital Product'];

  const filteredServices = activeTab === 'all'
    ? AGENCY_SERVICES
    : AGENCY_SERVICES.filter(s => s.category.toLowerCase().includes(activeTab.toLowerCase()) || activeTab.toLowerCase().includes(s.category.toLowerCase()));

  return (
    <section id="services" className="py-24 bg-[#051C1F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI-Supercharged Graphic Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            High-Velocity Design Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300">
              Built for Scale & Impact
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We merge master vector geometry and human art direction with generative neural engines to produce brand identities, 3D motion, and advertising assets in record time.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 capitalize ${
                activeTab === cat
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 font-bold'
                  : 'bg-[#062226] text-slate-300 hover:text-white border border-teal-900/80 hover:border-teal-700'
              }`}
            >
              {cat === 'all' ? 'All Services' : cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="rounded-2xl bg-[#062226] border border-teal-900/80 p-6 sm:p-8 space-y-6 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/30 hover:shadow-amber-400/5"
              >
                <div className="space-y-5">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#041618] text-amber-300 border border-teal-900">
                      {service.metrics}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-amber-400/90 font-mono">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* AI Capabilities */}
                  <div className="space-y-2 pt-2 border-t border-teal-950">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-bold">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      AI-Amplified Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {service.aiCapabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-teal-950">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-bold">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      Core Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((del, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-[11px] bg-[#041618] text-slate-300 border border-teal-900"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 border-t border-teal-950 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Starting From</span>
                    <span className="text-lg font-black text-white font-display">
                      {service.startingPrice}
                    </span>
                    <span className="text-[10px] text-slate-400 ml-1">({service.turnaround})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectServiceForBrief(service.title)}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-amber-300 bg-[#08292D] hover:bg-[#0D383D] border border-amber-400/30 transition-colors"
                    >
                      Generate AI Brief
                    </button>
                    <button
                      onClick={onOpenConsultation}
                      className="p-2 rounded-xl bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-colors"
                      title="Book Service"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};