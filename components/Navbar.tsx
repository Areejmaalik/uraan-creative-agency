"use client";

import React from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { UraanLogo } from "./UraanLogo";

interface NavbarProps {
  onOpenConsultation: () => void;
  onScrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onScrollToSection,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: "Services", id: "services" },
    { label: "AI Studio", id: "ai-lab" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Process", id: "workflow" },
    { label: "Pricing", id: "pricing" },
  ];

  const handleNavigation = (id: string) => {
    setIsOpen(false);
    onScrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#051C1F]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <button
          onClick={() => onScrollToSection("home")}
          className="shrink-0"
          aria-label="Go to homepage"
        >
          <UraanLogo size="md" />
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className="text-sm font-medium text-slate-300 transition hover:text-amber-400"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={onOpenConsultation}
          className="hidden items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-[#051C1F] transition hover:bg-amber-300 lg:flex"
        >
          Start a Project
          <ArrowUpRight size={16} />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#051C1F] px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-left text-base font-medium text-slate-200 hover:text-amber-400"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 font-bold text-[#051C1F]"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};