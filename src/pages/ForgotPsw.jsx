import React, { useState } from "react";

function ForgotPsw() {
  const [email, setEmail] = useState("");
  return (
    <div className="fgtpswrd">
      <h1>Send link for reset your password</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="inputs"
        type="text"
        placeholder="Email"
      />
      <button>Reset</button>
    </div>
  );
}

export default ForgotPsw;
