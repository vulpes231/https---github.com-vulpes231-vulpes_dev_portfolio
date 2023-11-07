import React from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const myProjects = projects.map((project) => {
    return (
      <article
        key={project.id}
        className="w-full flex flex-col justify-between gap-4 rounded-lg bg-[#fff] bg-opacity-80 p-4"
      >
        <figure>
          <img src={project.img} alt="bank-project-image" className="w-full" />
        </figure>
        <p className="text-[#333] leading-5 font-light text-center">
          {project.title}
        </p>
        <div className="flex gap-2 justify-center">
          {project.tools.map((tool, index) => {
            const className = tool.includes("React.js")
              ? "text-cyan-500"
              : tool.includes("Node.js")
              ? "text-lime-500"
              : tool.includes("MongoDB")
              ? "text-green-500"
              : tool.includes("Redux")
              ? "text-purple-500"
              : "";
            return (
              <span
                key={index}
                className={`${className} bg-[#fff] p-2  rounded-md font-extralight text-xs`}
              >
                {tool}
              </span>
            );
          })}
        </div>
        <div className="bg-[#333] p-2 rounded-md">
          <p>Demo url:</p>
          <p>Repo url:</p>
        </div>
      </article>
    );
  });
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0d0d0d] p-6 text-[#fff]"
    >
      <h3 className="text-2xl md:text-3xl text-[#fff] font-semibold mt-20 mb-10 capitalize inline-block border-b-4 border-b-[#F24B59] lg:ml-28">
        Projects
      </h3>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 0.5 },
        }}
        // transition={{ type: "tween", stiffness: 100 }}
        className="lg:max-w-[1000px] mx-auto"
      >
        <div className="grid gap-4 md:grid-cols-2 w-full">{myProjects}</div>
      </motion.div>
    </section>
  );
};

export default Projects;
