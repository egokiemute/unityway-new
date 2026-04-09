"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { MoveRight, ChevronDown, ChevronUp } from "lucide-react";
import { faqsContent } from "@/utils/contents/Homepage.Content";
import { IFaqItem } from "@/utils/types";

interface FaqSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  faqs?: IFaqItem[];
}

export default function FaqSection({
  badge = "FAQ",
  title = "Questions about domiciliary care",
  description = "Find quick answers about our domiciliary care services.",
  ctaLabel = "Book Care",
  ctaHref = "/booking",
  faqs = faqsContent,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-white px-2">
      <div className="container bg-primary-600 mx-auto flex flex-col md:flex-row lg:flex-row items-start gap-10 md:gap-16 px-6 lg:px-12 py-20 rounded-2xl">
        <div className="flex-1 space-y-6">
          <span className="inline-block rounded-full bg-white text-primary-700 px-4 py-1 text-sm font-medium w-fit">
            {badge}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold font-twk leading-snug text-black">
            {title}
          </h2>

          <p className="text-secondary-300 max-w-lg">{description}</p>

          <div className="pt-4">
            <Link href={ctaHref}>
              <Button
                type="button"
                style="primary"
                icon={<MoveRight />}
                iconPosition="right"
              >
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex-1 -z-0 relative w-full">
          <div className="space-y-4">
            {faqs.map((faq: IFaqItem, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 cursor-pointer transition"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-primary-700">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-secondary-100" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-secondary-100" />
                  )}
                </div>

                {openIndex === index && (
                  <p className="mt-3 text-sm text-secondary-400 leading-relaxed mr-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
