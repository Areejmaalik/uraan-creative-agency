'use client';
import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { PortfolioProject } from '../types';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Branding', 'UI/UX', '3D & Motion', 'Packaging'];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="portfolio" className="py-24 bg-[#041618] border-t border-teal-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Proven Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Selected Works & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300">
              Generative Case Studies
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Explore how we give wings to brands across the globe through generative AI workflows and immaculate vector mastery.
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-400/20'
                  : 'bg-[#062226] text-slate-300 hover:text-white border border-teal-900/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl bg-[#062226] border border-teal-900/80 overflow-hidden hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xl shadow-black/40"
            >
              {/* Image Preview */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062226] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#041618]/90 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                  {project.category}
                </span>
                <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-slate-300">
                  {project.year}
                </span>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                    {project.client}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-teal-950 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-[10px] text-slate-400 block">{project.stats.label}</span>
                    <span className="font-extrabold text-amber-400 font-mono text-sm">{project.stats.value}</span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#08292D] border border-amber-400/30 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 text-amber-300 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};