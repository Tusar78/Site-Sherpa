import { useState } from "react";
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
  return (
    <section className="section_hero">
      <div className="global-padding">
        <div className="container-regular">
          <div className="hero_content">
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
                <PrimaryBtn href="#" text="Book a demo" />
              </div>
            </div>

            <div className="hero_visual">
              {/* Hero Visual Section - Right Side */}
              <div className="hero_visual-bg"></div>

              {/* Cards Container */}
              <div className="hero_visual-elements">
                <div className="hero_card-left">
                  <div className="hero_card hero_card-site">
                    <img src={heroImgTwo} alt="Site Details" />
                  </div>

                  <div className="hero_card hero_card-portrait">
                    <img src={heroImgOne} alt="Safety Officer" />
                  </div>
                </div>
                <div className="hero_card-right">
                  <div className="hero_card hero_card-site">
                    <img src={heroImgThree} alt="Site Details" />
                  </div>

                  <div className="hero_card hero_card-portrait">
                    <img src={heroImgFour} alt="Safety Officer" />
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
                    Voice Incident Logged
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
