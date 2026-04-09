"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CaseStudyCardProps {
  category: string;
  logo: string;
  title: string;
  description: string;
  href: string;
}

const CaseStudyCard = ({
  category,
  logo,
  title,
  description,
  href,
}: CaseStudyCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col font-twk">
      {/* Category Badge */}
      <span className="inline-block bg-[#E6F0FF] text-[#047AF0] text-[10px] font-medium px-4 py-1 rounded-full mb-4 w-fit">
        {category}
      </span>

      {/* Logo aligned left */}
      <div className="flex items-center gap-2 mb-4">
        <Image
          width={200}
          height={120}
          src={logo}
          alt="logo"
          className="h-6 w-auto"
        />
      </div>

      {/* Title */}
      <h3 className="text-[24px] font-semibold text-[#0E152B] leading-[28px] mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[11px] text-[#999999] leading-relaxed mb-6">
        {description}
      </p>

      {/* Link */}
      <Link
        href={href}
        className="mt-auto text-[#047AF0] font-medium text-[14px] inline-flex items-center gap-2 hover:underline"
      >
        Read the full story <MoveRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default CaseStudyCard;
