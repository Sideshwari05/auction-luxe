import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const [countdown, setCountdown] = useState("00:00:00");

  useEffect(() => {
    const targetTime = new Date().getTime() + 7200000; // 2 hours from now
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("Auction Ended");
      } else {
        const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
        setCountdown(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1 className="display-3 fw-bold glowing-text">Welcome to Auction Luxe</h1>
      <p className="lead">Find and bid on amazing items before time runs out!</p>

      {/* Live Countdown */}
      <h3 className="text-danger fw-bold">⏳ Live Auction Ends In: {countdown}</h3>

      {/* Featured Auctions Banner - Centered */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-8 d-flex justify-content-center">
          <img
            src="/images/Auction-banner.jpeg"
            alt="Auction Item"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className="mt-4">
      <Link to="/browse-auction" className="btn btn-lg btn-primary me-3">
  📢 Browse Auctions
</Link>

        <Link to="/post-auction" className="btn btn-lg btn-warning">
          💰 Sell an Item
        </Link>
      </div>
    </div>
  );
}

export default Home;
