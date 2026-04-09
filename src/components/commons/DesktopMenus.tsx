"use client";
import React, { useState } from "react";
import { IMenu } from "@/utils/types";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"
interface DesktopMenusProps {
  menu: IMenu;
}

export default function DesktopMenus({ menu }: DesktopMenusProps) {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const hasDropdown = menu.subMenu || menu.banners;

  // toggle hover menu
  const toggleHoverMenu = () => {
    setIsHover(!isHover)
  }

  // animation variants
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: "none",
    }
  }

  const handlePricingRoute = () => {
    router.push("/pricing");
  };

  return (
    <motion.li className="group cursor-pointer px-4 py-2" onHoverStart={toggleHoverMenu} onHoverEnd={toggleHoverMenu}>
      <Link href={menu?.link || ""} className="flex items-center gap-1">
        {menu.name}
        {hasDropdown && (
          <ChevronDown className="w-4 h-4 group-hover:rotate-180 duration-200" />
        )}
      </Link>

      {hasDropdown && (
        <motion.div
          className="
            absolute left-0 right-0 top-full -mt-2 
            hidden group-hover:flex gap-6 
            bg-[#FAFAFA] rounded-xl p-8 z-50
            w-screen h-auto shadow-lg transition-all duration-300
          "
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div className="mx-auto max-w-8xl grid grid-cols-2 gap-8 w-full">
            {/* Submenus */}
            {menu.subMenu && (
              <ul
                className={`grid gap-7 grid-cols-${
                  menu.gridCol
                } min-w-md max-w-[720px] px-6`}
              >
                {menu.subMenu.map((item) => (
                  <li
                    onClick={handlePricingRoute}
                    key={item.name}
                    className="flex items-start gap-3"
                  >
                    <div className="rounded-full p-2 bg-[#E6F0FF]">
                      {item.icon && (
                        <item.icon className="w-5 h-5 text-[#047AF0]" />
                      )}
                    </div>
                    <div className="flex flex-col items-start gap-3">
                      <p className="font-medium text-black text-base leading-[121%]">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#272E35]">{item.desc}</p>
                      <Link
                        href={item.link || "#"}
                        className="text-base text-[#1463E5] hover:underline"
                      >
                        {item.route}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Banners */}
            {menu.banners && (
              <div className="flex gap-4 w-full flex-row">
                {menu.banners.map((banner) => (
                  <div
                    key={banner.title}
                    className="rounded-lg bg-gray-50 flex flex-col items-start gap-2"
                  >
                    <div className="w-[350px] h-[100px] overflow-hidden">
                      {banner.bannerImg && (
                        <Image
                          src={banner.bannerImg}
                          alt={banner.title}
                          className="rounded-md object-cover"
                        />
                      )}
                    </div>
                    <p className="font-semibold">{banner.title}</p>
                    {banner.desc && (
                      <p className="text-sm text-gray-600">{banner.desc}</p>
                    )}
                    {banner.btnText && (
                      <button className="text-sm font-medium text-[#047AF0] hover:underline">
                        {banner.btnText}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
