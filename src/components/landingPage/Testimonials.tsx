"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  companyLogo: string;
  avatar: string;
  quote: string;
}

interface TestimonialsProps {
  title?: string;
  badge?: string;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "What Our Clients Say",
  badge = "Testimonial",
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="pt-16 bg-white px-2">
      <div className="container bg-tertiary-100 mx-auto px-6 lg:px-12 py-20 rounded-2xl">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-block rounded-full bg-primary-300 text-primary-700 px-4 py-1 text-sm font-medium">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {title}
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-secondary-200">
                      {t.role}
                      {t.company ? `, ${t.company}` : ""}
                    </p>
                  </div>
                </div>
                <Image
                  src={t.companyLogo}
                  alt={t.company || t.role}
                  width={40}
                  height={20}
                />
              </div>
              <p className="text-sm font-medium text-secondary-200 leading-relaxed">
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="relative md:hidden">
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm w-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-xs text-secondary-200">
                      {testimonials[currentIndex].role}
                      {testimonials[currentIndex].company
                        ? `, ${testimonials[currentIndex].company}`
                        : ""}
                    </p>
                  </div>
                </div>
                <Image
                  src={testimonials[currentIndex].companyLogo}
                  alt={
                    testimonials[currentIndex].company ||
                    testimonials[currentIndex].role
                  }
                  width={40}
                  height={20}
                />
              </div>
              <p className="text-sm text-secondary-200 leading-relaxed">
                {testimonials[currentIndex].quote}
              </p>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
