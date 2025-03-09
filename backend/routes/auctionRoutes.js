import express from "express";
import Auction from "../models/Auction.js";

const router = express.Router();

// Create Auction
router.post("/", async (req, res) => {
  try {
    const { title, description, startingBid, endTime } = req.body;

    const newAuction = new Auction({ title, description, startingBid, endTime });
    await newAuction.save();

    res.status(201).json(newAuction);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get All Auctions
router.get("/", async (req, res) => {
  const auctions = await Auction.find();
  res.json(auctions);
});

// Get Single Auction
router.get("/:id", async (req, res) => {
  const auction = await Auction.findById(req.params.id);
  res.json(auction);
});

// Bid on Auction
router.post("/bid/:id", async (req, res) => {
  try {
    const { bidAmount, bidderName } = req.body;
    const auction = await Auction.findById(req.params.id);

    if (!auction) {
      return res.status(404).json({ message: "Auction not found" });
    }

    if (auction.isClosed) {
      return res.status(400).json({ message: "Auction is closed" });
    }

    if (Date.now() > new Date(auction.endTime)) {
      auction.isClosed = true;
      await auction.save();
      return res.status(400).json({ message: "Auction time is over" });
    }

    if (bidAmount > auction.currentBid) {
      auction.currentBid = bidAmount;
      auction.highestBidder = bidderName;
      await auction.save();
      return res.json({ message: "Bid placed successfully", auction });
    } else {
      return res.status(400).json({ message: "Bid must be higher than the current bid" });
    }
  } catch (error) {
    console.error("Error placing bid:", error);
    res.status(500).json({ message: "Server error", error });
  }
});


// Delete Auction
router.delete("/:id", async (req, res) => {
  await Auction.findByIdAndDelete(req.params.id);
  res.json({ message: "Auction deleted" });
});

// Edit Auction
router.put("/:id", async (req, res) => {
  const updatedAuction = await Auction.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedAuction);
});

export default router;
