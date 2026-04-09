import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <section className="px-3 py-16 mx-auto">
      <div className="flex flex-col items-center justify-center text-center gap-8">
        <span className="bg-[#F1F8FF] text-[#047AF0] text-[14.73px] leading-[161%] py-[12.27px] px-[15.95px] rounded-full w-fit font-medium">
          How We Work
        </span>
        <div className="max-w-[806px] text-center">
          <p className="text-[50px] leading-[110%] font-twk">
            How we deliver domiciliary care
          </p>
          <p className="text-[#999999] text-[16.54px] leading-[161%] font-twk mt-4">
            We deliver domiciliary care with compassion, consistency, and
            respect for every individual we support.
          </p>
        </div>
        <div className="mx-auto max-w-[1150px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-8">
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/images/team/team1.png"
              alt="Tell us your care needs"
              width={400}
              height={400}
            />
            <div className="text-start">
              <h2 className="text-[#5A5A5A] text-[15px] font-twk leading-[140%] tracking-[-2%]">
                01 - Tell us your care needs
              </h2>
              <span className="text-[#047AF0] text-[15px] font-twk leading-[140%] tracking-[-2%]">
                Start the conversation and share the kind of support needed at
                home.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/images/team/team2.png"
              alt="Create a personalised care plan"
              width={400}
              height={400}
            />
            <div className="text-start">
              <h2 className="text-[#5A5A5A] text-[15px] font-twk leading-[140%] tracking-[-2%]">
                02 - Create a personalised care plan
              </h2>
              <span className="text-[#047AF0] text-[15px] font-twk leading-[140%] tracking-[-2%]">
                We shape support around individual routines, comfort, and
                preferences.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/images/team/team3.png"
              alt="Receive compassionate care at home"
              width={400}
              height={400}
            />
            <div className="text-start">
              <h2 className="text-[#5A5A5A] text-[15px] font-twk leading-[140%] tracking-[-2%]">
                03 - Receive compassionate care at home
              </h2>
              <span className="text-[#047AF0] text-[15px] font-twk leading-[140%] tracking-[-2%]">
                Receive dependable domiciliary care designed around daily
                living.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/images/team/team4.png"
              alt="Clients supported"
              width={400}
              height={400}
            />
            <div className="text-start">
              <h2 className="text-[#5A5A5A] text-[15px] font-twk leading-[140%] tracking-[-2%]">
                50+ Clients supported
              </h2>
              <span className="text-[#047AF0] text-[15px] font-twk leading-[140%] tracking-[-2%]">
                Compassionate support that helps people remain safe and
                comfortable at home.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/images/team/team5.png"
              alt="Care team members"
              width={400}
              height={400}
            />
            <div className="text-start">
              <h2 className="text-[#5A5A5A] text-[15px] font-twk leading-[140%] tracking-[-2%]">
                13+ Care team members
              </h2>
              <span className="text-[#047AF0] text-[15px] font-twk leading-[140%] tracking-[-2%]">
                A professional team committed to person-centred care every day.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
