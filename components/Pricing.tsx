"use client";

import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { PRICING_PLANS } from "../data/agencyData";

interface PricingProps {
  onOpenConsultation: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section id="pricing" className="bg-[#051C1F] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Simple Pricing
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Choose your
            <span className="text-amber-400"> creative flight plan.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Flexible creative support for startups, growing teams, and
            ambitious enterprise brands.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                plan.highlight
                  ? "border-amber-400/50 bg-gradient-to-b from-amber-400/[0.10] to-white/[0.035] shadow-[0_0_60px_rgba(245,197,24,0.08)]"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-black text-[#051C1F]">
                    <Sparkles size={13} />
                    Most Popular
                  </div>
                </div>
              )}

              <div>
                {plan.badge && (
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
                    {plan.badge}
                  </p>
                )}

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {plan.name}
                </h3>

                <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-7 border-y border-white/10 py-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>

                  <span className="pb-1 text-xs text-slate-500">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-7 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Includes
                </p>

                <ul className="mt-5 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
                        <Check size={13} className="text-amber-400" />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={onOpenConsultation}
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition ${
                  plan.highlight
                    ? "bg-amber-400 text-[#051C1F] hover:bg-amber-300"
                    : "border border-white/10 bg-white/5 text-white hover:border-amber-400/30 hover:bg-white/10"
                }`}
              >
                {plan.ctaText}
                <ArrowRight size={16} />
              </button>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Need a custom package?{" "}
            <button
              onClick={onOpenConsultation}
              className="font-semibold text-amber-400 hover:text-amber-300"
            >
              Talk to our team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};