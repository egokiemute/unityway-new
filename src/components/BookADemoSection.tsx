"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { MoveRight } from "lucide-react";

interface BookADemoSectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

const BookADemoSection = ({
  title = "Simple, Accessible Healthcare",
  description = "Get the care you need, whenever and wherever you are",
  buttonLabel = "Get Care Now",
  buttonHref = "/booking",
}: BookADemoSectionProps) => {
  return (
    <section className="px-4 md:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto bg-[#0e152b] text-white rounded-3xl px-6 md:px-16 py-16 md:py-20 text-center overflow-hidden"
      >
        {/* Decorative arrows */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rotate-45 translate-x-10 -translate-y-10 rounded-lg" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rotate-45 -translate-x-10 translate-y-10 rounded-lg" />

        {/* Content */}
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            {title}
          </h2>

          <p className="text-white/80 text-base md:text-lg">{description}</p>

          <div className="pt-4">
            <Button
              type="button"
              style="primary"
              href={buttonHref}
              icon={<MoveRight />}
              iconPosition="right"
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BookADemoSection;
