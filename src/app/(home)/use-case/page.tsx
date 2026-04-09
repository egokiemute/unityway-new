"use client";
import React from "react";
import Hero from "@/components/commons/Hero";
import CaseStudiesGrid from "@/components/commons/CaseStudiesGrid";
import BookADemoSection from "@/components/BookADemoSection";
import Clients from "@/components/landingPage/Clients";
import { CASE_STUDIES_GRID } from "@/utils/caseStudies"; // <-- use the grid array here
import CaseStudyHero from "@/components/commons/CaseStudyHero";

export default function page() {
  return (
    <section className="px-3 sm:px-4 lg:px-5 py-10 mx-auto font-twk">
      <div className="[&>section]:pb-2">
        <Hero
          badgeHighlight="New"
          badgeText="Entitlements Billing Feature"
          heading="How Fast-Growing companies simplify complex billing with ClearPrice"
          subtext="Discover how teams across SaaS, energy, and APIs scale operations and revenue with our platform. Explore success stories from forward-thinking teams who automated and scaled their billing."
        />
      </div>

      {/* Featured card */}
      <CaseStudyHero
        image="/images/usecase1.png"
        category="Featured Company Case Study"
        title="How Saafa energy revamped Revenue Ops with ClearPrice."
        description="With over 100,000 households on their energy lease program, Saafa Energy needed a billing solution that could support complex usage models, multiple contract types, and regional pricing."
        href="/usecase/saas"
      />

      {/* Case Studies Grid */}
      <CaseStudiesGrid data={CASE_STUDIES_GRID} /> {/* <-- simply pass the grid array */}

      <Clients />
      <BookADemoSection />
    </section>
  );
}
