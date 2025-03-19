import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';  // Disable body scroll
    } else {
      document.body.style.overflow = 'auto';  // Enable body scroll
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);  // Close menu when clicked outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const items = ["Home", "Shop", "Support", "Deals", "Blog"];

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-logo">
        <h2>E-commerce</h2>
      </div>

      {/* Navbar Items */}
      <div className={`navbar-items ${isOpen ? 'active' : ''}`}>
        {items.map((item, index) => (
          <a href={`#${item}`} key={index} onClick={() => setIsOpen(false)}>{item}</a>
        ))}
      </div>

      <div className="navbar-right">
        {/* Search Bar */}
        <div className="navbar-search">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">🔍</button>
        </div>

        {/* Hamburger Button */}
        <button className={`hamburger-btn ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
