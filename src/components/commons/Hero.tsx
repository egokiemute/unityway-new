"use client";
import React from "react";
import Button from "../ui/Button";
import { MoveRight } from "lucide-react";
import { HeroProps } from "@/utils/types";

export default function Hero({
  badgeText,
  badgeHighlight,
  heading,
  subtext,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="bg-white flex flex-col items-center justify-center py-32 mt-12 px-2 md:px-5 text-center">
      <div className="flex flex-col gap-6 items-center justify-center max-w-6xl mx-auto">
        {/* Badge (optional) */}
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

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-twk font-medium leading-[110%] text-black">
          {heading}
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-[16.54px] leading-[161%] font-twk text-[#6F6F6F] max-w-3xl">
          {subtext}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {primaryCta && (
            <div>
              {primaryCta?.href ? (
                <a href={primaryCta.href}>
                  <Button
                    type="button"
                    style="primary"
                    className="px-8 py-4"
                    icon={<MoveRight />}
                    iconPosition="right"
                    // onClick={primaryCta.onClick}
                  >
                    {primaryCta.label}
                  </Button>
                </a>
              ) : (
                <Button
                  type="button"
                  style="primary"
                  className="px-8 py-4"
                  icon={<MoveRight />}
                  iconPosition="right"
                  onClick={primaryCta.onClick}
                >
                  {primaryCta.label}
                </Button>
              )}
            </div>
          )}
          {secondaryCta && (
            <div>
              {secondaryCta?.href ? (
                <a href={secondaryCta?.href}>
                  <Button
                    type="button"
                    style="secondary"
                    className="px-8 py-4"
                    icon={<MoveRight />}
                    iconPosition="right"
                    // onClick={secondaryCta.onClick}
                  >
                    {secondaryCta.label}
                  </Button>
                </a>
              ) : (
                <Button
                  type="button"
                  style="secondary"
                  className="px-8 py-4"
                  icon={<MoveRight />}
                  iconPosition="right"
                  onClick={secondaryCta.onClick}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
