import React from "react";
import AboutArticle from "./AboutArticle";
import { aboutArticles } from "../constants";
import { about } from "../assets";
import { motion } from "framer-motion";
import { styles } from "../constants/styles";

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
      <div className="lg:max-w-[1000px] mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold mt-20 mb-10 capitalize inline-block border-b-4 border-b-[#F24B59]">
          About Me
        </h3>
        <div className="flex flex-col lg:flex-row md:gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 0.5 },
            }}
            className="flex flex-col gap-4 w-full"
          >
            {myAbout}
          </motion.div>
          <motion.figure
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="hidden md:flex md:w-full md:items-center md:justify-center md:p-2 "
            style={{ opacity: 0.5 }}
          >
            <img src={about} alt="" className="w-full" />
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default About;
