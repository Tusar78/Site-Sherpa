import React, { useState } from "react";
import "./Benifits.css";

const checkIconUrl =
  "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/405f723e-9b7e-4f74-99fd-0799f425703b.svg";

import {
  benifitsCheckIcon,
  benifitsFileCheckIcon,
  benifitsListCheckIcon,
  benifitsTicket,
  benifitsUserCheck,
  benifitsUserSetting,
  benifitsClientImg01,
  benifitsClientImg02,
  benifitsClientImg03,
  benifitCardImg01,
  benifitCardImg02,
  benifitCardImg03,
  videoOne,
  videoTwo,
  videoThree,
  videoFive,
  videoSix,
  videoFour,
} from "../../assets/images";
const tabIcons = {
  clients:
    "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/8394ae72-3bcb-42b6-968a-317efa4f5802.svg",
  contractors:
    "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/d4808bed-7368-4fdb-99de-4c8c8244f551.svg",
};

const CARDS_DATA = [
  {
    id: "paper-trail",
    title: "A paper trail that builds itself, so your board can sleep at night",
    description:
      "Every induction, incident and sign-off logged, classified and timestamped automatically by AI. Pull up any record in seconds.",
    imgSrc: benifitCardImg02,
    imgAlt: "Paper trail visualization",
  },
  {
    id: "contractor-qualification",
    title: "Pre-qualify contractors and keep their workers site-ready",
    description:
      "Manage contractors in one place, with pre-qualification built in. Keep contractor companies and workers compliant before they arrive on site.",
    imgSrc: benifitCardImg03,
    imgAlt: "Contractor qualification visualization",
  },
  {
    id: "connected-messaging",
    title: "One place for every message, update and conversation",
    description:
      "SherpaConnect AI replaces the hundred different threads with a single place - everything is logged and findable.",
    imgSrc: benifitCardImg01,
    imgAlt: "Sherpa Logo",
  },
];

const contentByAudience = {
  clients: {
    eyebrow: "Benefits",
    headline: "AI-powered safety built around how your team actually works",
    subheading:
      "Everything clients need to stay compliant and everything contractors need to show up ready, all in one place.",
    cards: [
      {
        id: "clients-site-visibility",
        title: "Get compliant in \n days, not weeks",
        image: videoOne,
        imageAlt:
          "SiteSherpa dashboard showing live site attendance and contractor status",
        features: [
          {
            id: "clients-site-visibility-live",
            text: "Win the contractor day, be on site by Monday ",
            checkIcon: benifitsFileCheckIcon,
          },
          {
            id: "clients-site-visibility-credentials",
            text: "AI generates your SWMS in minutes with inductions and training records ready before your first contractor steps on site",
            checkIcon: benifitsListCheckIcon,
          },
          {
            id: "clients-site-visibility-records",
            text: "Simple enough to set up yourself, no consultant required",
            checkIcon: benifitsUserSetting,
          },
        ],
      },
      {
        id: "clients-paper-trail",
        title: "Risk Assessments done in \n seconds, not days ",
        image: videoTwo,
        imageAlt:
          "Automated compliance records and induction evidence in SiteSherpa",
        features: [
          {
            id: "clients-paper-trail-logged",
            text: "Track workers are checked in across every client site in real time",
            checkIcon: benifitsUserCheck,
          },
          {
            id: "clients-paper-trail-ready",
            text: "Manage training, tickets, and expiries so nobody gets turned away at the gate",
            checkIcon: benifitsTicket,
          },
          {
            id: "clients-paper-trail-standards",
            text: "Full attendance and learning records on demand without having to chase anyone",
            checkIcon: benifitsCheckIcon,
          },
        ],
      },
      {
        id: "clients-contractor-prequal",
        title: "Always know who's on your site \n and what they're up to",
        image: videoThree,
        imageAlt:
          "Contractor pre-qualification workflow with insurance and licence verification",
        features: [
          {
            id: "clients-contractor-prequal-documents",
            text: "See who's on site right now, what they're working on and when they're due to check out",
            checkIcon: benifitsTicket,
          },
          {
            id: "clients-contractor-prequal-expiry",
            text: "Pre-qual status, credentials and inductions confirmed before anyone starts work",
            checkIcon: benifitsCheckIcon,
          },
          {
            id: "clients-contractor-prequal-access",
            text: "Full attendance history on demand, every name accounted for",
            checkIcon: benifitsUserCheck,
          },
        ],
      },
    ],
  },
  contractors: {
    eyebrow: "Benefits",
    headline: "AI-powered safety built around how your team actually works",
    subheading:
      "Everything clients need to stay compliant and everything contractors need to show up ready, all in one place.",
    cards: [
      {
        id: "contractors-fast-compliance",
        title: "Get compliant in days, not weeks",
        image: videoFour,
        imageAlt: "Contractor setup screen showing fast compliance preparation",
        features: [
          {
            id: "contractors-fast-compliance-monday",
            text: "Win the contract on Friday, be on site by Monday with documentation already moving",
            checkIcon: checkIconUrl,
          },
          {
            id: "contractors-fast-compliance-swms",
            text: "AI generates your SWMS in minutes with inductions and records ready to share",
            checkIcon: checkIconUrl,
          },
          {
            id: "contractors-fast-compliance-repeat",
            text: "Reuse approved details across jobs so every new site starts from a stronger baseline",
            checkIcon: checkIconUrl,
          },
        ],
      },
      {
        id: "contractors-risk-assessments",
        title: "Custom risk assessments without the blank page",
        image: videoFive,
        imageAlt:
          "Abstract SiteSherpa interface pattern representing AI-generated safety documents",
        features: [
          {
            id: "contractors-risk-assessments-specific",
            text: "Create site-specific risk assessments from plain-language job details in under a minute",
            checkIcon: checkIconUrl,
          },
          {
            id: "contractors-risk-assessments-review",
            text: "Review, adjust and approve documents before your crew needs them on site",
            checkIcon: checkIconUrl,
          },
          {
            id: "contractors-risk-assessments-client",
            text: "Match each client requirement without rebuilding the same paperwork from scratch",
            checkIcon: checkIconUrl,
          },
        ],
      },
      {
        id: "contractors-voice-reporting",
        title: "Log incidents and hazards by voice from the field",
        image: videoSix,
        imageAlt:
          "Worker on an industrial site using a mobile safety reporting workflow",
        features: [
          {
            id: "contractors-voice-reporting-capture",
            text: "Capture what happened while it is fresh instead of waiting for end-of-day admin",
            checkIcon: checkIconUrl,
          },
          {
            id: "contractors-voice-reporting-ai",
            text: "AI turns spoken notes into structured records, actions and evidence requests",
            checkIcon: checkIconUrl,
          },
          {
            id: "contractors-voice-reporting-accountability",
            text: "Supervisors get clear follow-up without chasing crews through separate channels",
            checkIcon: checkIconUrl,
          },
        ],
      },
    ],
  },
};

const Benefits = ({ className, style }) => {
  const [activeTab, setActiveTab] = useState("clients");
  const activeContent = contentByAudience[activeTab];

  return (
    <section
      className={`w-full overflow-x-hidden bg-[#F8F9F3] pb-20 ${className || ""}`}
      style={style}
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto w-full pt-10 sm:pt-16 lg:pt-[120px]">
        <div className="mx-auto flex w-full max-w-[628px] flex-col items-center text-center">
          <span className="mb-4 font-semibold font-body bg-[image:var(--gradient-teal)] bg-clip-text text-transparent uppercase">
            Benefits
          </span>
          <h2 id="benefits-heading" className="text-h2 font-medium">
            AI-powered safety built around how your team actually works
          </h2>
          <p className="mt-5 max-w-[510px] leading-7 text-primary/70 text-regular sm:text-medium">
            Everything clients need to stay compliant and everything contractors
            need to show up ready, all in one place.
          </p>
        </div>

        <div className="mt-[37px] relative flex w-full justify-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            className="inline-flex min-w-max rounded-t-[8px] bg-[#E3E5D7] p-0.5"
            role="tablist"
            aria-label="Benefits audience"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "clients"}
              className={`flex min-w-max items-center gap-[8px] rounded-t-[8px] px-5 text-small font-medium transition-all duration-200 ${activeTab === "clients" ? "bg-bge text-primary shadow-[0_1px_2px_rgba(7,44,44,0.10)]" : "bg-transparent text-primary/60 hover:text-primary"}`}
              onClick={() => setActiveTab("clients")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.6654 14V12.6667C12.6654 11.9594 12.3844 11.2811 11.8843 10.781C11.3842 10.281 10.7059 10 9.9987 10H5.9987C5.29145 10 4.61318 10.281 4.11308 10.781C3.61298 11.2811 3.33203 11.9594 3.33203 12.6667V14"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.9987 7.33333C9.47146 7.33333 10.6654 6.13943 10.6654 4.66667C10.6654 3.19391 9.47146 2 7.9987 2C6.52594 2 5.33203 3.19391 5.33203 4.66667C5.33203 6.13943 6.52594 7.33333 7.9987 7.33333Z"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>For Clients</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "contractors"}
              className={`flex h-11 min-w-max items-center  gap-[8px] rounded-t-[8px] px-5 text-small  font-medium transition-all duration-200 sm:h-10 sm:px-6 ${activeTab === "contractors" ? "bg-[#F8F9F3] text-primary shadow-[0_1px_2px_rgba(7,44,44,0.10)]" : "bg-transparent text-primary/60 hover:text-primary"}`}
              onClick={() => setActiveTab("contractors")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 6.66675H8.00667"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 9.33325H8.00667"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 4H8.00667"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.668 6.6665H10.6746"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.668 9.3335H10.6746"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.668 4H10.6746"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33203 6.6665H5.3387"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33203 9.3335H5.3387"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33203 4H5.3387"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 14.6667V12.6667C6 12.4899 6.07024 12.3203 6.19526 12.1953C6.32029 12.0702 6.48986 12 6.66667 12H9.33333C9.51014 12 9.67971 12.0702 9.80474 12.1953C9.92976 12.3203 10 12.4899 10 12.6667V14.6667"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0013 1.3335H4.0013C3.26492 1.3335 2.66797 1.93045 2.66797 2.66683V13.3335C2.66797 14.0699 3.26492 14.6668 4.0013 14.6668H12.0013C12.7377 14.6668 13.3346 14.0699 13.3346 13.3335V2.66683C13.3346 1.93045 12.7377 1.3335 12.0013 1.3335Z"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>For Contractors</span>
            </button>
          </div>
          <div className="h-[2px] bg-surface-alt min-w-[100vw] absolute bottom-0"></div>
        </div>

        <div className=" px-2 sm:px-4 lg:px-6">
          <div
            key={activeTab}
            className="mx-auto max-w-[1240px] flex flex-col gap-15 motion-safe:animate-[benefitContentIn_250ms_ease] mt-8 lg:mt-10"
          >
            {activeContent.cards.map((card) => (
              <article
                key={card.id}
                className="flex flex-col lg:flex-row justify-between items-start lg:items-center overflow-hidden rounded-[12px] bg-surface"
              >
                <div className="flex flex-col justify-center px-8 py-8 sm:px-8 sm:py-10 lg:py-12 lg:px-12">
                  <h3 className="text-h3 font-medium text-primary whitespace-pre-line">
                    {card.title}
                  </h3>
                  <div className="mt-[24px] flex flex-col sm:mt-[32px] lg:mt-[40px] lg:max-w-[530px]">
                    {card.features.map((feature) => (
                      <div
                        key={feature.id}
                        className="flex items-center gap-4 border-b border-dashed border-[#C1C79C] py-4 first:pt-0 sm:gap-4 sm:py-4"
                      >
                        <img
                          className="mt-1 h-4 w-4 shrink-0"
                          src={feature.checkIcon}
                          alt=""
                          aria-hidden="true"
                        />
                        <p className="text-medium text-primary ">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <figure className="lg:h-100  w-full lg:max-w-[560px] p-2 pt-0 sm:h-full sm:min-h-[420px] sm:p-2 lg:min-h-[560px]">
                  <div className="video_wrapper">
                    <video
                      className="video_element"
                      src={card.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </figure>
              </article>
            ))}
          </div>
        </div>
      </div>

      <section className="w-full bg-[#F8F9F3] text-[#072C2C] px-2 sm:px-4 lg:px-6">
        <div className="mx-auto w-full max-w-[1240px]">
          {/* Feature Bento Grid */}
          <div
            className="mt-12 grid grid-cols-1 gap-1 sm:mt-[60px] 
           rounded-[10px] sm:grid-cols-2 lg:grid-cols-3 bg-surface-alt p-1"
          >
            {CARDS_DATA.map((card) => (
              <article
                key={card.id}
                className="grid min-h-[516px] w-full rounded-[7px] bg-[#F8F9F3] p-5 text-left grid-rows-[1fr_auto] sm:p-8 sm:[&:nth-child(3)]:col-span-full lg:[&:nth-child(3)]:col-span-1"
              >
                <div className="flex flex-col gap-6">
                  <h2 className="m-0 max-w-[340px] text-[22px] font-medium">
                    {card.title}
                  </h2>

                  {/* Standardized, non-absolute visual frame for all cards */}
                  <div className="flex w-full items-center justify-center overflow-hidden p-4">
                    <img
                      src={card.imgSrc}
                      alt={card.imgAlt}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <p className="m-0 mt-6 text-regular text-primary/70">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Benefits;
