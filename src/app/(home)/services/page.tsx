import type { Metadata } from "next";
import React from "react";
import BookADemoSection from "@/components/BookADemoSection";
import Hero from "@/components/commons/Hero";
import BlogGrid from "@/components/commons/BlogGrid";
import FaqSection from "@/components/landingPage/FaqSection";

const servicesFaqs = [
  {
    question: "What domiciliary care services do you provide?",
    answer:
      "We provide personal care, medication support, companionship, meal preparation, mobility assistance, home environment support, household routine support, specialist care, and live-in care.",
  },
  {
    question: "Can care be personalised?",
    answer:
      "Yes. We tailor care plans around individual needs, routines, preferences, and the level of support required at home.",
  },
  {
    question: "Can support be arranged for short-term or ongoing care?",
    answer:
      "Yes. Depending on what is needed, we can discuss temporary support, regular scheduled visits, or longer-term arrangements.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can use the booking form, call our team, or contact us directly and we will help you arrange the right domiciliary care.",
  },
];

export const metadata: Metadata = {
  title: "Domiciliary Care Services",
};

export default function Page() {
  return (
    <section className="px-3 sm:px-4 lg:px-5 py-10 mx-auto">
      <Hero
        badgeText="Domiciliary Care"
        heading="Domiciliary Care Services"
        subtext="Our domiciliary care services support daily living, independence, dignity, and wellbeing at home."
        primaryCta={{
          label: "Book Care",
          href: "/booking",
        }}
        secondaryCta={{
          label: "Contact Us",
          href: "/contact",
        }}
      />

      <hr className="border-t border-gray-200 mx-[86px]" />

      <BlogGrid />

      <BookADemoSection
        title="Need domiciliary care at home?"
        description="We provide personalised care tailored to your needs and routine."
        buttonLabel="Book Care"
        buttonHref="/booking"
      />

      <FaqSection
        badge="FAQ"
        title="Questions about domiciliary care"
        description="Get quick answers about our domiciliary care services."
        ctaLabel="Book Care"
        ctaHref="/booking"
        faqs={servicesFaqs}
      />
    </section>
  );
}
