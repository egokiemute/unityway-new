"use client";
import BookADemoSection from "@/components/BookADemoSection";
import Hero from "@/components/commons/Hero";
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import Clients from "@/components/landingPage/Clients";
import React from "react";

export default function page() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-12 mx-auto">
      <Hero
        badgeHighlight="New"
        badgeText="Entitlements Billing Feature"
        heading="How Fast-Growing companies simplify complex billing with ClearPrice"
        subtext="Discover how teams across SaaS, energy, and APIs scale operations and revenue with our platform. Explore success stories from forward-thinking teams who automated and scaled their billing."
      />
      <FeaturedCaseStudy />
      <Clients />
      <BookADemoSection />
    </div>
  );
}
