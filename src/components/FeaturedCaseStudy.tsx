import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import { FaArrowRight } from "react-icons/fa";

export const FeaturedCaseStudy = () => {
  return (
    <section className="px-6 md:px-10 py-10 mx-auto -mt-20">
      <div className="p-4 md:p-6 pb-8 md:pb-6 bg-[#0E152B] container grid grid-cols-1 md:grid-cols-2 gap-12 rounded-2xl items-center justify-center overflow-hidden">
        <div className="md:w-[660px] md:h-[390px] object-cover rounded-4xl">
          <Image
            src="/images/case-study.jpg"
            alt="Case Study"
            width={600}
            height={600}
            className="w-[500px] md:w-[701px] h-[240px] md:h-[390px] object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col items-start gap-6 max-w-xl">
          <span className="bg-[#D9EBFF] text-[#047AF0] text-[14.73px] leading-[161%] py-[12.27px] px-[15.95px] rounded-full w-fit font-medium">
            Featured Company Case Study
          </span>
          <h2 className="text-[30px] leading-[121%] font-twk text-white font-normal">
            How Saafa energy revamped Revenue Ops with ClearPrice.
          </h2>
          <p className="text-[14px] text-[#BCBCBC] leading-[149%] font-twk">
            With over 100,000 households on their energy lease program, Saafa
            Energy needed a billing solution that could support complex usage
            models, multiple contract types, and regional pricing.
          </p>

          <Button
            type="button"
            style="primary"
            icon={<FaArrowRight />}
            iconPosition="right"
            className="py-3 px-6 text-lg font-twk"
          >
            Read the full story
          </Button>
        </div>
      </div>
    </section>
  );
};
