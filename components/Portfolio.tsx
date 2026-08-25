"use client";

import React, { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "../data/agencyData";

const categories = [
  "All",
  "Branding",
  "UI/UX",
  "Packaging",
  "3D & Motion",
  "Marketing",
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="portfolio" className="bg-[#061F22] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Work that makes
              <span className="text-amber-400"> an impact.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Explore selected projects where strategy, visual design and
              generative AI came together to create measurable results.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            {PORTFOLIO_PROJECTS.length} featured projects
          </div>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-amber-400 bg-amber-400 text-[#051C1F]"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-amber-400/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#051C1F] via-transparent to-transparent opacity-90" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-[#051C1F] transition group-hover:scale-110">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
                  {project.client}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="mt-6 flex items-center justify-between border-y border-white/10 py-5">
                  <div>
                    <p className="text-xs text-slate-500">
                      {project.stats.label}
                    </p>

                    <p className="mt-1 text-xl font-black text-amber-400">
                      {project.stats.value}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-500">Year</p>
                    <p className="mt-1 font-semibold text-white">
                      {project.year}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* AI tools */}
                <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                  <span>AI tools:</span>

                  <span className="text-slate-300">
                    {project.aiToolsUsed.join(" • ")}
                  </span>
                </div>

                {/* Quote */}
                {project.clientQuote && (
                  <div className="mt-6 rounded-2xl border border-amber-400/10 bg-amber-400/[0.04] p-5">
                    <p className="text-sm italic leading-6 text-slate-300">
                      “{project.clientQuote}”
                    </p>

                    {project.clientAuthor && (
                      <p className="mt-3 text-xs font-semibold text-amber-400">
                        {project.clientAuthor}
                      </p>
                    )}
                  </div>
                )}

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-amber-400">
                  View Case Study
                  <ExternalLink size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-amber-400/10 bg-gradient-to-r from-amber-400/[0.08] to-transparent p-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Want your brand featured here?
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Let&apos;s build something worth putting in the portfolio.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-bold text-[#051C1F] transition hover:bg-amber-300"
            >
              Start a Project
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};