import React from "react";

const AboutArticle = ({ paragragh, title }) => {
  return (
    <div>
      <h3 className="text-xl md:2xl font-medium">{title}</h3>
      <p className="text-slate-200 font-extralight ">{paragragh}</p>
    </div>
  );
};

export default AboutArticle;
