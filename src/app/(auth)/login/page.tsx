import Login from "@/components/forms/Login";
import React from "react";

export default function page() {
  return (
    <div className="w-full mt-20">
      <div className="mb-8 text-center w-full">
        <h2 className="font-twk text-xl leading-[110%] font-[350]">
          Welcome back Lawrence!
        </h2>
        <p className="mt-2 text-[13.5px] text-[#828282] font-twk">
          Handle usage tracking, feature gating, and invoicing without.
        </p>
      </div>

      <Login />
    </div>
  );
}
