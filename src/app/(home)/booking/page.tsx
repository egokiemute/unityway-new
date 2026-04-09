import type { Metadata } from "next";
import Image from "next/image";
import BookADemoSection from "@/components/BookADemoSection";
import CareBookingForm from "@/components/forms/CareBookingForm";
import FaqSection from "@/components/landingPage/FaqSection";

const bookingFaqs = [
  {
    question: "What care services can I book online?",
    answer:
      "You can book any of our domiciliary care services through the booking form, including personal care, medication support, companionship, meal support, mobility assistance, home environment support, household routine support, specialist care, and live-in care.",
  },
  {
    question: "Can I choose a preferred date and time?",
    answer:
      "Yes. The booking form allows you to share the service you need along with your preferred date and time.",
  },
  {
    question: "What if I am not sure which service to select?",
    answer:
      "Choose the closest option and add extra details in the notes field, or contact us before submitting.",
  },
  {
    question: "Will someone contact me after I book?",
    answer:
      "Yes. We will review your request and follow up to confirm the details of your care.",
  },
];

export const metadata: Metadata = {
  title: "Book Care",
};

export default function Page() {
  return (
    <section className="px-2 py-10 mx-auto">
      <section className="flex flex-col mt-12 px-3 md:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center item-start my-[68px] h-full">
          <div className="flex flex-col items-start gap-8 md:gap-10">
            <div className="font-twk text-black font-normal text-5xl md:text-6xl text-center md:text-left leading-[100%]">
              <h1>Book Care</h1>
            </div>
            <div className="flex bg-secondary items-start justify-center text-sm">
              <h2 className="text-[#545454] text-[13px] md:text-[15px] lg:text-[17px] font-light">
                Schedule domiciliary care that fits your needs. Our team will
                support you at home with compassionate, personalised care.
              </h2>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                "Choose the care service that best matches the support you need.",
                "Share your preferred time of day, preferred time, and preferred date.",
                "Add your phone number, address, and any extra details that will help us prepare.",
                "We will review your request and contact you to confirm the details.",
              ].map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <Image
                    src="/greencheckcircle.svg"
                    alt="green check box"
                    height={20}
                    width={20}
                  />
                  <span className="text-[#545454]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <CareBookingForm />
          </div>
        </div>
      </section>

      <BookADemoSection
        title="Need help choosing the right care?"
        description="Contact us and we will guide you through your domiciliary care options."
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />

      <FaqSection
        badge="FAQ"
        title="Booking questions about domiciliary care"
        description="Here are a few common questions about booking domiciliary care."
        ctaLabel="Book Care"
        ctaHref="/booking"
        faqs={bookingFaqs}
      />
    </section>
  );
}
