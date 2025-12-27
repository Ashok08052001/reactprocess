import React from "react";
import "../css/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <footer className="footer">
          <div className="footer-container">
            <h2 className="footer-title">My Movie Page</h2>

            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#">Movies</a>
              <a href="#">About</a>
            </div>

            <p className="footer-copy">
              © 2026 My Movie Page. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
