import React from "react";
import AboutArticle from "./AboutArticle";
import { aboutArticles } from "../constants";
import { about } from "../assets";

const About = () => {
  const myAbout = aboutArticles.map((about) => {
    return (
      <div key={about.id}>
        <AboutArticle title={about.title} paragragh={about.content} />
      </div>
    );
  });

  return (
    <section id="about" className="min-h-screen bg-[#0d0d0d] text-[#fff]  p-6">
      <div className="lg:max-w-[1000px] mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold mt-20 mb-10 capitalize inline-block border-b-4 border-b-[#F24B59]">
          About Me
        </h3>
        <div className="flex flex-col lg:flex-row md:gap-6">
          <div className="flex flex-col gap-4 w-full">{myAbout}</div>
          <figure className="hidden md:flex md:w-full md:items-center md:justify-center md:p-2 ">
            <img src={about} alt="" className="w-full" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
