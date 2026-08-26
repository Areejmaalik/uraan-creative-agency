'use client';
import React from 'react';
import { Sparkles, ArrowRight, Send, Globe, Mail } from 'lucide-react';
import { UraanLogo } from './UraanLogo';
import { AGENCY_METRICS } from '../data/agencyData';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection, onOpenConsultation }) => {
  return (
    <footer className="bg-[#031315] border-t border-teal-950 text-slate-300 relative overflow-hidden">
      
      {/* Upper CTA Banner */}
      <div className="border-b border-teal-950/80 py-16 bg-[#041618]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Elevate Your Brand Velocity</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Ready to Give Your Brand Wings?
            </h3>
            <p className="text-sm text-slate-400">
              Join 50+ visionary founders and growth leaders who power their brand identity, 3D visual assets, and marketing suites with Uraan Creative Agency.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onScrollToSection('pricing')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs text-amber-300 bg-[#08292D] hover:bg-[#0D383D] border border-amber-400/30 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Explore Pricing</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-200 hover:to-yellow-300 shadow-xl shadow-amber-400/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Book Flight Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block p-2 rounded-xl bg-[#08292D] border border-amber-400/30">
              <UraanLogo size="sm" showSubtitle={true} />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Uraan Creative Agency is an elite graphic design & generative AI service studio. We empower 50+ global brands with high-velocity vector identities, 3D motion art, UI/UX systems, and bespoke creative models.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-amber-400 pt-1">
              <span>{AGENCY_METRICS?.clientsCount || '50+'} Clients Worldwide</span>
              <span>•</span>
              <span>{AGENCY_METRICS?.deliveredAssets || '1.4k+'} Assets Delivered</span>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Design Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-amber-300 transition-colors">Brand Identity & Logos</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-amber-300 transition-colors">3D Motion & Spatial Art</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-amber-300 transition-colors">AI Social & Ad Engines</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-amber-300 transition-colors">UI/UX & Web Design</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-amber-300 transition-colors">Packaging & Print Systems</button></li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onScrollToSection('portfolio')} className="hover:text-amber-300 transition-colors">Client Portfolio</button></li>
              <li><button onClick={() => onScrollToSection('clients')} className="hover:text-amber-300 transition-colors">50+ Client Stories</button></li>
              <li><button onClick={() => onScrollToSection('workflow')} className="hover:text-amber-300 transition-colors">Velocity Workflow</button></li>
              <li><button onClick={() => onScrollToSection('pricing')} className="hover:text-amber-300 transition-colors">Agency Pricing</button></li>
              <li><button onClick={() => onScrollToSection('faq')} className="hover:text-amber-300 transition-colors">FAQs & Guarantees</button></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>hello@uraan.agency</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>London • Dubai • New York</span>
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Sprint Queue Open (2 Spots Left)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-12 mt-12 border-t border-teal-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Uraan Creative Agency. All rights reserved. 100% Commercial Vector & IP Ownership.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="text-amber-400 font-mono">Flight Velocity // v4.2</span>
          </div>
        </div>
      </div>

    </footer>
  );
};