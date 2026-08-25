"use client";

import React from "react";
import { FEATURED_CLIENTS } from "../data/agencyData";

export const ClientsTicker: React.FC = () => {
  return (
    <section className="border-y border-white/10 bg-[#061F22] py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Trusted by forward-thinking teams
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {FEATURED_CLIENTS.map((client) => (
            <div
              key={client.name}
              className="group rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition hover:border-amber-400/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${client.logoAccent} text-xs font-black text-[#051C1F]`}
                >
                  {client.ticker.slice(0, 2)}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {client.name}
                  </p>

                  <p className="mt-1 truncate text-[11px] text-slate-500">
                    {client.industry}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};