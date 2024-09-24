import React from "react";
import AboutArticle from "./AboutArticle";
import { aboutArticles } from "../constants";
import { about } from "../assets";
import { motion } from "framer-motion";
import { styles } from "../constants/styles";
import { css, html, js, mongo, node, react, rn, tail } from "../assets";
import Stacks from "./Stacks";

const About = () => {
  const myAbout = aboutArticles.map((about) => {
    return (
      <div key={about.id}>
        <AboutArticle title={about.title} paragragh={about.content} />
      </div>
    );
  });

  return (
    <section
      id="about"
      className={`${styles.colors.darkBg} ${styles.padding.large} min-h-screen bg-opacity-10 ${styles.fontFamily.primary}`}
    >
      <div className="md:max-w-[1000px] md:mx-auto">
        <div className="flex md:justify-center">
          <h3 className="text-lg md:text-xl text-[#fff] font-semibold inline-block border-b-4 border-b-green-600 uppercase my-10">
            About Me
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between md:gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 0.5 },
            }}
            className="flex flex-col gap-8 w-full"
          >
            {myAbout}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="hidden md:grid grid-cols-3 w-full p-6"
            style={{ opacity: 0.5 }}
          >
            <Stacks title={"HTML"} pic={html} />
            <Stacks title={"CSS"} pic={css} />
            <Stacks title={"Javascript"} pic={js} />
            <Stacks title={"React"} pic={react} />
            <Stacks title={"React Native"} pic={rn} />
            <Stacks title={"Node.js"} pic={node} />
            <Stacks title={"MongoDB"} pic={mongo} />
            <Stacks title={"Tailwind CSS"} pic={tail} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
