import React, { useContext, useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setNavTitle } = useOutletContext();

  useEffect(() => {
    setNavTitle?.("Login");
  }, [setNavTitle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("body:", JSON.stringify({ username, password }));
    const ok = await login(username, password);
    if (ok) navigate("/vessels");
    else alert("Login failed");
  };

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
