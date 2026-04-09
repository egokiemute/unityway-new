import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogCard from "@/components/commons/BlogCard";
import BookADemoSection from "@/components/BookADemoSection";
import Clients from "@/components/landingPage/Clients";
import FaqSection from "@/components/landingPage/FaqSection";
import { SERVICES } from "@/utils/services";

const domiciliaryFaqs = [
  {
    question: "What does domiciliary care include?",
    answer:
      "Our domiciliary care can include personal care and hygiene assistance, medication support, companionship, meal preparation, mobility support, home environment support, household routine support, specialist care, and live-in care.",
  },
  {
    question: "Can care be tailored to individual routines and preferences?",
    answer:
      "Yes. Support can be shaped around the person's daily habits, comfort, mobility needs, and preferred level of assistance.",
  },
  {
    question: "Do you provide short-term as well as ongoing care?",
    answer:
      "Yes. We can discuss temporary support, regular visits, or longer-term arrangements depending on what is needed at home.",
  },
  {
    question: "How do I arrange care support?",
    answer:
      "You can contact our team or use the booking form to start the conversation, and we will guide you through the next steps.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "domiciliary-care") {
    return {
      title: "Domiciliary Care",
    };
  }

  return {
    title: "Domiciliary Care Services",
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== "domiciliary-care") {
    notFound();
  }

  const relatedServices = SERVICES.slice(0, 3);

  return (
    <div className="px-3 sm:px-4 lg:px-5 bg-white mt-12">
      <div className="relative bg-[#F1F8FF]">
        <div className="max-w-4xl mx-auto md:px-5 pt-20">
          <div className="flex items-center space-x-4 text-sm mb-6">
            <span className="bg-[#0E152B] text-white px-3 py-1 rounded-full">
              Domiciliary Care Services
            </span>
            <span className="text-gray-600">Compassionate care at home</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Domiciliary Care
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Professional domiciliary care designed to support independent
            living at home.
          </p>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 mt-10">
          <div className="relative w-full h-[420px]">
            <Image
              src="/images/services/book-care.jpg"
              alt="Domiciliary care"
              fill
              className="rounded-xl object-cover object-center shadow-xl"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-white -mt-[50px] rounded-t-2xl">
        <article className="max-w-4xl mx-auto px-6 py-13">
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What does domiciliary care include?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our domiciliary care is designed to support daily living,
              independence, dignity, comfort, and wellbeing in familiar
              surroundings.
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>Personal Care &amp; Hygiene Assistance</li>
              <li>Medication Support</li>
              <li>Companionship &amp; Emotional Support</li>
              <li>Meal Preparation &amp; Nutritional Assistance</li>
              <li>Mobility Assistance &amp; Safe Transfers</li>
              <li>Home Environment Support</li>
              <li>Household Routine Support</li>
              <li>Specialist Care Services</li>
              <li>Live-In Care</li>
            </ul>
            <div className="border-l-4 border-[#047AF0] pl-4 text-gray-600 text-sm">
              Support can be tailored around the person&apos;s needs, routines,
              comfort, and preferred level of assistance at home.
            </div>
          </section>

          <hr className="w-[774px] mx-auto border-gray-200 my-12" />

          <section className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What our domiciliary care supports
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide compassionate domiciliary care that helps people remain
              comfortable, respected, supported, and well looked after at home.
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>Support tailored to individual routines</li>
              <li>Respect for dignity, choice, and comfort</li>
              <li>Help with medication and daily tasks</li>
              <li>Warm companionship and emotional support</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We can discuss temporary support, regular visits, or ongoing
              arrangements depending on what is needed at home.
            </p>
          </section>

          <hr className="w-[774px] mx-auto border-gray-200 my-12" />

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How to arrange care support
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Getting started is simple. Tell us what kind of care is needed
              and we will help guide you through the next steps.
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>Tell us your care needs</li>
              <li>Create a personalised care plan</li>
              <li>Receive compassionate care at home</li>
            </ul>
            <div className="border-l-4 border-[#047AF0] pl-4 text-gray-600 text-sm">
              Use the booking form or contact our team directly and we will help
              you arrange the right domiciliary care.
            </div>
          </section>
        </article>
      </div>

      <hr className="w-[1050px] mx-auto border-gray-200 my-12" />

      <section className="mt-10 pt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight text-left">
              Explore more domiciliary care
              <br className="hidden sm:block" />
              services designed for home support.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedServices.map((service) => (
              <BlogCard
                key={`${service.title}-${service.image}`}
                slug={service.slug}
                image={service.image}
                category={service.category}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <Clients title="Trusted by homes, families, and community partners" />

      <BookADemoSection
        title="Need trusted domiciliary care at home?"
        description="We provide compassionate domiciliary care that helps people remain comfortable, respected, supported, and well looked after at home."
        buttonLabel="Book Care"
        buttonHref="/booking"
      />

      <FaqSection
        badge="FAQ"
        title="Domiciliary care questions we often hear"
        description="Find quick answers about arranging domiciliary care at home."
        ctaLabel="Book Care"
        ctaHref="/booking"
        faqs={domiciliaryFaqs}
      />
    </div>
  );
}
