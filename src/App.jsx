import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sign from "./pages/Sign";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./config/RouterConfig";

function App() {
  return (
    <>
      <RouterConfig />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
