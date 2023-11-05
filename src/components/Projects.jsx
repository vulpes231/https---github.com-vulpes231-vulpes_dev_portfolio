import React from "react";
import { projects } from "../constants";

const Projects = () => {
  const myProjects = projects.map((project) => {
    return (
      <>
        <article
          key={project.id}
          className="w-full flex flex-col justify-between gap-4 rounded-lg bg-[#fff] bg-opacity-80 p-4"
        >
          <figure>
            <img
              src={project.img}
              alt="bank-project-image"
              className="w-full"
            />
          </figure>
          <p className="text-[#333] leading-5 font-light text-center">
            {project.title}
          </p>
          <div className="flex gap-2 justify-center">
            {project.tools.map((tool) => {
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
                  key={tool}
                  className={`${className} bg-[#fff] p-2  rounded-md font-extralight text-xs`}
                >
                  {tool}
                </span>
              );
            })}
          </div>
          <div className="bg-[#333]">
            <p>Demo url:</p>
            <p>Repo url:</p>
          </div>
        </article>
      </>
    );
  });
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0d0d0d] p-6 text-[#fff]"
    >
      <h3 className="text-2xl text-[#fff] font-semibold mt-20 mb-10 uppercase inline-block border-b-4 border-b-[#F24B59]">
        Recent Projects
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
        {myProjects}
      </div>
    </section>
  );
};

export default Projects;
