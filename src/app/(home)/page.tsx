import type { Metadata } from "next";
import FeatureSection from "@/components/commons/FeatureSection";
import Hero from "@/components/commons/Hero";
import FaqSection from "@/components/landingPage/FaqSection";
import Testimonials from "@/components/landingPage/Testimonials";
import { clientTestimonials } from "@/utils/contents/Homepage.Content";
import OurProcess from "@/components/commons/OurProcess";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="px-3">
      <Hero
        badgeText="Compassionate Domiciliary Care at Home"
        heading="Compassionate Domiciliary Care at Home"
        subtext="Delivering high-quality, person-centred domiciliary care that supports independent living, dignity, comfort, and wellbeing in your own home."
        primaryCta={{
          label: "Book Care",
          href: "/booking",
        }}
        secondaryCta={{
          label: "Contact Us",
          href: "/contact",
        }}
      />

      {/* <Heading
        className="items-start text-3xl font-twk max-w-3xl pb-0"
        text="Care services designed to support daily living at home"
      /> */}

      <FeatureSection
        badgeText="About Us"
        heading="Welcome to Unity Way Company Limited"
        description="We specialise in domiciliary care that enables individuals to live safely and comfortably in their own homes. Our approach is built on dignity, respect, and personalised support-covering personal care, companionship, mobility assistance, and daily living support."
        bullets={["50+ Clients supported", "Domiciliary Care"]}
        cta={{
          label: "Book Care",
          href: "/booking",
        }}
        imageSrc="/images/img-about-one.jpg"
        imageAlt="Domiciliary care support"
        imagePosition="right"
      />

      <OurProcess
        heading="Excellence in care, every step of the way"
        subtext="Discover healthcare services built around quality treatment, experienced professionals, and patient well-being."
        imageSrc="/images/services/compassion.jpg"
        items={[
          {
            title: "General Consultation",
            description:
              "Personalised consultations for accurate diagnosis and everyday health guidance. designed to provide expert advice and support for your health concerns.",
          },
          {
            title: "Diagnostics & Test",
            description:
              "Modern testing for precise and reliable results. Our diagnostic services are designed to provide accurate insights into your health, helping guide effective treatment plans.",
          },
          {
            title: "Specialist Care",
            description:
              "Expert medical support across multiple specialties. Our specialist care services connect.",
          },
          {
            title: "Preventive Care",
            description:
              "Health checkups designed for early detection and prevention. Our preventive care services focus on proactive health management, offering regular checkups.",
          },
        ]}
      />

      <FeatureSection
        badgeText="Domiciliary Care Services"
        heading="Care services designed to support daily living at home"
        description="Our domiciliary care services are tailored to help individuals remain safe, comfortable, and supported in familiar surroundings."
        bullets={[
          "Personal Care & Hygiene Assistance",
          "Companionship & Emotional Support",
          "Mobility Assistance & Safe Transfers",
          "Live-In Care",
        ]}
        cta={{
          label: "Book Care",
          href: "/booking",
        }}
        imageSrc="/images/img-about-two.jpg"
        imageAlt="Care services"
        imagePosition="left"
      />

      {/* <WhyChooseUs
        heading="Why Choose Us?"
        subtext="Your health, our commitment - here’s what sets us apart"
        title="Let’s know about our main goal"
        description="We aim to offer clear and comprehensive information about our services, conditions treated, and treatment options. This ensures that patients can make informed decisions about their healthcare"
        imageSrc="/images/services/special-care.jpg"
        items={[
          { text: "Providing Accessible Information" },
          { text: "Building Trust" },
          { text: "Enhancing Patient Engagement" },
          { text: "Community Involvement" },
          { text: "Promoting Health Education" },
          { text: "Security and Privacy" },
        ]}
      /> */}

      <FeatureSection
        badgeText="Why Choose Us"
        heading="Trusted domiciliary care shaped around dignity and comfort"
        description="We provide reliable, compassionate in-home care that helps individuals feel safe, respected, and supported every day."
        bullets={[
          "Person-centred domiciliary care plans",
          "Highly trained and compassionate carers",
          "Reliable and professional care delivery",
          "Flexible care tailored to individual routines",
        ]}
        cta={{
          label: "Book Care",
          href: "/booking",
        }}
        imageSrc="/images/home-hero-img.jpg"
        imageAlt="Trusted domiciliary care"
        imagePosition="right"
      />

      <Testimonials
        badge="Testimonial"
        title="What Our Clients Say"
        testimonials={clientTestimonials}
      />

      <FaqSection
        badge="FAQ"
        title="Questions about domiciliary care"
        description="Find quick answers about our domiciliary care services."
        ctaLabel="Book Care"
        ctaHref="/booking"
      />
    </div>
  );
}
