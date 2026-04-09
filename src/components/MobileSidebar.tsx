"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-20 left-0 z-50">
      <button
        className="p-2 m-2 bg-white border rounded-md fixed z-50"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar Panel */}
          <div className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
            <button
              className="mb-4 p-2 border rounded-md"
              onClick={() => setOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <Sidebar />
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
