import React, { useEffect } from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";

const Content = () => {
  useEffect(() => {
    document.title = "Adebayo Olayinka - Portfolio";
  });
  return (
    <div className="">
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Content;
