import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Content, Error } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
