import type { Metadata } from "next";
import AboutUsSection from "@/components/AboutUsSection";
import BookADemoSection from "@/components/BookADemoSection";
import FaqSection from "@/components/landingPage/FaqSection";
import Testimonials from "@/components/landingPage/Testimonials";
import FeatureSection from "@/components/commons/FeatureSection";
import MoreAboutUs from "@/components/commons/MoreAboutUs";

const aboutTestimonials = [
  {
    id: 1,
    name: "Family Member",
    role: "Domiciliary Care",
    company: "",
    companyLogo: "/images/logos/google-black.svg",
    avatar: "/images/avatars/ezekiel.png",
    quote:
      "Unity Way has made a real difference in our lives. Their care services have given us peace of mind knowing our loved one is in good hands.",
  },
  {
    id: 2,
    name: "Client Review",
    role: "Domiciliary Care",
    company: "",
    companyLogo: "/images/logos/google.svg",
    avatar: "/images/avatars/ezekiel.png",
    quote:
      "Highly professional and trustworthy. I would recommend their domiciliary care services to anyone looking for quality care and dependable support at home.",
  },
];

const aboutFaqs = [
  {
    question: "What does Unity Way Company Limited provide?",
    answer:
      "We provide domiciliary care services designed to support daily living, independence, dignity, comfort, and wellbeing at home.",
  },
  {
    question: "What kind of support can you help with?",
    answer:
      "We can help with personal care, medication support, companionship, meal preparation, mobility assistance, home environment support, household routine support, specialist care, and live-in care.",
  },
  {
    question: "What is your approach to care?",
    answer:
      "Our approach is person-centred, which means care is tailored around the individual's comfort, dignity, routine, and preferences.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "You can use the contact page, submit a booking request, or reach out directly by email or phone.",
  },
];

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <section className="pt-20 mx-auto">
      <AboutUsSection />

      <MoreAboutUs />

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
      <Testimonials
        badge="Testimonial"
        title="What Our Clients Say"
        testimonials={aboutTestimonials}
      />

      <BookADemoSection
        title="Start a conversation about the domiciliary care you need"
        description="Book care with a team that is ready to support comfort, dignity, and wellbeing at home."
        buttonLabel="BOOK CARE"
        buttonHref="/booking"
      />

      <FaqSection
        badge="FAQ"
        title="Questions families often ask about domiciliary care"
        description="We provide domiciliary care services designed to support daily living at home."
        ctaLabel="Book Care"
        ctaHref="/booking"
        faqs={aboutFaqs}
      />
    </section>
  );
}
