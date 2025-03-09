import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Auction App | All Rights Reserved</p>
        <p>
          <a href="/privacy" className="text-light mx-2">Privacy Policy</a> |  
          <a href="/terms" className="text-light mx-2">Terms of Service</a> |  
          <a href="/contact" className="text-light mx-2">Contact Us</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
