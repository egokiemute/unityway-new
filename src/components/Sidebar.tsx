"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronUp, ChevronDown } from "lucide-react";

interface SectionLink {
  name: string;
  href: string;
  active?: boolean;
}

const sections: Record<string, SectionLink[]> = {
  Intro: [
    {
      name: " Introduction to ClearPrice",
      href: "/docs/introduction",
      active: true,
    },
    { name: "Quickstart Setup", href: "/docs/quickstart" },
  ],
  "Getting Started": [
    { name: "Core Concepts", href: "/docs/core-concepts" },
    { name: "Data Model", href: "/docs/data-model" },
    { name: "Organisations", href: "/docs/organisations" },
    { name: "Products and Bundles", href: "/docs/products-bundles" },
    {
      name: "Accounts and Subscriptions",
      href: "/docs/accounts-subscriptions",
    },
    { name: "Features and Entitlements", href: "/docs/features-entitlements" },
    { name: "Plans and segment", href: "/docs/plans-segments" },
    { name: "Grandfathering", href: "/docs/grandfathering" },
    { name: "Monetisation models", href: "/docs/monetisation-models" },
    { name: "Pricing models", href: "/docs/pricing-models" },
    { name: "Billable Metrics and Events", href: "/docs/billable-metrics" },
  ],
  Tutorials: [
    {
      name: "Tutorial: Designing a Pricing Mode...",
      href: "/docs/tutorial-pricing-model",
    },
  ],
  "Component Library": [],
  "Help & Support": [
    { name: "Contact Support", href: "/docs/contact-support" },
    { name: "Book a Demo", href: "/docs/book-demo" },
    { name: "Community & Feedback", href: "/docs/community-feedback" },
    { name: "FAQ", href: "/docs/faq" },
  ],
};

const Sidebar = () => {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(["Intro"])
  );
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const toggleSection = (section: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(section)) {
      newOpenSections.delete(section);
    } else {
      newOpenSections.add(section);
    }
    setOpenSections(newOpenSections);
  };

  return (
    <aside className="w-72 bg-[#F1F8FF] h-screen overflow-y-auto hidden md:block">
      {/* Search */}
      <div className="p-4 py-10 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Quick Search (CTRL+K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-[#047AF0] focus:border-[#047AF0] transition"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {Object.entries(sections).map(([section, links]) => (
          <div key={section} className="mb-6">
            <button
              onClick={() => toggleSection(section)}
              className="flex justify-between items-center w-full text-left text-gray-900 font-medium text-base mb-3 hover:text-gray-700"
            >
              {section}
              {openSections.has(section) ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {openSections.has(section) && (
              <div className="space-y-1">
                {links.map((link) => {
                  const isActive =
                    pathname === link.href || link.active === true;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive
                          ? "bg-[#047AF0] text-white font-medium"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Special handling for Component Library dotted line */}
                {section === "Component Library" && links.length === 0 && (
                  <div className="px-3 py-2">
                    <div className="border-b border-dotted border-gray-300"></div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
