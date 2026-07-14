import React, { useState } from "react";
import {
  shadow,
  solutionIcon,
  dottedPattern,
  videoOne,
  videoTwo,
  videoThree,
  videoFour,
  videoFive,
  videoSix,
  videoSeven,
  tabImage1,
  tabImage2,
  tabImage3,
  tabImage4,
  tabImage5,
  tabImage6,
  tabImage7,
  tabImage8,
} from "../../assets/images";
import "./Solution.css";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const solutionTabs = [
  { id: "contractor-management", label: "Contractor management" },
  { id: "risk-assessments", label: "Risk assessments" },
  { id: "toolbox-talks", label: "Toolbox Talks" },
  { id: "voice-first-reporting", label: "Voice-first reporting" },
  { id: "whs-dashboard", label: "WHS dashboard" },
  { id: "actions-tasks", label: "Actions and tasks" },
  { id: "iso-compliance", label: "ISO Compliance" },
  { id: "learning-inductions", label: "Learning and inductions" },
];

const heroImageUrl =
  "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/1c4df4d8-28f1-40ae-b934-f6662ca5b7ad.svg";

const tabPanelContent = {
  "contractor-management": {
    imgUrl: tabImage1,
    imageAlt:
      "Contractor readiness workspace representing insurance, licence and worker pre-qualification status",
    title: "Pre-qualify your entire contractor list →",
    text: "Onboard and pre-qualify contractors with insurance and licence verification built in.",
    width: '434px',
    height: 'auto'
  },
  "risk-assessments": {
    imgUrl: tabImage2,
    imageAlt:
      "Risk assessment draft workspace representing hazards, controls and SWMS preparation",
    title: "Generate SWMS in 30 seconds, not 4 hours →",
    text: "Type an address. AI pulls the legislation and generates a fully compliant SWMS",
    width: '488px',
    height: 'auto'
  },
  "toolbox-talks": {
    imgUrl: tabImage3,
    imageAlt:
      "Toolbox talk record workspace representing briefings, attendance and worker acknowledgements",
    title: "Generate your next pre-start in just minutes →",
    text: "AI drafts your Toolbox talk from recent site activity, translated into every worker's language.",
    width: '374px',
    height: 'auto'
  },
  "voice-first-reporting": {
    imgUrl: tabImage4,
    imageAlt:
      "Voice-first reporting interface with a recording card and incident reporting workflow",
    title: "Log your next report by voice →",
    text: "Report incidents, observations, and hazards by the voice. AI classifies and files each one automatically.",
    width: '360px',
    height: 'auto'
  },
  "whs-dashboard": {
    imgUrl: tabImage5,
    imageAlt:
      "WHS dashboard workspace representing site status, trends, open risks and overdue actions",
    title: "Get live visibility across every site →",
    text: "Get live visibility across every site, crew, and contractor from a single dashboard",
    width: '434px',
    height: 'auto'
  },
  "actions-tasks": {
    imgUrl: tabImage6,
    imageAlt:
      "Tracked actions workspace representing owners, due dates and closure evidence",
    title: "Close every corrective action on time →",
    text: "Assign corrective actions, set deadlines, and track to completion.",
    width: '475px',
    height: 'auto'
  },
  "iso-compliance": {
    imgUrl: tabImage7,
    imageAlt:
      "ISO evidence workspace representing mapped controls, documents and audit trails",
    title: "Know your gap before your auditor does →",
    text: "Run an AI-powered gap analysis against and get a full remediation report in hours.",
    width: '434px',
    height: 'auto'
  },
  "learning-inductions": {
    imgUrl: tabImage8,
    imageAlt:
      "Learning and inductions workspace representing training paths, tickets and site readiness",
    title: "Get every contractor verified before they arrive →",
    text: "Track training, licences, and expiries - everyone verified before they arrive.",
    width: '397px',
    height: 'auto'
  },
};

function BookDemoButton(props) {
  const [activeTab, setActiveTab] = useState("voice-first-reporting");
  const activeContent =
    solutionTabs.find((tab) => tab.id === activeTab) ?? solutionTabs[3];
  const activePanel = tabPanelContent[activeContent.id];

  return (
    <section
      className={["solution-section", props.className]
        .filter(Boolean)
        .join(" ")}
      style={props.style}
    >
      <div className="solution-hero">
        <img
          className="solution-shadow"
          src={shadow}
          alt="Shadow Illustration"
        />

        <div className="solution_shell-wrap">
          <div className="solution-shell">
            <div className="solution_header">
              <div className="solution_subtext-wrapper">
                <img
                  className="solution_subtext-icon"
                  src={solutionIcon}
                  alt="Solution Icon"
                />
                <span className="solution_subtext">Our Solution</span>
              </div>
              <h2 className="solution_title">
                Get on site faster, stay compliant, and put SiteSherpa’s AI to
                work from day one.
              </h2>
            </div>
            <div className="solution-inner">
              <div className="solution_tabs-wrapper">
                <div
                  className="solution_tablist"
                  role="tablist"
                  aria-label="SiteSherpa solution features"
                >
                  {solutionTabs.map((tab) => {
                    const isActive = tab.id === activeTab;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="solution-tab-panel"
                        onMouseEnter={() => setActiveTab(tab.id)}
                        className={`solution_tab ${isActive ? "solution_tab--active" : ""}`.trim()}
                      >
                        <span
                          className={`solution_tab-bullet ${isActive ? "is-active" : ""}`.trim()}
                          aria-hidden="true"
                        />
                        <span className="solution_tab-text">
                          <span>{tab.label}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                key={activeContent.id}
                id="solution-tab-panel"
                role="tabpanel"
                className="solution-tab-fade solution_panel"
              >
                <div className="solution_card">
                  <div className="solution_card-visual">
                    <img className="solution_dotted-bg" src={dottedPattern} alt="pattern" />
                    
                    <img src={activePanel.imgUrl} alt="" className="solution_img" style={{
                      maxWidth: activePanel.width,
                      height: activePanel.height
                    }} />
                  </div>
                  <div className="solution_card-content">
                    <h2 className="solution_card-title">
                      <a href="#">{activePanel.title}</a>
                    </h2>
                    <p className="solution_card-description">
                      <span>{activePanel.text}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="solution_btns">
              <PrimaryBtn href="#" text="Book a demo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDemoButton;
