import React from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { styles } from "../constants/styles";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`w-full ${styles.padding.large} hero min-h-screen flex items-center justify-center`}
    >
      <div
        className={`lg:max-w-[900px] lg:mx-auto flex flex-col ${styles.gap.large} px-8 w-full`}
      >
        <h3
          className={`text-2xl md:text-5xl leading-7 text-center ${styles.fontFamily.primary} whitespace-nowrap font-bold text-[#fff]`}
        >
          I'm Adebayo <span className="text-[#F24B59]">Olayinka.</span>
        </h3>
        <p
          className={`${styles.colors.lightText} text-center  capitalize w-full md:w-[95%] md:mx-auto ${styles.fontFamily.primary} font-extralight md:text-xl `}
        >
          I'm a passionate fullstack software developer with a deep love for
          creating innovative and efficient solutions. With 2 years of
          experience in the industry, I've had the opportunity to work on a
          variety of projects that have honed my skills and allowed me to grow
          as a developer.
        </p>
        <button
          className={`${styles.padding.mid} ${styles.colors.bgColor} flex items-center ${styles.gap.small} ${styles.colors.lightText} rounded-lg mt-5 justify-center font-bold ${styles.fontFamily.primary} text-lg md:text-xl capitalize md:w-[450px] md:mx-auto hover:border hover:border-[#F24B59] hover:bg-transparent`}
        >
          View my projects
          <BsArrowLeftRight className="font-semibold" size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
