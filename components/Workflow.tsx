"use client";

import React from "react";
import {
  Search,
  Lightbulb,
  Palette,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your brand, audience, goals, competitors, and creative direction before touching the canvas.",
    icon: Search,
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Our designers combine strategic thinking with AI-assisted exploration to rapidly develop strong creative directions.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Design",
    description:
      "The selected direction is refined by our creative team into polished, consistent, production-ready assets.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We prepare every final asset for real-world use and deliver organized source files ready for your team.",
    icon: Rocket,
  },
];

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="bg-[#061F22] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            How We Work
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            From first idea
            <span className="text-amber-400"> to final flight.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A simple, transparent creative process designed for speed without
            sacrificing quality.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-gradient-to-r from-amber-400/10 via-amber-400/40 to-amber-400/10 lg:block" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative text-center"
                >
                  {/* Icon */}
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-amber-400/20 bg-[#061F22]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10 transition duration-300 group-hover:bg-amber-400/20">
                      <Icon
                        size={27}
                        className="text-amber-400 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Number */}
                  <p className="mt-7 text-xs font-black tracking-[0.3em] text-teal-300">
                    {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="absolute -right-5 top-10 hidden text-amber-400/40 lg:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Ready to turn your idea into something remarkable?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Start with a conversation. We&apos;ll help you define the right
            creative direction and build a roadmap from there.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-bold text-[#051C1F] transition hover:bg-amber-300"
          >
            Start Your Project
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};