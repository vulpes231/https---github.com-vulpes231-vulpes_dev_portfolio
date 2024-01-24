import React from "react";

const AboutArticle = ({ paragragh, title }) => {
  return (
    <div>
      <h3 className="text-lg md:2xl font-medium">{title}</h3>
      <p className="text-[#333] font-extralight text-xs mt-3 ">{paragragh}</p>
    </div>
  );
};

export default AboutArticle;
