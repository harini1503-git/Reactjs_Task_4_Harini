import React, { useState } from "react";
import { useAuth } from "./useAuth";

function Login() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth.login({ email: email, password: password });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <span>Email</span>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <span>Password</span>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleLogin}>
        Log in
      </button>
    </div>
  );
}

export default Login;