"use client";

import React from "react";
import {
  ArrowUpRight,
  Boxes,
  Layout,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { AGENCY_SERVICES } from "../data/agencyData";

const iconMap = {
  Sparkles,
  Megaphone,
  Boxes,
  Layout,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-[#051C1F] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Creative systems built
            <span className="text-amber-400"> to make brands fly.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            From brand identity to AI-powered digital experiences, we combine
            strategy, design, technology, and generative workflows into one
            creative system.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {AGENCY_SERVICES.map((service, index) => {
            const Icon =
              iconMap[service.icon as keyof typeof iconMap] || Sparkles;

            return (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.055]"
              >
                {/* Number */}
                <div className="absolute right-6 top-5 text-6xl font-black text-white/[0.025]">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10">
                  <Icon size={25} className="text-amber-400" />
                </div>

                {/* Category */}
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
                  {service.category}
                </p>

                {/* Title */}
                <h3 className="mt-3 max-w-xl text-2xl font-bold leading-tight text-white">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="mt-4 text-sm font-medium leading-6 text-slate-300">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

                {/* Metric */}
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-xs text-slate-500">Key Result</p>
                    <p className="mt-1 font-bold text-amber-400">
                      {service.metrics}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition group-hover:border-amber-400/30 group-hover:text-amber-400">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Hover glow */}
                <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent p-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-bold text-white">
              Need something completely custom?
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Tell us what you are building and we will design the creative
              system around it.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-[#051C1F] transition hover:bg-amber-300"
          >
            Talk to Our Team
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};