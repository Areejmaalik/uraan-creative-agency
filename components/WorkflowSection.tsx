'use client';
import React from 'react';
import { Sparkles, Wand2, Layers, Cpu, Rocket, CheckCircle2 } from 'lucide-react';

interface WorkflowSectionProps {
  onOpenConsultation?: () => void;
  onScrollToSection?: (id: string) => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ 
  onOpenConsultation, 
  onScrollToSection 
}) => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Neural Moodboard",
      duration: "Day 1 (24 Hours)",
      description: "We analyze your brand positioning, competitors, and target audience. Our AI engine generates 100+ moodboard explorations, color harmonic variations, and typographic tokens for rapid visual alignment.",
      icon: Wand2,
      badge: "Instant Concepting"
    },
    {
      number: "02",
      title: "Senior Human Vector Craftsmanship",
      duration: "Days 2-3",
      description: "Our senior Art Directors handcraft the winning concepts into pixel-perfect Bézier vector geometry, 3D asset models, and scalable Figma design systems with immaculate attention to detail.",
      icon: Layers,
      badge: "Vector Mastery"
    },
    {
      number: "03",
      title: "AI Synthesis & Multi-Channel Scale",
      duration: "Days 4-5",
      description: "We deploy generative AI pipelines to expand your approved visual identity into 30+ omni-channel assets: social ad batches, 3D motion renders, physical packaging die-lines, and web hero graphics.",
      icon: Cpu,
      badge: "Scale Velocity"
    },
    {
      number: "04",
      title: "Flight Handoff & Brand LoRA Delivery",
      duration: "Final Delivery",
      description: "Receive full commercial copyright ownership, open source files (.AI, .SVG, .FIG, .PSD, .PNG), 4K renders, plus a custom AI Prompt Playbook so your team can maintain brand consistency forever.",
      icon: Rocket,
      badge: "100% IP Ownership"
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#041618] border-t border-teal-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Uraan Velocity Framework</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            How We Take Your Brand to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300">
              Cruising Altitude in Days
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Traditional agencies take 8-12 weeks for brand identity deliverables. Here is how Uraan compresses that timeline into 5 days of flawless precision.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-[#062226] border border-teal-900/80 p-6 space-y-4 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-amber-400/90 font-mono">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#04191C] text-emerald-400 border border-emerald-900/60">
                      {step.duration}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="pt-4 border-t border-teal-900/60 flex items-center gap-1.5 text-[11px] font-semibold text-amber-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{step.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Action Banner */}
        <div className="rounded-2xl p-8 bg-gradient-to-r from-[#08292D] via-[#0B353A] to-[#08292D] border border-amber-400/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Ready to experience high-velocity design?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              No bloated retainers. No endless revision loops. Just pure graphic craftsmanship backed by generative AI speed.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-300 to-yellow-400 hover:from-amber-200 hover:to-yellow-300 shadow-md shadow-amber-400/20 transition-all"
              >
                Book 30-Min Discovery
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};