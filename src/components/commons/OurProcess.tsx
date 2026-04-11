"use client";

import React from "react";
import Image from "next/image";
import { HeartPulse } from "lucide-react";

type ProcessItem = {
  title: string;
  description: string;
};

type OurProcessProps = {
  heading: string;
  subtext: string;
  items: ProcessItem[];
  imageSrc: string;
};

export default function OurProcess({
  heading,
  subtext,
  items,
  imageSrc,
}: OurProcessProps) {
  return (
    <section className="py-24 pb-32 px-4 md:px-10 lg:px-20 bg-[#F9FAFB]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-twk font-medium text-black leading-tight">
          {heading}
        </h2>
        <p className="mt-4 text-[#6F6F6F] text-base md:text-lg leading-relaxed">
          {subtext}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
        {/* LEFT */}
        <div className="flex flex-col justify-between h-full">
          {items.slice(0, 2).map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center">
          <Image
            src={imageSrc}
            alt="process"
            width={640}
            height={480}
            className="rounded-2xl w-full h-full max-h-[30rem] object-cover shadow-md"
          />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between h-full">
          {items.slice(2, 4).map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Card Component */
function Card({ title, description }: ProcessItem) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 text-white mb-4">
        <HeartPulse size={20} />
      </div>

      <h3 className="text-lg font-medium text-black mb-2">{title}</h3>

      <p className="text-sm text-[#6F6F6F] leading-relaxed">{description}</p>
    </div>
  );
}
