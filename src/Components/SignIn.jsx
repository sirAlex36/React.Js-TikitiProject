import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );
      const data = await response.json();

      if (data.length > 0) {
      
        navigate("/"); 
      } else {
       
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error("Error checking user:", err);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="card p-4 shadow"
        style={{ width: "300px" }}
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-3">Login</h3>

        {error && <p className="text-danger">{error}</p>}

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

