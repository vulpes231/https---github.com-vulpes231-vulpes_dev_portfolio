import React, { useState } from "react";
import { experiences } from "../constants";

const Experience = () => {
  const [activeExperiences, setActiveExperiences] = useState({});

  function toggleExperience(expId) {
    setActiveExperiences((prev) => ({
      ...prev,
      [expId]: !prev[expId],
    }));
  }

  const workExperiences = experiences.map((exp) => (
    <article key={exp.id}>
      <div className="flex flex-col gap-3 ">
        <div
          onClick={() => toggleExperience(exp.id)}
          className="font-extralight bg-[#fff] text-[#0D0D0D] p-4 rounded-md"
        >
          <div className="flex items-center">
            <span className="font-medium">{exp.position}</span>
            <span className="text-[#F24B59] font-medium">{exp.company}</span>
          </div>
          <small className="font-extralight">{exp.date}</small>
        </div>

        <ul
          className={
            !activeExperiences[exp.id]
              ? "hidden"
              : "list-disc flex flex-col gap-2 text-slate-300 font-[Montserrat] text-sm font-light"
          }
        >
          {exp.achievements.map((achievement, index) => (
            <li className="ml-5" key={index}>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </article>
  ));
  return (
    <section id="experience" className="min-h-screen bg-[#0d0d0d]  p-6">
      <div className="lg:max-w-[1000px] mx-auto">
        <div className="">
          <h3 className="text-2xl md:text-3xl text-[#fff] font-semibold mt-20 mb-10 capitalize inline-block border-b-4 border-b-[#F24B59]">
            Work Experiences
          </h3>
        </div>
        <div className="flex flex-col gap-4">{workExperiences}</div>
      </div>
    </section>
  );
};

export default Experience;
