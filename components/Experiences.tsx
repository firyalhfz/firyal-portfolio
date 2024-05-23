"use client";
import { experiences } from "@/data";
import React, { useState } from "react";
import { SparklesCore } from "./ui/Sparkles";
import { FaLocationDot } from "react-icons/fa6";

const Experiences: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(
    experiences[0].id
  ); // Start with the first card open

  const handleCardClick = (cardId: number) => {
    if (expandedCard === cardId) {
      setExpandedCard(null); // Close the currently open card
    } else {
      setExpandedCard(cardId); // Open the clicked card
    }
  };

  return (
    <section>
      <h1 className="heading">
        My Work <span className="text-purple">Experiences</span>
      </h1>
      <div className="relative">
        <div className="w-full absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full z-0"
            particleColor="#FFFFFF"
          />
        </div>
        <h2 className="w-1/2 mt-12 flex justify-center text-2xl font-bold z-10">
          2023 - 2024 <span className="text-purple"></span>
        </h2>
        <div className="w-1/2 px-20 py-10 z-10 relative">
          {experiences.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className={`border rounded-lg p-4 mb-2 cursor-pointer z-20 relative ${
                expandedCard === item.id ? "bg-purple-100" : "bg-black-100"
              }`}
              onClick={() => handleCardClick(item.id)}
              style={{
                pointerEvents: expandedCard === item.id ? "none" : "auto",
              }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{item.title}</h2>

                <p>{item.company}</p>
              </div>
              {expandedCard === item.id && (
                <div>
                  <div className="w-full md:ml-0 ml-4">
                    <p className="text-gray-500">{item.duration}</p>
                    {item.location && (
                      <p className="text-gray-500">{item.location}</p>
                    )}
                  </div>
                  <ul className="w-full  list-disc list-inside mt-2 md:mt-0">
                    {item.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
