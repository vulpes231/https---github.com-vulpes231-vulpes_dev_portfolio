import React from "react";
import { experiences } from "../constants";
import { myStyles } from "../styles";

const Experience = () => {
  const workExperiences = experiences.map((exp) => (
    <article key={exp.id} className="flex flex-col gap-3">
      <div>
        <div className="font-extralight">
          <span>{exp.position}</span>
          <span>{exp.company}</span>
        </div>
        <p>{exp.date}</p>
        <ul className="text-slate-300 list-disc flex flex-col gap-2">
          {exp.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </article>
  ));
  return (
    <section
      id="experience"
      className={`${myStyles.screenSize} bg-[#051026] bg-opacity-80 flex flex-col gap-4`}
    >
      <div className="">
        <h3 className="text-2xl font-semibold">Work Experiences</h3>
      </div>
      <div>{workExperiences}</div>
    </section>
  );
};

export default Experience;
