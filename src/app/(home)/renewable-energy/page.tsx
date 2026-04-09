import FeatureSection from "@/components/commons/FeatureSection";
import Heading from "@/components/commons/Heading";
import Hero from "@/components/commons/Hero";
import SubFeatures from "@/components/commons/SubFeatures";
import Clients from "@/components/landingPage/Clients";
import FaqSection from "@/components/landingPage/FaqSection";
import Testimonials from "@/components/landingPage/Testimonials";
import { clientTestimonials } from "@/utils/contents/Homepage.Content";
import { CreditCard, Layers, Zap } from "lucide-react";
import React from "react";

const featuresData = [
  {
    icon: <CreditCard className="text-[#047AF0] size-5" />,
    title: "Solar-as-a-Service (SaaS)",
    description:
      "Bill by kWh or device uptime; auto-adjust pricing by location",
  },
  {
    icon: <Zap className="text-[#047AF0] size-5" />,
    title: "Prepaid or Subscription Models",
    description:
      "Schedule billing in intervals, handle plan upgrades & top-ups",
  },
  {
    icon: <Layers className="text-[#047AF0] size-5" />,
    title: "PPA (Power Purchase Agreements)",
    description: "Handle amortized billing and dynamic usage metrics",
  },
  {
    icon: <Layers className="text-[#047AF0] size-5" />,
    title: "Smart Device Monetization",
    description: "Track usage per device/user with metering APIs",
  },
  {
    icon: <Layers className="text-[#047AF0] size-5" />,
    title: "Multi-Tenant Energy Platforms",
    description:
      "Segment and invoice across users, homes, or geographic regions",
  },
];

export default function page() {
  return (
    <section className="px-3 sm:px-4 lg:px-5 py-10 mx-auto">
      <Hero
        badgeHighlight="New"
        badgeText="Entitlements Billing Feature"
        heading="Power smarter – offer dynamic, branded energy tariffs with ClearPrice."
        subtext="Empower your customers with flexible and transparent energy pricing under your own brand – from traditional flat-rate plans to cutting-edge dynamic tariffs that reflect real-time energy market conditions and usage patterns."
        primaryCta={{
          label: "Get custom quote",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Explore Clearprice",
          href: "/pricing",
        }}
      />
      <SubFeatures
        bgColor="bg-[#000000]"
        headingColor="text-white"
        headingText="From solar-as-a-service to smart metering, ClearPrice handles the logic behind your revenue."
        features={featuresData}
      />
      <Heading
        className="items-start mx-auto text-center justify-center text-3xl font-twk max-w-3xl pb-0"
        text="Everything you need to launch and manage billing, built for scale."
      />

      <FeatureSection
        badgeText="Customised Tariffs"
        heading="Access Control, without the Engineering overhead."
        description="Design energy plans that adapt to your customers’ unique usage patterns and preferences. With ClearPrice’s flexible product catalog, you can configure tailored tariffs — from real-time dynamic pricing with 15-minute billing intervals linked to wholesale energy markets, to fixed annual contracts with flexible installment options. Deliver precision, transparency, and choice through every billing cycle."
        cta={{
          label: "Explore Tariffs →",
          href: "/tarriffs",
        }}
        imageSrc="/images/dashboard1.png"
        imageAlt="Dashboard preview"
        imagePosition="left" // or "left"
      />
      <FeatureSection
        badgeText="Flexible Rating"
        heading="Built for complex tariff design."
        description="Configure energy rates with full flexibility — whether it's time-of-use pricing, block tariffs, fixed service charges, or incentive-based adjustments. ClearPrice adapts to your tariff logic, helping you deliver fair, transparent billing across all customer types."
        cta={{
          label: "Explore Rating →",
          href: "/tarriffs",
        }}
        imageSrc="/images/dashboard1.png"
        imageAlt="Dashboard preview"
        imagePosition="right" // or "left"
      />
      <FeatureSection
        badgeText="Bonus Management"
        heading="Automate energy credits, bonuses, and upgrades into one clear bill with ClearPrice."
        description="Effortlessly manage incentive programs and energy credits across your renewable energy offerings. Whether you're applying feed-in tariffs, net metering bonuses, carbon offset credits, or regional subsidies, ClearPrice allows you to automate and integrate both one-time and recurring bonuses directly into your customers’ invoices. Additional costs such as hardware installations or storage upgrades can be transferred via API and consolidated into a single, transparent energy bill."
        cta={{
          label: "Explore Bonus →",
          href: "/bonus",
        }}
        imageSrc="/images/dashboard1.png"
        imageAlt="Dashboard preview"
        imagePosition="left" // or "left"
      />
      <FeatureSection
        badgeText="API-Driven Integration"
        heading="Connect seamlessly across your energy ecosystem."
        description="ClearPrice’s REST API gives you real-time access to tariff and billing data, making it easy to power your customer portals, mobile apps, and backend systems. Dynamically update tariff structures, push rate changes, and keep all touchpoints in sync — with a secure, scalable API built for energy providers."
        cta={{
          label: "Explore API →",
          href: "/docs",
        }}
        imageSrc="/images/dashboard1.png"
        imageAlt="Dashboard preview"
        imagePosition="right" // or "left"
      />
      <FeatureSection
        badgeText="API-Driven Integration"
        heading="Connect seamlessly across your energy ecosystem."
        description="ClearPrice’s REST API gives you real-time access to tariff and billing data, making it easy to power your customer portals, mobile apps, and backend systems. Dynamically update tariff structures, push rate changes, and keep all touchpoints in sync — with a secure, scalable API built for energy providers."
        cta={{
          label: "Explore API →",
          href: "/docs",
        }}
        imageSrc="/images/dashboard1.png"
        imageAlt="Dashboard preview"
        imagePosition="left" // or "left"
      />
      <Clients />
      <Testimonials testimonials={clientTestimonials} />
      <FaqSection />
    </section>
  );
}
