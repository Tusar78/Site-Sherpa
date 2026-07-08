import { logo } from "../../assets/images";
import "./Header.css";

function Header() {
  return (
    <header className="section_header">
      <div className="global-padding">
        <div className="container-regular">
          <div className="header_content">
            <div className="header_logo">
              <img
                src={logo}
                alt="Website logo"
                className="header_logo-img"
              />
            </div>

            <nav className="header_nav">
              <a href="#" className="header_nav-link">
                Platform
              </a>
              <a href="#" className="header_nav-link">
                Industries
              </a>
              <a href="#" className="header_nav-link">
                Consulting
              </a>
              <a href="#" className="header_nav-link">
                Pricing
              </a>
              <a href="#" className="header_nav-link">
                Resources
              </a>
            </nav>

            <div className="header_actions">
              <a href="#" className="header_signin">
                Sign in
              </a>
              <button className="header_cta">Book a demo</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
