"use client";

import React from "react";
import Image from "next/image";

interface LogoMarqueeProps {
  logos: { src: string; alt: string }[];
  speed?: number; // control animation speed
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos, speed = 30 }) => {
  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Gradient fade on edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-10" />

      {/* Scrolling container */}
      <div className="flex w-max animate-marquee space-x-16">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center justify-center h-12">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        ))}

        {/* Duplicate for infinite loop */}
        {logos.map((logo, i) => (
          <div key={`dup-${i}`} className="flex items-center justify-center h-12">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee ${speed}s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
