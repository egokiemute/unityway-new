"use client";

import React from "react";
import Image from "next/image";
import { HeartPulse } from "lucide-react";

type Item = {
  text: string;
};

type WhyChooseUsProps = {
  heading: string;
  subtext: string;
  title: string;
  description: string;
  items: Item[];
  imageSrc: string;
};

export default function WhyChooseUs({
  heading,
  subtext,
  title,
  description,
  items,
  imageSrc,
}: WhyChooseUsProps) {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-20 bg-white">
      {/* Top Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-twk font-medium text-black">
          {heading}
        </h2>
        <p className="mt-4 text-[#6F6F6F] text-base md:text-lg">{subtext}</p>
      </div>

      {/* Main Card */}
      <div className="bg-[#F5F7FB] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h3 className="text-3xl md:text-5xl font-twk font-medium text-black leading-tight">
            {title}
          </h3>

          <p className="mt-6 text-[#6F6F6F] text-base md:text-lg leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Features Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white">
                  <HeartPulse size={14} />
                </div>
                <p className="text-[#1E1E1E] text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <Image
            src={imageSrc}
            alt="why choose us"
            width={512}
            height={512}
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
