import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sign from "../pages/Sign";
import ForgotPsw from "../pages/ForgotPsw";
function RouterConfig() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/sign" element={<Sign />} />
      <Route exact path="/reset_password" element={<ForgotPsw />} />
    </Routes>
  );
}

export default RouterConfig;
