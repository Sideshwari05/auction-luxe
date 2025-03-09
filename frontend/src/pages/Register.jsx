import React, { useState } from "react";
import { signup } from "../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h2 className="text-center text-primary mb-4">🔐 Register</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <input type="text" name="username" placeholder="Username" className="form-control mb-3" required onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" className="form-control mb-3" required onChange={handleChange} />
              <input type="password" name="password" placeholder="Password" className="form-control mb-3" required onChange={handleChange} />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control mb-3" required onChange={handleChange} />
              <button type="submit" className="btn btn-primary w-100">🚀 Register</button>
            </form>
            <p className="text-center mt-3">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
