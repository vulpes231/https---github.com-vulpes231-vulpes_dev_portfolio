import React from "react";
import { experiences } from "../constants";
import { myStyles } from "../styles";

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
    <section id="experience" className={`${myStyles.screenSize}`}>
      <div className="flex gap-10">
        <h2>Work Experiences</h2>
        <span className="w-[250px] h-[4px]"></span>
      </div>
      <div>{workExperiences}</div>
    </section>
  );
};

export default Experience;
