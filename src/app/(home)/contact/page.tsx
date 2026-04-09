import type { Metadata } from "next";
import CareContactForm from "@/components/forms/CareContactForm";
import ContactHero from "@/components/ContactHero";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <section className="px-2 py-10 mx-auto">
      <ContactHero />
      <section className="flex flex-col mt-12 px-3 md:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center item-start my-[68px] h-full">
          <div className="flex flex-col items-start gap-8 md:gap-10">
            <div className="font-twk text-black font-normal text-5xl md:text-6xl text-center md:text-left leading-[100%]">
              <h1>Contact Us</h1>
            </div>
            <div className="flex bg-secondary items-start justify-center text-sm">
              <h2 className="text-[#545454] text-[13px] md:text-[15px] lg:text-[17px] font-light">
                Get in touch to learn more about our domiciliary care services
                or request support.
              </h2>
            </div>

            <div className="grid gap-4 w-full">
              <div className="rounded-2xl border border-[#E9E9E9] px-5 py-4">
                <p className="text-sm text-[#047AF0]">Address</p>
                <p className="mt-2 text-[#545454]">Butters Close, Huntingdon</p>
              </div>
              <div className="rounded-2xl border border-[#E9E9E9] px-5 py-4">
                <p className="text-sm text-[#047AF0]">Phone Number</p>
                <p className="mt-2 text-[#545454]">+44 7955360738</p>
              </div>
              <div className="rounded-2xl border border-[#E9E9E9] px-5 py-4">
                <p className="text-sm text-[#047AF0]">Email Address</p>
                <p className="mt-2 text-[#545454]">info@unitywaycare.co.uk</p>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-2xl border border-[#E9E9E9]">
              <iframe
                title="Location map"
                src="https://www.google.com/maps?q=New%20York%2C%20NY%2C%20USA&z=12&output=embed"
                className="h-[280px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="mb-6">
              <h2 className="text-3xl font-twk text-black">Get in touch</h2>
              <p className="mt-3 text-[#545454]">
                Send us a message and our team will get back to you to discuss
                your domiciliary care needs.
              </p>
            </div>
            <CareContactForm />
          </div>
        </div>
      </section>
    </section>
  );
}
