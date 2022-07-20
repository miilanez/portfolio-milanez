import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route component={() => <div>Error 404!</div>} />
      </Routes>
    </div>
  );
};

export default Routing;