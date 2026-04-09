"use client";
import React, { ReactNode } from "react";

type Feature = {
  icon?: ReactNode;
  title: string;
  description: string;
};

type SubFeaturesProps = {
  bgColor?: string; // Tailwind class or HEX code
  headingColor?: string; // Tailwind class
  headingText?: string;
  features: Feature[];
};

const SubFeatures: React.FC<SubFeaturesProps> = ({
  bgColor = "bg-[#F1F8FF]",
  headingColor = "text-black",
  headingText = "Build, test, and evolve your SaaS pricing models—without engineering delays.",
  features,
}) => {
  return (
    <section className={`py-16 px-2 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className={`text-3xl md:text-4xl font-medium font-twk mb-12 max-w-4xl ${headingColor}`}>
          {headingText}
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-5 flex items-start gap-4"
            >
              {/* Icon */}
              {feature.icon && (
                <div className="bg-[#E6F0FF] p-1 rounded-full">
                  {feature.icon}
                </div>
              )}
              {/* Content */}
              <div>
                <h3 className="text-[15px] leading-[121%] font-twk font-[350] mb-1">{feature.title}</h3>
                <p className="text-[#272E35] text-[13.5px] font-twk">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubFeatures;
