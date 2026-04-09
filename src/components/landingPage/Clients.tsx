import React from "react";
import LogoMarquee from "./LogoMarquee";

interface ClientsProps {
  title?: string;
}

export default function Clients({
  title = '"Our domiciliary care services are designed to support independence, dignity, and comfort at home."',
}: ClientsProps) {
  return (
    <section className="bg-white py-16 px-2">
      <h2 className="text-center text-md md:text-xl font-medium mb-4">
        {title}
      </h2>
      <LogoMarquee
        logos={[
          { src: "/images/logos/google.svg", alt: "Partner logo" },
          { src: "/images/logos/google-black.svg", alt: "Partner logo" },
          { src: "/images/logos/google.svg", alt: "Partner logo" },
          { src: "/images/logos/clearprice.svg", alt: "Partner logo" },
          { src: "/images/logos/google-black.svg", alt: "Partner logo" },
          { src: "/images/logos/google.svg", alt: "Partner logo" },
        ]}
        speed={100}
      />
    </section>
  );
}
