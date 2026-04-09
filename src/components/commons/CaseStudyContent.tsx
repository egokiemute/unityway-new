"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";
import { CaseStudy } from "@/utils/caseStudies";

interface CaseStudyContentProps {
  study: CaseStudy;
}

const sectionsOrder = [
  "Introduction",
  "Challenge",
  "The Ideal Solution",
  "Why Saafa Energy Chose ClearPrice",
  "Results",
  "Quote",
  "Conclusion",
];

export default function CaseStudyContent({ study }: CaseStudyContentProps) {
  const [active, setActive] = useState<string>("Introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sectionsOrder.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const highlightSections = study.greenHighlights;

  // Reorder sections so quote is always before conclusion
  // const orderedSections = [
  //   ...study.sections?.filter(
  //     (s) => s.id !== "quote" && s.id !== "conclusion"
  //   )!,
  //   study.sections.find((s) => s.id === "quote")!,
  //   study.sections.find((s) => s.id === "conclusion")!,
  // ].filter(Boolean);


  const orderedSections = [
  ...(study.sections?.filter(
    (s) => s.id !== "quote" && s.id !== "conclusion"
  ) ?? []),
  study.sections?.find((s) => s.id === "quote"),
  study.sections?.find((s) => s.id === "conclusion"),
].filter(Boolean);

  return (
    <main className="mt-6 md:mt-12 w-full">
      {/* Hero Image Card */}
      <div className="relative max-w-[1200px] mx-3 md:mx-[30px] rounded-[5.8px] md:rounded-[20px] overflow-hidden shadow-lg h-[150.819px] md:h-[390px]">
        <Image
          src={study.heroImage}
          alt={study.title}
          fill
          className="object-cover"
          priority
        />
        <Button
          type="button"
          style="secondary"
          icon={<ArrowDown className="w-4 h-4" />}
          iconPosition="right"
          className="absolute left-1/2 -translate-x-1/2 bottom-10 md:bottom-22 px-3 py-1 md:px-6 md:py-3 bg-white text-[#047AF0] rounded-full !text-[8px] md:!text-base leading-[8px]"
        >
          Read the full story
        </Button>
      </div>

      <section className="bg-[#0E152B] rounded-[20px] mx-3 md:mx-[40px] max-w-[1200px] mt-6 md:mt-12 flex shadow-lg !font-twk">
        <div className="flex-1 px-4 py-6 md:px-12 md:py-12">
          <Image
            src={study.logo}
            alt={`${study.title} logo`}
            className="h-5 md:h-8 mb-2 md:mb-6"
            width={600}
            height={500}
          />
          <p className="text-[#EBEBEB] text-[5.8px] leading-[159%] pt-2 mb-4 md:text-[14px] md:leading-relaxed md:pt-3 md:mb-10">
            {study.subtitle}
          </p>
          <div className="space-y-3 md:space-y-6 text-[5.8px] md:text-[14px] text-[#EBEBEB] leading-[159%]">
            <p>
              <span className="text-[#047AF0] font-[350]">Industry:</span>{" "}
              {study.industry}
            </p>
            <p>
              <span className="text-[#047AF0] font-[350]">Size:</span>{" "}
              {study.size}
            </p>
          </div>
        </div>

        <div className="w-px bg-[#555] my-auto h-35 md:h-75"></div>

        <div className="flex-1 px-4 py-6 md:px-10 md:py-12 space-y-3 md:space-y-6">
          {highlightSections?.length ? (
            highlightSections.map((s) => (
              <div key={s.id}>
                <h4 className="text-[#047AF0] text-[7px] leading-[159%] mb-2 md:!text-[20px] md:leading-relaxed md:mb-3">
                  {s.heading}
                </h4>
                <p className="text-[#EBEBEB] text-[5.8px] md:text-[14px] font-[300] leading-[159%]">
                  {Array.isArray(s.body) ? s.body.join(" ") : s.body}
                </p>
              </div>
            ))
          ) : (
            <p className="text-[#EBEBEB] text-[5.8px] md:text-[14px]">
              Content coming soon.
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1130px] w-full mx-auto px-6 mt-16 scroll-smooth">
        {/* Mobile TOC */}
        <aside className="block md:hidden bg-[#F1F8FF] rounded-xl p-6 mb-10">
          <h3 className="text-[19.4px] font-semibold text-[#545454] mb-4">
            Table of Contents
          </h3>
          <nav className="flex flex-col space-y-2">
            {sectionsOrder.map((sId) => (
              <a
                key={sId}
                href={`#${sId}`}
                className={clsx(
                  "px-3 py-2 rounded-lg text-[16px] font-medium transition-colors",
                  active === sId
                    ? "bg-[#047AF0] text-white"
                    : "text-[#545454] hover:bg-[#E6F0FF]"
                )}
              >
                {sId}
              </a>
            ))}
          </nav>
        </aside>

        <div className="grid grid-cols-1 md:grid-cols-[316px_774px]">
          {/* Desktop TOC */}
          <aside className="hidden md:block sticky top-24 self-start bg-[#F1F8FF] rounded-xl p-3 h-fit">
            <h3 className="md:text-[17px] font-medium text-[#545454] mb-4">
              Table of Contents
            </h3>
            <nav className="flex flex-col">
              {sectionsOrder.map((sId) => (
                <a
                  key={sId}
                  href={`#${sId}`}
                  className={clsx(
                    "px-3 py-2 rounded-lg md:text-[13px] font-medium transition-colors",
                    active === sId
                      ? "bg-[#047AF0] text-white"
                      : "text-[#0E152B] hover:bg-[#E6F0FF]"
                  )}
                >
                  {sId}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content Sections */}
          <div className="flex flex-col md:px-10 md:items-start md:gap-[30px] space-y-12 md:space-y-0 font-twk">
            {orderedSections.map((s, idx) => {
              if (!s) return null;
              if (s.id === "quote") {
                return (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <div className="bg-[#E6F0FF] rounded-[12px] px-4 py-6 md:px-10 md:py-10 flex flex-row items-start justify-between gap-4 md:gap-8">
                      <div className="flex-1 pr-2 md:pr-4">
                        <blockquote className="text-[#000] text-[12px] md:text-[21px] leading-[159%] font-light mb-3 md:mb-6">
                          {Array.isArray(s.body) ? s.body[0] : s.body}
                        </blockquote>
                        <p className="text-[#000] text-[10px] md:text-[16px] mb-1">
                          {study.quote?.author}
                        </p>
                        <p className="text-[#000] text-[10px] md:text-[14px] font-normal">
                          {study.quote?.role}
                        </p>
                      </div>
                      {study.quote?.avatar && (
                        <div className="flex-shrink-0">
                          <Image
                            src={study.quote.avatar}
                            alt={study.quote.author}
                            width={176}
                            height={176}
                            className="hidden md:block rounded-full object-cover"
                          />
                          <Image
                            src={study.quote.avatar}
                            alt={study.quote.author}
                            width={90}
                            height={90}
                            className="block md:hidden rounded-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </section>
                );
              }

              return (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-[#047AF0] text-[16px] md:text-[20px] font-medium mb-4">
                    {s.heading}
                  </h2>
                  {Array.isArray(s.body) ? (
                    <div>
                      {s.body.map((item, idx2) => {
                        const firstItem = idx2 === 0;
                        const lastItem =
                          (s.id === "challenge" || s.id === "why-clearprice") &&
                          idx2 === s.body.length - 1;

                        if (
                          firstItem ||
                          lastItem ||
                          ((s.id === "solution" || s.id === "results") &&
                            firstItem)
                        ) {
                          return (
                            <p
                              key={idx2}
                              className="text-[#000] text-[14px] md:text-[16.54px] leading-[161%] mb-2"
                            >
                              {item}
                            </p>
                          );
                        }

                        return (
                          <ul
                            key={idx2}
                            className="list-disc pl-6 text-[#000] text-[14px] md:text-[16.54px] leading-[161%] mb-2"
                          >
                            <li>{item}</li>
                          </ul>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-[#000] text-[14px] md:text-[16.54px] leading-[161%]">
                      {s.body}
                    </p>
                  )}

                  {/* Insert HR between sections except after quote */}
                  {s.id !== "quote" && idx !== orderedSections.length - 1 && (
                    <hr className="border-t border-[#E9E9E9] md:my-6 my-4" />
                  )}

                  {/* Additional HR after Conclusion */}
                  {s.id === "conclusion" && (
                    <hr className="border-t border-[#E9E9E9] md:my-6 my-4" />
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
