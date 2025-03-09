import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BrowseAuction() {
  const [auctions, setAuctions] = useState([]);
  const navigate = useNavigate(); 

  // Fetch Auctions Data (Replace with backend API)
  useEffect(() => {
    const mockData = [
      { id: 1, title: "Bonhams Art", image: "/images/art.jpeg", price: "450.3 million" },
      { id: 2, title: "Hermès Birkin Bag", image: "/images/bag.jpeg", price: "1.9 million" },
      { id: 3, title: "Bonhams Goutama Buddha", image: "/images/budda.jpeg", price: "57.5 million" },
      { id: 4, title: "Flower Vase", image: "/images/vase.jpeg", price: "13.6 million" },
    ];
    setAuctions(mockData);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">Browse Auctions</h2>
      <p className="text-center text-muted">Find exclusive luxury items up for bid!</p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {auctions.map((auction) => (
          <div key={auction.id} className="col">
            <div className="card shadow-lg border-0">
              <div className="img-container">
                <img src={auction.image} className="card-img-top" alt={auction.title} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-dark">{auction.title}</h5>
                <p className="text-muted">💰 Price: <strong>{auction.price}</strong></p>
                <button className="btn btn-warning w-100" onClick={() => navigate("/place-bid")}>💸 Place Bid</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseAuction;
