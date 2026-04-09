"use client";
import React from "react";
import Logo from "../ui/Logo";
import { Menus } from "@/utils/contents/Menus.Content";
import DesktopMenus from "./DesktopMenus";
import Button from "../ui/Button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="px-2 h-20 text-[15px] flex items-center fixed inset-0 bg-white z-50">
      <nav className="px-5 md:px-5 max-w-8xl mx-auto w-full flex items-center justify-between">
        <div className="z-[999] relative">
          <Logo type="primary" />
        </div>

        {/* Menus */}

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
        <div className="md:hidden">
          <MobileMenu menus={Menus} />
        </div>
      </nav>
    </header>
  );
}
