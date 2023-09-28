import React from "react";
import { experiences } from "../constants";

const Experience = () => {
  const workExperiences = experiences.map((exp) => (
    <article key={exp.id}>
      <div>
        <span>{exp.position}</span>
        <span>{exp.company}</span>
      </div>
      <p>{exp.date}</p>
      <ul>
        {exp.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </article>
  ));
  return (
    <section>
      <div className="flex gap-10">
        <h2>Work Experiences</h2>
        <span className="w-[250px] h-[4px]"></span>
      </div>
      <div>{workExperiences}</div>
    </section>
  );
};

export default Experience;
