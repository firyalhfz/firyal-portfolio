import React from "react";
import { Meteors } from "./ui/MeteorCard";
import { services } from "@/data";

export function Services() {
  return (
    <div
      className="px-0 md:px-20 pt-40 pb-40 md:pb-0 h-full md:h-screen items-center"
      id="services"
    >
      <h1 className="heading">
        My Special <span className="text-purple">Services</span>
      </h1>
      <div className="grid grid-col-1 md:grid-cols-3 gap-10 mt-20">
        {services.map((item) => (
          <div key={item.id} className="relative w-full gap-4">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-100 to-purple transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                {item.title}
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                {item.desc}
              </p>

              <Meteors number={10} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
