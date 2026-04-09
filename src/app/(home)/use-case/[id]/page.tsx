import { notFound } from "next/navigation";
import Hero from "@/components/commons/Hero";
import CaseStudyContent from "@/components/commons/CaseStudyContent";
import CaseStudyCard from "@/components/commons/CaseStudyCard";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { baseCaseStudy, CASE_STUDIES_GRID, CaseStudy } from "@/utils/caseStudies";

interface UseCasePageProps {
  params: { id: string };
}

export default function UseCasePage({ params }: UseCasePageProps) {
  const { id } = params;

  // ✅ If id is "1", use full baseCaseStudy, else use array-based data with default content
  const study: CaseStudy =
    id === "1"
      ? baseCaseStudy
      : {
          ...baseCaseStudy,
          ...CASE_STUDIES_GRID.find((c) => c.id === id),
        };

  if (!study) return notFound();

  // ✅ Keep reading: pick first 3 other studies
  const keepReading = CASE_STUDIES_GRID.filter((c) => c.id !== id).slice(0, 3);

  return (
    <section className="px-3 sm:px-4 lg:px-5 py-10 mx-auto font-twk">
      <div className="[&>section]:pb-2">
        <Hero
          badgeHighlight="New"
          badgeText="Entitlements Billing Feature"
          heading="How Saafa energy revamped Revenue Ops with ClearPrice."
          subtext="Discover how teams across SaaS, energy, and APIs scale operations and revenue with our platform. Explore success stories from forward-thinking teams who automated and scaled their billing."
        />
      </div>

      <CaseStudyContent study={study} />

      <div className="bg-[#F2FBF7] py-10 mt-20">
        <div className="max-w-7xl mx-[35px] md:mx-[40px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-18">
            <h2 className="text-2xl font-semibold text-[#043522]">Keep Reading</h2>
            <Link
              href="/usecase"
              className="inline-flex items-center gap-2 text-[#0D6E4A] font-medium hover:underline"
            >
              See all customer stories <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {keepReading.map((c) => (
              <CaseStudyCard key={c.id} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
