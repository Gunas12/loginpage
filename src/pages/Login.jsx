import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        toast.success("Girish edildi");
        navigate("/");
        localStorage.setItem("user", JSON.stringify({ email: user.email }));
      }
    } catch (error) {
      toast.error("Giriş ugursuz oldu" + error.message);
    }
  };
  const loginGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      if (user) {
        toast.success("Girish edildi");
        navigate("/");
        localStorage.setItem("user", JSON.stringify({ email: user.email }));
      }
    } catch (error) {
      toast.error("Giriş ugursuz oldu" + error.message);
    }
  };
  return (
    <div className="Login sign">
      <h1>Log in</h1>

      <div className="inputs_div">
        <p style={{ display: "flex", alignItems: "center", margin: 0 }}>
          Login with
          <a onClick={loginGoogle}>
            <FcGoogle style={{ fontSize: "27px", marginLeft: "10px" }} />
          </a>
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputs"
            type="text"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputs"
            type="password"
            placeholder="Password"
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
            <a href="# ">Forgot password?</a>
          </div>
        </div>

        <button onClick={login}> Log in</button>
      </div>
    </div>
  );
}

export default Login;
