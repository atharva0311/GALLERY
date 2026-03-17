import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-logo">🏙️ Cityscapes</Link>
      <div className="nav-links">
        <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link>
        <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
