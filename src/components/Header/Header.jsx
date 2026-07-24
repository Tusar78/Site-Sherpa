import { useState } from "react";
import { logo } from "../../assets/images";
import "./Header.css";

function Header() {
  // State to manage mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="section_header">
      <div className="global-padding">
        <div className="container-regular">
          <div className="header_content">
            
            {/* Logo Section */}
            <div className="header_logo">
              <a href="#">
                <img
                  src={logo}
                  alt="Website logo"
                  className="header_logo-img"
                />
              </a>
            </div>

            {/* Desktop Navigation (Hidden on Mobile) */}
            <nav className="header_nav">
              <a href="#" className="header_nav-link">Platform</a>
              <a href="#" className="header_nav-link">Industries</a>
              <a href="#" className="header_nav-link">Consulting</a>
              <a href="#" className="header_nav-link">Pricing</a>
              <a href="#" className="header_nav-link">Resources</a>
              <a href="#" className="header_nav-link">About us</a>
            </nav>

            {/* Desktop Actions (Hidden on Mobile) */}
            <div className="header_actions">
              <a href="#" className="header_signin">Sign in</a>
              <button className="header_cta">Book a demo</button>
            </div>

            {/* Mobile Toggle Button (Hidden on Desktop) */}
            <button 
              className={`mobile_toggle ${isMenuOpen ? "is-active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" className="mobile_toggle-icon">
                <line x1="4" y1="6" x2="20" y2="6" className="line line-top" />
                <line x1="4" y1="12" x2="20" y2="12" className="line line-middle" />
                <line x1="4" y1="18" x2="20" y2="18" className="line line-bottom" />
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile_menu ${isMenuOpen ? "is-open" : ""}`}>
        <nav className="mobile_nav">
          <a href="#" className="mobile_nav-link">Platform</a>
          <a href="#" className="mobile_nav-link">Industries</a>
          <a href="#" className="mobile_nav-link">Consulting</a>
          <a href="#" className="mobile_nav-link">Pricing</a>
          <a href="#" className="mobile_nav-link">Resources</a>
        </nav>
        <div className="mobile_menu-actions">
          <a href="#" className="header_signin">Sign in</a>
          <button className="header_cta w-full justify-center">Book a demo</button>
        </div>
      </div>
    </header>
  );
}

export default Header;