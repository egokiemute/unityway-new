import React from "react";

const AboutUsSection = () => {
  return (
    <section className="px-2 py-16 mx-auto">
      <div className="flex flex-col gap-8">
        <span className="bg-[#F1F8FF] text-[#047AF0] text-[14.73px] leading-[161%] py-[12.27px] px-[15.95px] rounded-full w-fit font-medium">
          About the Company
        </span>
        <div className="max-w-[806px] text-start">
          <p className="text-[50px] leading-[110%] font-twk">
            A trusted company delivering compassionate care at home
          </p>
          <p className="mt-4 text-[#999999] text-[16.54px] leading-[161%] font-twk">
            Unity Way Company Limited is committed to helping people live
            safely, comfortably, and independently in familiar surroundings
            through dependable domiciliary care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
