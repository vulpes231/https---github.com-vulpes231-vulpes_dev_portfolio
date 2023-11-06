import React from "react";

const AboutArticle = ({ paragragh, title }) => {
  return (
    <div>
      <h3 className="text-xl md:2xl">{title}</h3>
      <p className="text-[#fff]">{paragragh}</p>
    </div>
  );
};

export default AboutArticle;
