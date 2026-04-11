"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { MoveRight } from "lucide-react";
import { HeroProps } from "@/utils/types";

const images = [
  "/images/after.jpg",
  "/images/home-hero-img.jpg",
  "/images/services/line-in.jpg",
  "/images/services/mobility.jpg",
];

export default function Hero({
  badgeText,
  badgeHighlight,
  heading,
  subtext,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="bg-white flex flex-col items-center justify-center py-32 mt-12 px-2 md:px-5 text-center overflow-hidden">
      {/* Content */}
      <div className="flex flex-col gap-6 items-center justify-center max-w-3xl mx-auto z-10">
        {badgeText && (
          <div className="flex items-center gap-2 bg-[#F1F8FF] rounded-full px-4 py-2 w-fit shadow-sm">
            {badgeHighlight && (
              <span className="flex items-center justify-center bg-[#0E152B] text-white px-2 py-0.5 text-xs rounded-full">
                {badgeHighlight}
              </span>
            )}
            <p className="font-twk text-sm text-[#545454]">{badgeText}</p>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-twk font-medium leading-[110%] text-black">
          {heading}
        </h1>

        <p className="text-base md:text-[16.54px] leading-[161%] font-twk text-[#6F6F6F] max-w-3xl">
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

          {secondaryCta && (
            <a href={secondaryCta.href}>
              <Button
                type="button"
                style="secondary"
                className="px-8 py-4"
                icon={<MoveRight />}
                iconPosition="right"
              >
                {secondaryCta.label}
              </Button>
            </a>
          )}
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
