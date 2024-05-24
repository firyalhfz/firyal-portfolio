import React from "react";
import { TracingBeam } from "./ui/TracingBeam";
import { SparklesCore } from "./ui/Sparkles";
import { experiences } from "@/data";
import { FaLocationDot } from "react-icons/fa6";

const Work = () => {
  return (
    <div className="mt-40" id="experiences">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="h-full relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <TracingBeam className="mt-20 relative z-20 ">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col justify-center text-start experience-item mb-8 rounded-2xl border p-4 border-white/[0.1]"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <div className="w-full md:ml-0 ml-4">
                <div className="flex flex-col md:flex-row md:justify-between justify-start">
                  <h2 className="font-bold text-xl">{exp.title}</h2>
                  <p className="text-gray-500">{exp.duration}</p>
                </div>
                <div className="flex items-center mt-1">
                  <FaLocationDot color="#CBACF9" />
                  <p className="text-gray-500 ml-2">{exp.company}</p>
                </div>
                <ul className="w-full mt-2">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </TracingBeam>
      </div>
    </div>
  );
};

export default Work;
