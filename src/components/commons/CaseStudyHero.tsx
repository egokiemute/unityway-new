"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { MoveRight } from "lucide-react";

interface CaseStudyHeroProps {
  image: string;
  category: string;
  title: string;
  description: string;
  href?: string;
}

export default function CaseStudyHero({
  image,
  category,
  title,
  description,
  href = "#",
}: CaseStudyHeroProps) {
  return (
    <div className="max-w-[1200px] mx-2.5 md:mx-[40px] mb-15 font-twk">
      <div className="rounded-[16px] bg-[#0E152B] flex items-center overflow-hidden px-2 md:px-4 py-2 md:py-3">

        {/* LEFT: fixed image */}
        <div className="relative flex-shrink-0 w-[600px] h-[415px] ml-1 max-w-[220.6px] max-h-[150.047px] md:max-w-[600px] md:max-h-[415px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* RIGHT: text content */}
        <div className="flex-1 justify-center pl-4 md:pl-9 text-white font-twk">

          {/* Badge */}
          <span className="inline-block bg-[#D9EBFF] text-[#047AF0] rounded-full text-center px-[4.5px] py-[4px] text-[4px] leading-[4.819px] font-[350] tracking-[-0.06px] mb-[15px] md:w-auto md:px-3 md:py-2 md:text-[10px] md:leading-[14px] md:font-medium md:tracking-normal md:mb-[24px]">
            {category}
          </span>

          {/* Title */}
          <h2 className="text-[10px] leading-[12px] font-[400] mb-[6px] md:text-[26px] md:leading-[34px] md:font-semibold md:mb-[24px]">
            {title}
          </h2>

          {/* Description */}
          <p className="text-[#BCBCBC] text-[5.5px] leading-[9px] font-[300] mb-[10px] md:text-[12.5px] md:leading-[22px] md:font-normal md:max-w-[440px] md:mb-[24px]">
            {description}
          </p>

          {/* Button */}
          <Button
            type="button"
            style="primary"
            href={href}
            icon={<MoveRight className="w-2 h-2 md:w-5 md:h-5" />}
            iconPosition="right"
            className="!px-[4px] !py-[4px] !text-[5px] !leading-[6.779px] !font-[350] text-center !text-white rounded-full md:!px-4 md:!py-2 md:!text-base md:!leading-[20px] md:!font-medium md:!tracking-normal"
          >
            Read the full story
          </Button>
        </div>
      </div>
    </div>

  );
}
