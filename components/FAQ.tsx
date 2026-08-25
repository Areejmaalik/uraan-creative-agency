"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { AGENCY_FAQS } from "../data/agencyData";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#061F22] py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
            <HelpCircle className="text-amber-400" size={28} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Questions?
            <span className="text-amber-400"> We&apos;ve got answers.</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="mt-12 space-y-4">
          {AGENCY_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-amber-400/30 bg-amber-400/[0.04]"
                    : "border-white/10 bg-white/[0.025]"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left"
                >
                  <span className="text-base font-semibold leading-6 text-white">
                    {faq.q}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-amber-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-7 text-slate-400">
                      {faq.a}
                    </p>
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