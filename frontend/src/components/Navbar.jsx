import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Auction Luxe</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">🔑 Login</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-warning text-dark px-3" to="/register">🚀 Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
