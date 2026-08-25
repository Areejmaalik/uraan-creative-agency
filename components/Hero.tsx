"use client";

import React from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";

interface HeroProps {
  onScrollToSection: (id: string) => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToSection,
  onOpenConsultation,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#051C1F] pt-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-teal-400/10 blur-[120px]" />

        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-[120px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 bg-radial-grid opacity-40" />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          
          {/* Left content */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-300">
              <Sparkles size={15} />
              AI-Powered Creative Agency
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Give Your Brand
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Wings to Fly.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Uraan Creative Agency combines human artistry with AI-powered
              design workflows to create unforgettable brands, digital
              experiences, 3D visuals, and marketing assets.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-bold text-[#051C1F] transition hover:bg-amber-300"
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => onScrollToSection("portfolio")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-amber-400/40 hover:bg-white/10"
              >
                <Play size={17} />
                Explore Our Work
              </button>
            </div>

            {/* Metrics */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-7">
              <div>
                <div className="text-2xl font-black text-white">50+</div>
                <div className="mt-1 text-xs text-slate-400">
                  Global Clients
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-white">2,400+</div>
                <div className="mt-1 text-xs text-slate-400">
                  Assets Delivered
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-white">48h</div>
                <div className="mt-1 text-xs text-slate-400">
                  Avg. Turnaround
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-square">
              
              {/* Outer glow */}
              <div className="absolute inset-10 rounded-full bg-amber-400/10 blur-3xl" />

              {/* Main card */}
              <div className="absolute inset-8 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-8 shadow-2xl backdrop-blur-xl">
                
                <div className="flex h-full flex-col justify-between">
                  
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                        Uraan
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        Creative Intelligence
                      </p>
                    </div>

                    <div className="rounded-full border border-amber-400/30 bg-amber-400/10 p-3">
                      <Sparkles className="text-amber-400" size={20} />
                    </div>
                  </div>

                  {/* Abstract graphic */}
                  <div className="relative flex flex-1 items-center justify-center">
                    <div className="absolute h-52 w-52 rounded-full border border-amber-400/20" />
                    <div className="absolute h-40 w-40 rounded-full border border-teal-400/20" />
                    <div className="absolute h-28 w-28 rounded-full bg-gradient-to-br from-amber-300 to-yellow-600 shadow-[0_0_80px_rgba(245,197,24,0.35)]" />

                    <div className="relative z-10 rotate-[-8deg] text-7xl font-black text-white drop-shadow-2xl">
                      Λ
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <p className="text-xs text-slate-500">Design</p>
                      <p className="mt-1 font-semibold text-white">
                        Human + AI
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <p className="text-xs text-slate-500">Delivery</p>
                      <p className="mt-1 font-semibold text-white">
                        48 Hour Sprint
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute left-0 top-1/4 rounded-2xl border border-white/10 bg-[#0a292c]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                <div className="text-xs text-slate-400">Brand Identity</div>
                <div className="mt-1 font-bold text-amber-400">
                  100% Vector
                </div>
              </div>

              <div className="absolute bottom-1/4 right-0 rounded-2xl border border-white/10 bg-[#0a292c]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                <div className="text-xs text-slate-400">Creative Output</div>
                <div className="mt-1 font-bold text-teal-300">
                  4K / 60 FPS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#051C1F] to-transparent" />
    </section>
  );
};