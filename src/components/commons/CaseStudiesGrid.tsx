"use client";

import React from "react";
import CaseStudyCard from "./CaseStudyCard";

interface CaseStudiesGridProps {
  data: {
    category: string;
    logo: string;
    title: string;
    description: string;
    href: string;
  }[];
}

export default function CaseStudiesGrid({ data }: CaseStudiesGridProps) {
  return (
    <section className="bg-[#F2FBF7] py-10">
      <div className="max-w-7xl mx-[35px] md:mx-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <CaseStudyCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
