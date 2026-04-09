"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { FeatureSectionProps } from "@/utils/types";
import { MoveRight } from "lucide-react";

const FeatureSection: React.FC<FeatureSectionProps> = ({
  badgeText,
  heading,
  description,
  bullets = [],
  cta,
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
}) => {
  return (
    <section className="w-full py-16 px-2 bg-white">
      <div
        className={`container mx-auto flex flex-col items-center gap-10 md:gap-16 lg:flex-row ${
          imagePosition === "left" ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          {/* Badge */}
          <span className="inline-block rounded-full bg-primary-300 text-primary-700 px-4 py-1 text-sm font-medium">
            {badgeText}
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold font-twk leading-snug">
            {heading}
          </h2>

          {/* Description */}
          <p className="text-secondary-200 max-w-lg">{description}</p>

          {/* Bullet Points */}
          {bullets.length > 0 && (
            <ul className="list-disc pl-6 space-y-2 text-secondary-200">
              {bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

          {/* CTA */}
          {cta && (
            <div className="pt-4">
              {cta.href ? (
                <a href={cta.href}>
                  <Button type="button" style="primary">
                    {cta.label}
                  </Button>
                </a>
              ) : (
                <Button
                  type="button"
                  style="primary"
                  onClick={cta.onClick}
                  icon={<MoveRight />}
                  iconPosition="right"
                >
                  {cta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="flex-1 -z-0 relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
