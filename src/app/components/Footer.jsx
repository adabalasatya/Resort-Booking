import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Discover your perfect getaway with our handpicked resort listings.
            Experience luxury, relaxation, and adventure in stunning destinations worldwide.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@resortbooking.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Beach Avenue, Paradise City</p>
        </div>
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <form>
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Resort Booking. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
