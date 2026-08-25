'use client';
import React from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan?: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 bg-[#051C1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Transparent Creative Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Simple, High-Impact <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300">
              Agency Pricing Plans
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Whether you need a one-time brand flight sprint or an on-demand generative AI creative squad, we offer transparent pricing with zero lock-in.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-[#072C31] border-2 border-amber-400 shadow-2xl shadow-amber-400/15 lg:-translate-y-2'
                  : 'bg-[#062226] border border-teal-900/80 hover:border-teal-700 shadow-xl shadow-black/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-300 to-yellow-400 text-slate-950 shadow-md">
                  ★ MOST POPULAR FOR 50+ CLIENTS
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                    {plan.badge || 'Creative Tier'}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-display">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="py-4 border-y border-teal-900/80">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white font-display">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    What's Included:
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onSelectPlan && onSelectPlan(plan)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-200 hover:to-yellow-300 text-slate-950 shadow-lg shadow-amber-400/25'
                      : 'bg-[#093237] hover:bg-[#0D3F45] text-white border border-teal-800'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="p-6 rounded-2xl bg-[#062226] border border-teal-900/80 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-white">100% Satisfaction & Commercial Copyright Guarantee</h4>
            <p className="text-xs text-slate-400">We don't stop until you have wings. All vector master files and commercial IP rights belong to you 100%.</p>
          </div>
        </div>

      </div>
    </section>
  );
};