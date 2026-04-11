"use client";
import React, { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import { Menus } from "@/utils/contents/Menus.Content";
import DesktopMenus from "./DesktopMenus";
import Button from "../ui/Button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        top: scrolled ? 20 : 0,
        width: scrolled ? "90%" : "100vw",
        borderRadius: scrolled ? "9999px" : "0px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`h-20 flex items-center fixed left-1/2 -translate-x-1/2 z-50
        ${scrolled ? "bg-blue-50 backdrop-blur-md" : "bg-white"}
      `}
    >
      <nav className="px-6 w-full max-w-8xl mx-auto flex items-center justify-between">
        <div className="z-[999] relative">
          <Logo type="primary" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {Menus.map((menu) => (
            <DesktopMenus menu={menu} key={menu.name} />
          ))}

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
        </ul>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileMenu menus={Menus} />
        </div>
      </nav>
    </motion.header>
  );
}
