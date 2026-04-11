"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { HeartPulse, MoveRight } from "lucide-react";
import { HeroProps } from "@/utils/types";

const images = [
  "/images/after.jpg",
  "/images/home-hero-img.jpg",
  "/images/services/line-in.jpg",
  "/images/services/mobility.jpg",
];

export default function ServiceHero({
  heading,
  subtext,
  primaryCta,
}: HeroProps) {
  return (
    <section className="bg-white flex flex-col items-center justify-center py-32 px-2 md:px-5 text-center overflow-hidden">
      {/* Content */}
      <div className="flex flex-row gap-6 items-center justify-between z-10 w-full">
        <div className="flex flex-col gap-6 items-start justify-start max-w-xl">
          <h1 className="text-4xl md:text-5xl font-twk font-medium leading-[110%] text-start text-black">
            {heading}
          </h1>
          <p className="text-base md:text-[16.54px] text-start leading-[161%] font-twk text-[#6F6F6F] max-w-3xl">
            {subtext}
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {primaryCta && (
              <a href={primaryCta.href}>
                <Button
                  type="button"
                  style="primary"
                  className="px-8 py-4"
                  icon={<MoveRight />}
                  iconPosition="right"
                >
                  {primaryCta.label}
                </Button>
              </a>
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center justify-end w-full">
          <div className="flex items-center justify-between gap-4 bg-[#F7F7F7] rounded-xl px-4 py-3 shadow-sm max-w-3xl">
            {/* Avatars */}
            <div className="flex space-x-2">
              {[
                "/images/services/book-care.jpg",
                "/images/services/home-routine.jpg",
                "/images/services/line-in.jpg",
                "/images/services/medical-support.jpg",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="user"
                  width={128}
                  height={208}
                  className="w-32 h-52 object-cover rounded-sm"
                />
              ))}
            </div>

            <div className="flex flex-col gap-4 justify-between h-full sm:hidden lg:flex">
              {/* Text */}
              <p className="text-sm text-start text-gray-600 leading-snug px-2">
                <span className="font-semibold text-black">95%</span> of
                patients
                <br />
                recommend us
                <br />
                to their friends.
              </p>
              <div className="bg-blue-400 w-full h-full p-6 text-center flex items-center justify-center rounded-lg">
                <HeartPulse size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel UNDER content */}
      <div className="w-full mt-16 relative overflow-hidden">
        {/* Images */}
        <div className="flex gap-6 animate-scroll">
          {[...images, ...images].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="care"
              width={480}
              height={368}
              className="h-40 md:h-92 w-auto rounded-2xl object-cover"
            />
          ))}
        </div>

        {/* LEFT fade */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* RIGHT fade */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
