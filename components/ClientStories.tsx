"use client";

import React from "react";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import { CLIENT_STORIES } from "../data/agencyData";

export const ClientStories: React.FC = () => {
  return (
    <section id="stories" className="bg-[#051C1F] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Client Stories
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Trusted by teams
            <span className="text-amber-400"> going further.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            We measure success by the impact our creative work creates for
            ambitious brands.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {CLIENT_STORIES.map((story) => (
            <article
              key={story.id}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-600 font-black text-[#051C1F]">
                        {story.name.slice(0, 2).toUpperCase()}
                      </div>

                      <div>
                        <h3 className="font-bold text-white">
                          {story.name}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          {story.industry}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Quote className="text-amber-400/50" size={30} />
                </div>

                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
                    Project Scope
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {story.projectScope}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                    <p className="text-xs text-slate-500">
                      Assets Delivered
                    </p>

                    <p className="mt-2 text-2xl font-black text-white">
                      {story.deliveredAssets}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                    <p className="text-xs text-slate-500">
                      Highlight
                    </p>

                    <p className="mt-2 text-sm font-semibold leading-5 text-amber-400">
                      {story.highlight}
                    </p>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-amber-400/10 bg-amber-400/[0.035] p-6">
                  <div className="flex gap-1">
                    {Array.from({
                      length: story.testimonial.rating,
                    }).map((_, index) => (
                      <Star
                        key={index}
                        size={15}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-base leading-7 text-slate-200">
                    “{story.testimonial.quote}”
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={story.testimonial.avatar}
                      alt={story.testimonial.author}
                      className="h-10 w-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="text-sm font-bold text-white">
                        {story.testimonial.author}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {story.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-amber-400">
                  Read Full Story
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};