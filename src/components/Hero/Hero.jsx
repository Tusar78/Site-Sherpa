import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import LottieReact from "lottie-react";
import HeroLottie from "../../assets/images/Hero/Lottie/00 _ Hero-Voice-Report (1).json";

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

gsap.registerPlugin(useGSAP);

const Lottie = LottieReact.default || LottieReact;

function Hero() {
  const [activeTab, setActiveTab] = useState("risk");
  const container = useRef();
  const lottieRef = useRef(null);

  // Resolve Lottie data
  const resolvedData = HeroLottie?.default || HeroLottie;
  const isUrl = typeof resolvedData === "string";

  // Control Lottie playback based on active tab
  useEffect(() => {
    if (lottieRef.current) {
      if (activeTab === "voice") {
        // Reset to beginning and play once
        lottieRef.current.goToAndStop(0, true);
        lottieRef.current.play();
      } else {
        // Pause and reset when switching away
        lottieRef.current.pause();
        // lottieRef.current.goToAndStop(0, true);
      }
    }
  }, [activeTab]);

  // GSAP Animation Logic
  useGSAP(
    () => {
      gsap.from(".gsap-reveal", {
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  // Auto-play logic
useEffect(() => {
  const delay = activeTab === "risk" ? 4000 : 8200; // risk: 4s, voice: 7s

  const timer = setTimeout(() => {
    setActiveTab((prevTab) => (prevTab === "risk" ? "voice" : "risk"));
  }, delay);

  return () => clearTimeout(timer);
}, [activeTab]);

  return (
    <section className="section_hero" ref={container}>
      <div className="global-padding">
        <div className="container-regular">
          <div className="hero_content">

            {/* Left Content */}
            <div className="hero_left">
              <div className="hero_badge gsap-reveal">
                <div className="hero_badge-left">
                  <img className="hero_badge-dot" src={circleIcon} alt="Shield icon" />
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
                Customised Risk assessments in 30 seconds and incidents logged by voice so when the auditor shows up, you're already covered.
              </p>

              <div className="hero_actions gsap-reveal">
                <PrimaryBtn href="#" text="Book a demo" variant="primary" />
              </div>
            </div>

            {/* Right Visual Section */}
            <div className="hero_visual gsap-reveal">
              <div className="hero_visual-bg"></div>

              <div className="hero_visual-elements">
                
                {/* FIRST TAB: Image Cards */}
                <div className={`hero_tab-content  flex gap-3  ${activeTab === "risk" ? "hero_tab-content--active" : ""}`}>
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

                {/* SECOND TAB: Lottie - Plays once per tab activation */}
                <div className={`hero_tab-content ${activeTab === "voice" ? "hero_tab-content--active" : ""}`}>
                  <div className="hero_lottie-wrapper">
                    {isUrl ? (
                      <Lottie 
                        lottieRef={lottieRef}
                        path={resolvedData}
                        loop={false} // Play only once
                        autoplay={false} // We control playback
                        style={{ width: "100%", height: "100%" }} 
                      />
                    ) : (
                      <Lottie 
                        lottieRef={lottieRef}
                        animationData={resolvedData}
                        loop={false} // Play only once
                        autoplay={false} // We control playback
                        style={{ width: "100%", height: "100%" }} 
                      />
                    )}
                  </div>
                </div>

              </div>

              {/* Bottom Tabs */}
              <div className="hero_visual-tabs">
                <div className="tab_container">
                  <button
                    className={`tab_btn ${activeTab === "risk" ? "tab_btn--active" : ""}`}
                    onClick={() => setActiveTab("risk")}
                  >
                    <img src={shieldAlert} alt="Risk" className="tab_icon" />
                    Risk assessment
                  </button>

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