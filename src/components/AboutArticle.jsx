import React from "react";

const AboutArticle = ({ paragragh, title }) => {
  return (
    <div>
      <h3 className="text-lg md:text-xl font-medium">{title}</h3>
      <p className="text-[#333] font-light text-sm mt-3 leading-6 ">
        {paragragh}
      </p>
    </div>
  );
};

export default AboutArticle;
