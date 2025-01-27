import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sign from "../pages/Sign";
function RouterConfig() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/sign" element={<Sign />} />
    </Routes>
  );
}

export default RouterConfig;
