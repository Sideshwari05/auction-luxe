import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "../App.css";
import { fetchAuctions } from "../api";
import axios from "axios";

function Auction() {
  const [auctions, setAuctions] = useState([]);
  const navigate = useNavigate(); 

  // Mock Auction Data
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        title: "Pearl Pendant",
        image: "/images/pearl.jpeg",
        price: "36 million",
      },
      {
        id: 2,
        title: "Gigayacht",
        image: "/images/yatch.jpeg",
        price: "168 million",
      },
      {
        id: 3,
        title: "Oppenheimer Blue Diamond",
        image: "/images/diamond.jpeg",
        price: "57.5 million ",
      },
    ];
    console.log("Fetched Auctions:", mockData);
    setAuctions(mockData);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">Live Auctions</h2>
      <p className="text-center text-muted">Bid on exclusive items now!</p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {auctions.map((auction) => (
          <div key={auction.id} className="col">
            <div className="card shadow-lg border-0">
              <div className="img-container">
                <img src={auction.image} className="card-img-top" alt={auction.title} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-dark">{auction.title}</h5>
                <p className="text-muted">💰 Current Bid: <strong>{auction.price}</strong></p>
                <button className="btn btn-warning w-100" onClick={() => navigate("/place-bid")}>💸 Place Bid</button>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Auction;
