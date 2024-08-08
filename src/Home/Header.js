import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Eyesome</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/aboutus">About Us</a>
        <a href="/contactpage">Contact Us</a>
      </nav>
      <div className="icons">
      <a href="/signup" className="signup-button">Signup</a>
        <a href="/login" className="login-button">Login</a> {/* Added login button */}
      </div>
    </header>
  );
};

export default Header;
