import { useState, useEffect } from "react";
import {
  circleIcon,
  heroImgOne,
  heroImgTwo,
  heroImgThree,
  heroImgFour,
  shieldAlert,
  audiLicense,
} from "../../assets/images";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import "./Hero.css";

function Hero() {
  const [activeTab, setActiveTab] = useState("risk");

  // Auto-play logic: Switch tab every 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prevTab) => (prevTab === "risk" ? "voice" : "risk"));
    }, 3000); // 2 seconds

    // Cleanup timer if user clicks manually or component unmounts
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="section_hero">
      <div className="global-padding">
        <div className="container-regular">
          <div className="hero_content">
            
            {/* Left Content */}
            <div className="hero_left">
              <div className="hero_badge">
                <div className="hero_badge-left">
                  <img
                    className="hero_badge-dot"
                    src={circleIcon}
                    alt="Shield icon"
                  />
                  <span className="hero_badge-txt">AI-Powered</span>
                </div>
                <span className="hero_badge-text">
                  Safety software built by operators, for operators
                </span>
              </div>
              
              <h1 className="hero_title">
                Get on site faster with safety software that doesn't suck.
              </h1>

              <p className="hero_description">
                Customised Risk assessments in 30 seconds and incidents logged
                by voice— so when the auditor shows up, you're already covered.
              </p>

              <div className="hero_actions">
                <PrimaryBtn href="#" text="Book a demo" bg="red" />
              </div>
            </div>

            {/* Right Visual Section */}
            <div className="hero_visual">
              <div className="hero_visual-bg"></div>

              {/* Cards Container with smooth fade transition */}
              <div key={activeTab} className="hero_visual-elements animate-fade">
                
                <div className="hero_card-left">
                  <div className="hero_card hero_card-site">
                    {/* Image changes dynamically based on activeTab */}
                    <img src={activeTab === "risk" ? heroImgTwo : heroImgFour} alt="Site Details" />
                  </div>

                  <div className="hero_card hero_card-portrait">
                    <img src={activeTab === "risk" ? heroImgOne : heroImgThree} alt="Safety Officer" />
                  </div>
                </div>

                <div className="hero_card-right">
                  <div className="hero_card hero_card-site">
                    <img src={activeTab === "risk" ? heroImgThree : heroImgTwo} alt="Site Details" />
                  </div>

                  <div className="hero_card hero_card-portrait">
                    <img src={activeTab === "risk" ? heroImgFour : heroImgOne} alt="Safety Officer" />
                  </div>
                </div>

              </div>

              {/* Bottom Tabs */}
              <div className="hero_visual-tabs">
                <div className="tab_container">
                  
                  {/* Risk Assessment Tab */}
                  <button
                    className={`tab_btn ${activeTab === "risk" ? "tab_btn--active" : ""}`}
                    onClick={() => setActiveTab("risk")}
                  >
                    <img src={shieldAlert} alt="Risk" className="tab_icon" />
                    Risk assessment
                  </button>

                  {/* Voice Incident Tab */}
                  <button
                    className={`tab_btn ${activeTab === "voice" ? "tab_btn--active" : ""}`}
                    onClick={() => setActiveTab("voice")}
                  >
                    <img src={audiLicense} alt="Voice" className="tab_icon" />
                    Voice reporting
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;