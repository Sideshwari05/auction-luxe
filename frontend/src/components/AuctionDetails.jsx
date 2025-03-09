import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Ensure it matches your backend

const AuctionDetails = () => {
  const { auctionId } = useParams(); // Get the auction ID from URL
  const navigate = useNavigate();
  const [auction, setAuction] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/auctions/${auctionId}`)
      .then(response => {
        setAuction(response.data);
      })
      .catch(error => {
        console.error("Error fetching auction details:", error);
      });
  }, [auctionId]);

  return (
    <div className="auction-details-container">
      {auction ? (
        <>
          <h2>{auction.title}</h2>
          <p>{auction.description}</p>
          <p>Starting Bid: ${auction.startingBid}</p>
          <p>Current Bid: ${auction.currentBid || auction.startingBid}</p>
          <p>Ends At: {new Date(auction.endTime).toLocaleString()}</p>
          <button type="submit" className="submit-button" onClick={() => navigate("/auctions")} style={{ width: "100%", padding: "12px", backgroundColor: "#007bff", color: "white", fontSize: "18px", fontWeight: "bold", border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "15px" }}>Back to Auctions</button>
        </>
      ) : (
        <p>Loading auction details...</p>
      )}
    </div>
  );
};

export default AuctionDetails;
