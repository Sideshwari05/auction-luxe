import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import { FaMoneyBillWave, FaUser, FaCreditCard } from "react-icons/fa";

const PlaceBid = () => {
  const navigate = useNavigate();
  const [bidAmount, setBidAmount] = useState("");
  const [bidderName, setBidderName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handleBid = () => {
    if (!bidAmount || !bidderName) {
      alert("Please enter your name and bid amount.");
      return;
    }
    alert(`Bid of $${bidAmount} placed successfully by ${bidderName} using ${paymentMethod}!`);
    navigate("/");
  };

  return (
    <div className="place-bid-container" style={{ padding: "20px", margin: "20px auto", maxWidth: "400px" }}>
      <h2 className="title">💎 Place Your Bid 💎</h2>
      <p className="description">Enter your bid details and choose a payment method.</p>
      
      <div className="input-group" style={{ marginBottom: "15px" }}>
        <FaUser className="icon" />
        <input
          type="text"
          placeholder="Enter your name"
          value={bidderName}
          onChange={(e) => setBidderName(e.target.value)}
          className="input-field"
        />
      </div>
      
      <div className="input-group" style={{ marginBottom: "15px" }}>
        <FaMoneyBillWave className="icon" />
        <input
          type="number"
          placeholder="Enter bid amount"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          className="input-field"
        />
      </div>
      
      <div className="input-group" style={{ marginBottom: "15px" }}>
        <FaCreditCard className="icon" />
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="select-field"
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
      </div>
      
      <button onClick={handleBid} className="bid-button" style={{ marginRight: "10px" }}>🚀 Submit Bid</button>
      <button onClick={() => navigate("/")} className="back-button">🔙 Go Back</button>
    </div>
  );
};

export default PlaceBid;
