import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { FaFileSignature, FaDollarSign, FaClock, FaClipboardList } from "react-icons/fa";

const API_URL = "http://localhost:5000/api"; // Ensure this matches your backend URL

const PostAuction = () => {
  const navigate = useNavigate();
  const [auctionData, setAuctionData] = useState({
    title: "",
    description: "",
    startingBid: "",
    endTime: "",
  });

  const handleChange = (e) => {
    setAuctionData({ ...auctionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${API_URL}/auctions`, auctionData)
      .then(response => {
        const newAuction = response.data;
        alert("🎉 Auction Posted Successfully!");
        navigate(`/auction/${newAuction._id}`); // Redirect to auction details page
      })
      .catch(error => {
        console.error("Error posting auction:", error);
        alert("❌ Failed to post auction.");
      });
  };

  return (
    <div className="post-auction-container" style={{ padding: "30px", maxWidth: "600px", margin: "50px auto", backgroundColor: "#f8f9fa", borderRadius: "15px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", textAlign: "center" }}>
      <h2 style={{ textAlign: "center", color: "#007bff", marginBottom: "20px" }}>📝 Create a New Auction</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group" style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
          <FaFileSignature className="icon" />
          <input type="text" name="title" placeholder="Auction Title" value={auctionData.title} onChange={handleChange} required className="input-field" style={{ flex: "1" }} />
        </div>
        
        <div className="input-group" style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
          <FaClipboardList className="icon" />
          <textarea name="description" placeholder="Auction Description" value={auctionData.description} onChange={handleChange} required className="textarea-field" style={{ width: "100%", height: "100px" }} />
        </div>
        
        <div className="input-group" style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
          <FaDollarSign className="icon" />
          <input type="number" name="startingBid" placeholder="Starting Bid ($)" value={auctionData.startingBid} onChange={handleChange} required className="input-field" style={{ flex: "1" }} />
        </div>
        
        <div className="input-group" style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
          <FaClock className="icon" />
          <input type="datetime-local" name="endTime" placeholder="End Time" value={auctionData.endTime} onChange={handleChange} required className="input-field" style={{ flex: "1" }} />
        </div>

        <button type="submit" className="submit-button" style={{ width: "100%", padding: "12px", backgroundColor: "#007bff", color: "white", fontSize: "18px", fontWeight: "bold", border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "15px" }}>Submit Auction</button>
      </form>
    </div>
  );
};

export default PostAuction;