import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const UserNavigation = ({ userName }) => {
  return (
    <div className="navSection">

      <div className="navLinks">
        <Link href="/" className="link">
          <h2>Home</h2>
        </Link>
        <Link href="/invoice" className="link">
          <h2>Your Bookings</h2>
        </Link>
      </div>

      {/* Centered Welcome Message */}
      <p className="welcomeMessage">
        Welcome:
        <span style={{ color: 'red', marginLeft: '5px', fontSize: '1.2rem' }}>
          {userName}
        </span>
      </p>

      {/* Right Navigation Links */}
      <div className="navLinks">
        <div className="contactIcons">
          <Link href="https://twitter.com" target="_blank" className="icon">
            <FaTwitter />
          </Link>
          <Link href="mailto:satya1adabala@gmail.com" className="icon">
            <FaEnvelope />
          </Link>
          <Link href="tel:9515432936" className="icon">
            <FaPhoneAlt />
          </Link>
        </div>
        <Link href="/api/auth/signout" className="link">
          <div className="logout">Logout</div>
        </Link>
      </div>
    </div>
  );
};

export default UserNavigation;
