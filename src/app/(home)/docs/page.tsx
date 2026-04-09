"use client";

import MainContent from "@/components/MainContent";
import MobileSidebar from "@/components/MobileSidebar";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function DocsPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex bg-white mt-20">
      {/* Sidebar (Desktop) */}
      <Sidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar />

      {/* Main Content */}
      <MainContent slug={params.slug} />
    </div>
  );
}
