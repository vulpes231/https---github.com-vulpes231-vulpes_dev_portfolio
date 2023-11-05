import React from "react";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";

const Content = () => {
  // const expRef = useRef(null);
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
      <About />
    </div>
  );
};

export default Content;
