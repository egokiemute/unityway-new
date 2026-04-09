import { IMenu } from "@/utils/types";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface MobileMenusProps {
  menus: IMenu[];
}

const MobileMenu = ({ menus }: MobileMenusProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null); // track which menu is expanded
  const router = useRouter();

  // toggle drawer
  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
    setOpenIndex(null); // reset when closing drawer
  };

  const handlePricingRoute = () => {
    router.push("/pricing");
  };

  const toggleSubMenu = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button className="z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white p-4 z-50">
          <ul className="flex flex-col gap-4">
            {menus?.map(({ name, subMenu, banners, link }, i) => {
              const hasDropdown = subMenu || banners;
              const isExpanded = openIndex === i;

              return (
                <li key={i} className="relative overflow-y-auto">
                  {/* Main link / toggle */}
                  <button
                    onClick={() => (hasDropdown ? toggleSubMenu(i) : router.push(link || "#"))}
                    className="flex items-center justify-between w-full font-medium text-left"
                  >
                    <span>{name}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown content */}
                  {isExpanded && hasDropdown && (
                    <div className="mt-2 pl-4 space-y-6">
                      {/* Submenus */}
                      {subMenu && (
                        <ul className="flex flex-col gap-4">
                          {subMenu.map((item) => (
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
                              <div className="flex flex-col items-start gap-2">
                                <p className="font-medium text-black text-base leading-[121%]">
                                  {item.name}
                                </p>
                                <p className="text-sm text-[#272E35]">
                                  {item.desc}
                                </p>
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
                      {banners && (
                        <div className="flex flex-col gap-4">
                          {banners.map((banner) => (
                            <div
                              key={banner.title}
                              className="rounded-lg bg-gray-50 flex flex-col items-start gap-2 p-3"
                            >
                              <div className="w-full h-[100px] overflow-hidden">
                                {banner.bannerImg && (
                                  <Image
                                    src={banner.bannerImg}
                                    alt={banner.title}
                                    width={350}
                                    height={100}
                                    className="rounded-md object-cover w-full h-full"
                                  />
                                )}
                              </div>
                              <p className="font-semibold">{banner.title}</p>
                              {banner.desc && (
                                <p className="text-sm text-gray-600">
                                  {banner.desc}
                                </p>
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
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
