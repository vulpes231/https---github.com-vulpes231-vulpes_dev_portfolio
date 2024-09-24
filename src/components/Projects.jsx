import React from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../constants/styles";
import { Link } from "react-router-dom";
import { FaFolderOpen } from "react-icons/fa6";

const Projects = () => {
  const myProjects = projects.map((project) => {
    return (
      <motion.article
        layout
        key={project.id}
        className="w-full flex flex-col justify-between gap-4 rounded-lg bg-black cursor-pointer border border-slate-600"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          x: { duration: 0.5 },
        }}
      >
        <figure>
          <img
            src={project.img}
            alt="bank-project-image"
            className="w-full h-[150px]"
          />
        </figure>
        <p className="leading-5 font-light text-xs text-center px-4 font-[Ubuntu]">
          {project.title}
        </p>
        <div className="flex gap-2 justify-center flex-wrap">
          {project.tools.map((tool, index) => {
            const className = tool.includes("ReactJs")
              ? "text-cyan-500"
              : tool.includes("NodeJs")
              ? "text-lime-500"
              : tool.includes("MongoDB")
              ? "text-green-500"
              : tool.includes("Redux")
              ? "text-purple-500"
              : tool.includes("AI")
              ? "text-pink-500"
              : tool.includes("Tailwind")
              ? "text-blue-300"
              : "";
            return (
              <span
                key={index}
                className={`${className} bg-slate-950 border border-slate-800 p-2  rounded-md font-semibold text-xs`}
              >
                {tool}
              </span>
            );
          })}
        </div>
        <div className="bg-white border-t border-slate-600 p-2 text-green-500 flex items-center gap-1">
          <FaFolderOpen />
          <Link
            className="font-medium uppercase text-xs underline "
            target="_blank"
            to={project.repo_url}
          >
            view repository
          </Link>
        </div>
      </motion.article>
    );
  });
  return (
    <section id="projects" className={`bg-slate-950 w-full p-6`}>
      <div className="md:w-[1000px] md:mx-auto flex flex-col gap-6 ">
        <div className="flex md:justify-center">
          <h3 className="text-lg md:text-xl text-[#fff] font-semibold inline-block border-b-4 border-b-green-600 uppercase my-10">
            recent projects
          </h3>
        </div>

        <div className="lg:max-w-[1000px] mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {myProjects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
