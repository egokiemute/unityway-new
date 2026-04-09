import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  type: "primary" | "secondary";
}

export default function Logo({ type }: LogoProps) {
  return (
    <Link href="/" className="inline-block">
      <Image
        alt="Unity Way Company Limited Logo"
        src={type === "primary" ? "/logo.svg" : "/f_logo.svg"}
        height={32}
        width={240}
        className="size-32 object-contain h-fit"
      />
    </Link>
  );
}
