"use client";

import React from "react";

interface UraanLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
}

export const UraanLogo: React.FC<UraanLogoProps> = ({
  className = "",
  size = "md",
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: { height: 28, text: "text-lg", subtitle: "text-[7px]" },
    md: { height: 38, text: "text-2xl", subtitle: "text-[9px]" },
    lg: { height: 52, text: "text-4xl", subtitle: "text-[12px]" },
    xl: { height: 72, text: "text-6xl", subtitle: "text-[16px]" },
  };

  const current = sizeMap[size];

  return (
    <div
      className={`inline-flex flex-col items-center select-none ${className}`}
    >
      <div className="flex items-center tracking-wider font-extrabold font-display leading-none">
        <span className="text-white font-extrabold tracking-widest">UR</span>

        <span className="text-white font-black px-[1px]">Λ</span>

        <div className="relative inline-flex items-center justify-center mx-[1px]">
          <span className="text-white font-black">Λ</span>

          <svg
            className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-[1.15em] h-[1.15em] text-amber-400 drop-shadow-[0_2px_8px_rgba(245,197,24,0.5)] transform rotate-[-8deg] hover:rotate-0 transition-transform duration-300 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="90,10 10,65 50,65" fill="#E5A910" />
            <polygon points="90,10 50,65 85,85" fill="#F5C518" />
            <polygon points="90,10 40,60 50,90" fill="#FFD84D" />
            <polygon
              points="50,65 50,90 65,75"
              fill="#C99008"
              opacity="0.9"
            />
          </svg>
        </div>

        <span className="text-white font-extrabold tracking-widest ml-[1px]">
          N
        </span>
      </div>

      {showSubtitle && (
        <span
          className={`text-slate-300 font-semibold tracking-[0.35em] uppercase font-sans mt-1 ${current.subtitle}`}
        >
          Creative Agency
        </span>
      )}
    </div>
  );
};