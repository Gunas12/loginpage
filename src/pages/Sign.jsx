import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Sign() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleOverlay = () => {
    setShowLogin((prev) => !prev);
  };
  return (
    <div className="cool">
      <div className="Container">
        <Login />
        <Signup />
        <div
          className={`overlay ${showLogin ? "show" : "hide"}`}
          onClick={toggleOverlay}
        >
          {showLogin ? (
            <div>
              <h1> Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="btn1">Sign in</button>
            </div>
          ) : (
            <div>
              <h1> Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="btn1"> Sign up</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sign;
