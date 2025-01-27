import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      if (user) {
        toast.success("Qeydiyyat tamamlandi");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="Signup sign">
      <h1>Sign up</h1>
      <div className="inputs_div">
        <div>
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
          <div>
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
        </div>
        <button onClick={signup}> Sign up</button>
      </div>
    </div>
  );
}

export default Signup;
