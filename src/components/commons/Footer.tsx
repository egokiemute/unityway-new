import React from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import { quickLinks } from "@/utils/contents/Homepage.Content";
import Button from "../ui/Button";
import { MoveRight } from "lucide-react";

function Footer() {
  return (
    <footer className="hero-sectio p-4 pt-28 md:pt-28 mt-12 bg-blue-50">
      <div className="px-2 flex flex-col md:flex-row gap-6 items-start justify-between border-b-[1px] border-[#413F3F] pb-20">
        {/* Left side: Logo + description */}
        <div className="max-w-sm flex flex-col gap-12 items-start text-start">
          <Logo type="secondary" />
          <p className="text-black text-[20px] leading-[130%] tracking-[-2%] font-bradford-light mt-0">
            Unity Way Company Limited provides compassionate, person-centred
            domiciliary care services that support independent living, dignity,
            comfort, and wellbeing at home.
          </p>
          <Button
            type="button"
            style="primary"
            className="px-8 py-4"
            href="/booking"
            icon={<MoveRight />}
            iconPosition="right"
          >
            Book Care
          </Button>
        </div>

        {/* Right side: Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {quickLinks.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h4 className="text-[#0E152B] text-[16px] font-twk mb-5">
                {section.title}
              </h4>
              <div className="flex flex-col items-start gap-5 text-black">
                {section.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.route}
                    className="hover:underline"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom footer bar */}
      <div className="px-2 py-12 flex flex-col gap-6 md:flex-row justify-between">
        <p className="text-[14px] text-black leading-[160%] tracking-[-2%] font-twk">
          Copyright &copy; {new Date().getFullYear()} Unity Way Company Limited.
          All rights reserved.
        </p>
        <Link
          className="text-[14px] text-black leading-[160%] tracking-[-2%] font-twk font-thin"
          href="/contact"
        >
          Monday - Sunday
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
