import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface BookADemoSectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

const BookADemoSection = ({
  title = "Ready to arrange domiciliary care?",
  description = "Our team is here to provide the right level of care and support at home.",
  buttonLabel = "Book Care",
  buttonHref = "/booking",
}: BookADemoSectionProps) => {
  return (
    <section className="px-2 py-16 mx-auto flex items-center justify-center">
      <div className="mx-autopx-4 md:px-10 py-16 pt-38 bg-[#F1FCFE] container relative rounded-2xl grid md:grid-cols-2 gap-12 items-center overflow-hidden">
        <div className="text-black space-y-6">
          <h2 className="text-2xl font-twk font-bold leading-snug">{title}</h2>
          <p className="text-[16.5px] text-black/90">{description}</p>

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

        <div className="overflow-hidden">
          <Image
            src="/images/after.jpg"
            alt="Care support"
            width={600}
            height={400}
            className="rounded-tl-xl absolute -right-4 -bottom-4 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default BookADemoSection;
