"use client";
import Image from "next/image";
import { motion } from "motion/react";

const items = [
  {
    title: "Immediate Doctor Access",
    description:
      "Connect with qualified doctors in minutes through secure video calls—get medical advice and support without the wait.",
    image: "/images/before.jpg",
  },
  {
    title: "Your Personalized Health Path",
    description:
      "Receive a personalized health plan designed to match your goals, with expert guidance on lifestyle, diet, etc.",
    image: "/images/after.jpg",
  },
  {
    title: "Wellness Tips That Work",
    description:
      "Stay informed with daily health tips tailored to your needs, ensuring you maintain a healthy lifestyle and reach your goals.",
    image: "/images/services/special-care.jpg",
  },
];

export default function MoreAboutUs() {
  return (
    <section className="w-full px-6 md:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Innovative Features for <br className="hidden md:block" /> Better
            Treatment
          </h2>
          <p className="text-gray-500 max-w-md text-base md:text-lg">
            Experience next-level healthcare with advanced features designed for
            fast, secure, and hassle-free treatment—anytime, anywhere.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              {/* Image Box */}
              <div className="relative bg-gray-100 rounded-2xl object-cover h-[220px] md:h-[260px] flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="mt-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
