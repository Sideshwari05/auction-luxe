import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [auctions, setAuctions] = useState([
    { id: 1, title: "Aurora Diamante fountain pen", price: "$250,000", status: "Active" },
    { id: 2, title: "Hermès Birkin bag", price: "$5,500", status: "Sold" },
    { id: 3, title: "Plaque-Wooden with gold leaf", price: "$12,000", status: "Active" },
  ]);

  return (
    <div className="d-flex">
      {/* Sidebar Navigation */}
      <div className="bg-dark text-white p-4" style={{ width: "250px", height: "100vh" }}>
        <h3 className="text-center">⚡ Dashboard</h3>
        <ul className="nav flex-column">
          <li className="nav-item my-2"><Link className="nav-link text-light" to="/">🏠 Home</Link></li>
          <li className="nav-item my-2"><Link className="nav-link text-light" to="/auctions">🛒 Auctions</Link></li>
          <li className="nav-item my-2"><Link className="nav-link text-light" to="/post-auction">➕ Post Auction</Link></li>
          <li className="nav-item my-2"><Link className="nav-link text-light" to="/logout">🚪 Logout</Link></li>
        </ul>
      </div>

      {/* Main Dashboard Content */}
      <div className="container mt-5">
        <h2 className="text-primary">Your Auctions</h2>

        <div className="row mt-3">
          {auctions.map((auction) => (
            <div key={auction.id} className="col-md-4">
              <div className="card shadow-lg p-3 text-center">
                <h5 className="text-dark">{auction.title}</h5>
                <p className="text-muted">Current Price: <strong>{auction.price}</strong></p>
                <span className={auction.status === "Active" ? "badge bg-success" : "badge bg-danger"}>{auction.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Link to="/post-auction" className="btn btn-primary w-100">+ Post New Auction</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
