import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BrowseAuction from "./pages/BrowseAuction";
import Auctions from "./pages/Auctions";
import PlaceBid from "./components/PlaceBid";
import Dashboard from "./pages/Dashboard";
import PostAuction from "./pages/PostAuction";
import AuctionDetails from "./components/AuctionDetails"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios, { Axios } from "axios";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse-auction" element={<BrowseAuction />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/" element={<Auctions />} />
          <Route path="/place-bid" element={<PlaceBid />} />
          <Route path="/post-auction" element={<PostAuction />} /> 
          <Route path="/auction/:auctionId" element={<AuctionDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
