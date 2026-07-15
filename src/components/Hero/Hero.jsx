import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

// Register the GSAP plugin for React
gsap.registerPlugin(useGSAP);

function Hero() {
  const [activeTab, setActiveTab] = useState("risk");
  
  // Reference for the main container to scope GSAP animations
  const container = useRef();

  // GSAP Animation Logic for Page Load Reveal
  useGSAP(
    () => {
      // Target all elements with the 'gsap-reveal' class
      gsap.from(".gsap-reveal", {
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        stagger: 0.15, // Delay between each element's animation
        ease: "power3.out", // Smooth deceleration
      });
    },
    { scope: container } // Scope prevents animating elements outside this component
  );

  // Auto-play logic: Switch tab every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prevTab) => (prevTab === "risk" ? "voice" : "risk"));
    }, 3000); 

    // Cleanup timer if user clicks manually or component unmounts
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="section_hero" ref={container}>
      <div className="global-padding">
        <div className="container-regular">
          <div className="hero_content">
            
            {/* Left Content */}
            <div className="hero_left">
              {/* Added 'gsap-reveal' class for targeted animation */}
              <div className="hero_badge gsap-reveal">
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
              
              <h1 className="hero_title gsap-reveal">
                Get on site faster with safety software that doesn't suck.
              </h1>

              <p className="hero_description gsap-reveal">
                Customised Risk assessments in 30 seconds and incidents logged
                by voice— so when the auditor shows up, you're already covered.
              </p>

              <div className="hero_actions gsap-reveal">
                <PrimaryBtn href="#" text="Book a demo" bg="red" />
              </div>
            </div>

            {/* Right Visual Section */}
            {/* Added 'gsap-reveal' class here as well */}
            <div className="hero_visual gsap-reveal">
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