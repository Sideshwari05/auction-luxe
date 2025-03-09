import mongoose from "mongoose";

const AuctionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startingBid: { type: Number, required: true },
  currentBid: { type: Number, default: 0 },
  highestBidder: { type: String, default: null },
  endTime: { type: Date, required: true },
  isClosed: { type: Boolean, default: false },
});

export default mongoose.model("Auction", AuctionSchema);
