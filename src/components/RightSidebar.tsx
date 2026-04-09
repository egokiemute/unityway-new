"use client";

import React from "react";
import Link from "next/link";

const RightSidebar = () => {
  return (
    <aside className="w-64 border-l border-gray-200 p-4 hidden lg:block">
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
          On This Page
        </h3>
        <ul className="space-y-1 text-gray-700">
          <li><Link href="#">Introduction to ClearPrice</Link></li>
          <li><Link href="#">Quickstart Setup</Link></li>
        </ul>
      </div>

      <div className="p-4 border rounded-lg">
        <p className="text-sm text-gray-700 mb-2">Was this page helpful?</p>
        <div className="flex space-x-3">
          <button className="p-2 rounded-full border hover:bg-gray-100">👍</button>
          <button className="p-2 rounded-full border hover:bg-gray-100">👎</button>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
