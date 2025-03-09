import React from "react";
import { fetchAuctions } from "../api";

function AuctionCard({ title, image, price }) {
  return (
    <div className="col-md-4">
      <div className="card shadow-lg border-0">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <p className="card-text text-muted">💰 Current Bid: <strong>${price}</strong></p>
          <button className="btn btn-warning w-100">💸 Place Bid</button>
        </div>
      </div>
    </div>
  );
}

export default AuctionCard;
