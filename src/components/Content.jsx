import React from "react";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";

const Content = () => {
  // const expRef = useRef(null);
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
    </div>
  );
};

export default Content;
