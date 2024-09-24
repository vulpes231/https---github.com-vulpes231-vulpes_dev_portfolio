import React from "react";

const AboutArticle = ({ paragragh, title }) => {
  return (
    <div className="">
      <h3 className="text-lg md:text-xl font-medium">{title}</h3>
      <p className="font-light text-sm mt-3 leading-6 text-slate-400">
        {paragragh}
      </p>
    </div>
  );
};

export default AboutArticle;
