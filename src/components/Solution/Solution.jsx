import React, { useState } from "react";
import { shadow, solutionIcon, dottedPattern, tabImg } from "../../assets/images";
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
    imageUrl: tabImg,
    imageAlt:
      "Contractor readiness workspace representing insurance, licence and worker pre-qualification status",
    title: "Pre-qualify your entire contractor list →",
    text: "Onboard and pre-qualify contractors with insurance and licence verification built in.",
  },
  "risk-assessments": {
    imageUrl: tabImg,
    imageAlt:
      "Risk assessment draft workspace representing hazards, controls and SWMS preparation",
    title: "Pre-qualify your entire contractor list →",
    text: "Onboard and pre-qualify contractors with insurance and licence verification built in",
  },
  "toolbox-talks": {
    imageUrl: tabImg,
    imageAlt:
      "Toolbox talk record workspace representing briefings, attendance and worker acknowledgements",
    title: "Pre-qualify your entire contractor list →",
    text: "Onboard and pre-qualify contractors with insurance and licence verification built in",
  },
  "voice-first-reporting": {
    imageUrl: heroImageUrl,
    imageAlt:
      "Voice-first reporting interface with a recording card and incident reporting workflow",
    title: "Pre-qualify your entire contractor list →",
    text: "Onboard and pre-qualify contractors with insurance and licence verification built in",
  },
  "whs-dashboard": {
    imageUrl: tabImg,
    imageAlt:
      "WHS dashboard workspace representing site status, trends, open risks and overdue actions",
    title: "Pre-qualify your entire contractor list →",
    text: "Onboard and pre-qualify contractors with insurance and licence verification built in.",
  },
  "actions-tasks": {
    imageUrl:tabImg,
    imageAlt:
      "Tracked actions workspace representing owners, due dates and closure evidence",
    title: "Pre-qualify your entire contractor list →",
    text: "Onboard and pre-qualify contractors with insurance and licence verification built in",
  },
  "iso-compliance": {
    imageUrl: tabImg,
    imageAlt:
      "ISO evidence workspace representing mapped controls, documents and audit trails",
    title: "ISO evidence",
    text: "Onboard and pre-qualify contractors with insurance and licence verification built in",
  },
  "learning-inductions": {
    imageUrl:tabImg,
    imageAlt:
      "Learning and inductions workspace representing training paths, tickets and site readiness",
    title: "Pre-qualify your entire contractor list →",
    text: "Onboard and pre-qualify contractors with insurance and licence verification built in",
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
                      onClick={() => setActiveTab(tab.id)}
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
                </div>
                <div className="solution_card-content">
                  <h2 className="solution_card-title">
                    <span>{activePanel.title}</span>
                  </h2>
                  <p className="solution_card-description">
                    <span>{activePanel.text}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="solution_btns">
            <PrimaryBtn href="#" text="Book a demo"  />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default BookDemoButton;
