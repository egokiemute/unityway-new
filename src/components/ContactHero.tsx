import React from "react";

const ContactHero = () => {
  return (
    <section className="w-full py-32 px-2 md:px-8 bg-[#F1F8FF]">
      <div className="container flex flex-col gap-8">
        {/* <span className="bg-[#F1F8FF] text-[#047AF0] text-[14.73px] leading-[161%] py-[12.27px] px-[15.95px] rounded-full w-fit font-medium">
          About the Company
        </span> */}
        <div className="max-w-4xl text-start">
          <p className="text-[50px] leading-[110%] font-twk">
            We&apos;re here to help with your care needs
          </p>
          <p className="mt-4 text-[#999999] text-[16.54px] leading-[161%] font-twk">
            Contact us to learn more about our domiciliary care services or
            discuss your care needs with our team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
