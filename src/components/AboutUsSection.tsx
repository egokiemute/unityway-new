"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import Button from "./ui/Button";
import { MoveRight } from "lucide-react";
import CountUp from "./ui/CountUp";

export default function AboutUsSection() {
  return (
    <section className="w-full bg-[#eaeef3] py-16 md:py-24 px-4 md:px-10 lg:px-24">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT */}
        <div className="flex-1 max-w-xl">
          {/* Tag */}
          <span className="inline-block border border-gray-400/40 text-gray-700 text-sm px-4 py-2 rounded-full">
            About us
          </span>

          {/* Heading */}
          <motion.h1
            className="mt-6 text-3xl sm:text-4xl md:text-4xl lg:text-[50px] font-twk leading-[110%] font-semibold text-[#2B2B2B]"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Dedicated to Your Health, <br />
            Every Step of the Way
          </motion.h1>

          {/* Description */}
          <p className="mt-5 mb-5 text-gray-500 text-base leading-[160%]">
            At ReliaCare, we provide compassionate, reliable medical services
            tailored to individuals and families. Whether you visit us in
            person.
          </p>

          {/* CTA */}
          <Link href="/booking">
            <Button
              type="submit"
              style="primary"
              icon={<MoveRight />}
              iconPosition="right"
              className="py-3 px-6 text-lg font-twk"
            >
              Book Care
            </Button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/home-hero-img.jpg" // replace with your image
              alt="doctor and patient"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-[#c9dff3] to-[#eaf1f3] p-6 rounded-lg text-center">
          <p className="text-3xl md:text-4xl font-semibold text-[#2B2B2B]">
            <CountUp end={2} suffix="+" />
          </p>
          <p className="text-sm text-gray-600 mt-2">Years of Experience</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-[#eaecf3] to-[#cfdde8] p-6 rounded-lg text-center">
          <p className="text-3xl md:text-4xl font-semibold text-[#2B2B2B]">
            <CountUp end={99} suffix="%" />
          </p>
          <p className="text-sm text-gray-600 mt-2">Client Satisfaction</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-[#c9f2f3] to-[#EAF3F1] p-6 rounded-lg text-center">
          <p className="text-3xl md:text-4xl font-semibold text-[#2B2B2B]">
            <CountUp end={16} suffix="+" />
          </p>
          <p className="text-sm text-gray-600 mt-2">Awards Winning</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-r from-[#EAF3F1] to-[#CFE8E3] p-6 rounded-lg text-center">
          <p className="text-3xl md:text-4xl font-semibold text-[#2B2B2B]">
            <CountUp end={40} suffix="+" />
          </p>
          <p className="text-sm text-gray-600 mt-2">Certified Specialists</p>
        </div>
      </div>
    </section>
  );
}
