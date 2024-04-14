import React from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../constants/styles";
import { Link } from "react-router-dom";

const Projects = () => {
  const myProjects = projects.map((project) => {
    return (
      <motion.article
        key={project.id}
        className="w-full flex flex-col justify-between gap-4 rounded-lg bg-[#fff] bg-opacity-80 p-4 cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 0.5 },
        }}
      >
        <figure>
          <img src={project.img} alt="bank-project-image" className="w-full" />
        </figure>
        <p className="text-[#333] leading-7 font-light text-xs text-center px-4">
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
              : tool.includes("AI")
              ? "text-pink-500"
              : tool.includes("Tailwind")
              ? "text-blue-300"
              : "";
            return (
              <span
                key={index}
                className={`${className} bg-[#fff] p-2  rounded-md font-semibold text-xs`}
              >
                {tool}
              </span>
            );
          })}
        </div>
        <div className="bg-[#333] p-2 rounded-md text-[#fff]">
          <p className="flex items-center gap-5 text-xs font-light ">
            Live url:
            <Link
              className="font-extralight underline "
              target="_blank"
              to={project.demo_url}
            >
              {project.demo_url.substring(0, 25) || "Link not available"}
            </Link>
          </p>
          <p className="flex items-center gap-5 text-xs font-light ">
            Repo url:{" "}
            <Link
              className="font-extralight underline "
              target="_blank"
              to={project.repo_url}
            >
              {project.repo_url.substring(0, 25) + "..." ||
                "Link not available"}
            </Link>
          </p>
        </div>
      </motion.article>
    );
  });
  return (
    <section
      id="projects"
      className={`${styles.colors.darkBg} ${styles.padding.large} min-h-screen ${styles.fontFamily.primary} `}
    >
      <h3 className="text-2xl md:text-3xl text-[#fff] font-semibold mt-20 mb-10 capitalize inline-block border-b-4 border-b-[#F24B59] lg:ml-28">
        Projects
      </h3>
      <div className="lg:max-w-[1000px] mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
          {myProjects}
        </div>
      </div>
    </section>
  );
};

export default Projects;
