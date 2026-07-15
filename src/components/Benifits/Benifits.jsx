import React, { useState } from "react";
import Lottie from "lottie-react";
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
  benifitCardImg04,
  benifitCardImg05,
  benifitCardImg06,
  videoOne,
  videoTwo,
  videoThree,
  videoFive,
  videoSix,
  videoFour,
  clientLottieOne,
  clientLottieTwo,
  clientLottieThree,
  clientLottieFour,
  clientLottieFive,
  clientLottieSix,
  clientLottieSeven,
  heroLottieOne,
  benifitsHistory,
  benifitsList,
  clientIcon,
  constractorIcon,
  benifitsAstroid,
  benifitsBellDot,
  benifitsContactRound,
  benifitsListCheckTwo,
  benifitsNotebook,
  benifitsSquareChart,
} from "../../assets/images";

const tabIcons = {
  clients: clientIcon,
  contractors: constractorIcon,
};

// Dynamic Card Data based on Tab
const FEATURE_CARDS_DATA = {
  clients: [
    {
      id: "client-compliance",
      title: "A paper trail that builds itself, so your board can sleep at night",
      description:
        "Every induction, incident and sign-off logged, classified and timestamped automatically by AI. Pull up any record in seconds.",
      imgSrc: benifitCardImg02, // Reusing existing images for consistency
      imgAlt: "Compliance dashboard visualization",
    },
    {
      id: "client-site-visibility",
      title: "Pre-qualify contractors and keep their workers site-ready",
      description:
        "See exactly who is checked in, where they are working, and when they are due to leave. Full attendance history available at the click of a button.",
      imgSrc: benifitCardImg03,
      imgAlt: "Site attendance visualization",
    },
    {
      id: "client-audit-trail",
      title: "One place for every message, update and conversation",
      description:
        "SherpaConnect AI replaces the hundred different threads with a single place - everything is logged and findable",
      imgSrc: benifitCardImg01,
      imgAlt: "Audit report visualization",
    },
  ],
  contractors: [
    {
      id: "contractor-paper-trail",
      title: "Work ends at knock-off, so do the notifications",
      description:
        "Set quiet hours so clients can't reach you outside of work (fully compliant with Australia's 2024 right-to-disconnect legislation)",
      imgSrc: benifitCardImg04,
      imgAlt: "Paper trail visualization",
    },
    {
      id: "contractor-qualification",
      title: "All your client messages in one place",
      description:
        "Manage contractors in one place, with pre-qualification built in. Keep contractor companies and workers compliant before they arrive on site",
      imgSrc: benifitCardImg05,
      imgAlt: "Contractor qualification visualization",
    },
    {
      id: "contractor-messaging",
      title: "Collaborate on site records, without the back and forth",
      description:
        "SherpaConnect AI replaces the hundred different threads with a single place - everything is logged and findable",
      imgSrc: benifitCardImg06,
      imgAlt: "Sherpa Logo",
    },
  ],
};

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
        image: clientLottieOne,
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
        image: clientLottieTwo,
        imageAlt:
          "Automated compliance records and induction evidence in SiteSherpa",
        features: [
          {
            id: "clients-paper-trail-logged",
            text: "Describe the work or drop in an address and AI builds a fully compliant SWMS/JSA in minutes",
            checkIcon: benifitsUserCheck,
          },
          {
            id: "clients-paper-trail-ready",
            text: "Legislation, codes of practice, and standards already built in",
            checkIcon: benifitsTicket,
          },
          {
            id: "clients-paper-trail-standards",
            text: "Edit it, sign it, export it as a PDF - ready for the site",
            checkIcon: benifitsCheckIcon,
          },
        ],
      },
      {
        id: "clients-contractor-prequal",
        title: "Always know who's on your site \n and what they're up to",
        image: clientLottieThree,
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
            checkIcon: benifitsList,
          },
          {
            id: "clients-contractor-prequal-access",
            text: "Full attendance history on demand, every name accounted for",
            checkIcon: benifitsHistory,
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
        title: "One set of credentials for \nevery site you work on",
        image: clientLottieFour,
        imageAlt: "Contractor setup screen showing fast compliance preparation",
        features: [
          {
            id: "contractors-fast-compliance-monday",
            text: "Upload licences, insurances and certifications once and carry them across every client",
            checkIcon: benifitsFileCheckIcon,
          },
          {
            id: "contractors-fast-compliance-swms",
            text: "AI monitors every licence and flags expiries before they become a problem on site",
            checkIcon: benifitsListCheckIcon,
          },
          {
            id: "contractors-fast-compliance-repeat",
            text: "Turn up to any site knowing your whole team is cleared and ready to work",
            checkIcon: benifitsUserSetting,
          },
        ],
      },
      {
        id: "contractors-risk-assessments",
        title: "Reporting done at the speed of your voice",
        image: clientLottieFive,
        imageAlt:
          "Abstract SiteSherpa interface pattern representing AI-generated safety documents",
        features: [
          {
            id: "contractors-risk-assessments-specific",
            text: "See which workers are checked in across every client site in real time",
            checkIcon: benifitsContactRound,
          },
          {
            id: "contractors-risk-assessments-review",
            text: "Manage training, tickets, and expiries so nobody gets turned away at the gate",
            checkIcon: benifitsSquareChart,
          },
          {
            id: "contractors-risk-assessments-client",
            text: "Full attendance and learning records on demand without having to chase anyone",
            checkIcon: benifitsNotebook,
          },
        ],
      },
      {
        id: "contractors-voice-reporting",
        title: "Reporting done at the \nspeed of your voice",
        image: clientLottieSix,
        imageAlt:
          "Worker on an industrial site using a mobile safety reporting workflow",
        features: [
          {
            id: "contractors-voice-reporting-capture",
            text: "SherpaTalk AI turns observations, hazards, and incidents into a structured report in just 30 seconds",
            checkIcon: benifitsAstroid,
          },
          {
            id: "contractors-voice-reporting-ai",
            text: "Transcribes, classifies and pre-fills the report. Report type, category, location and photos, all done for you",
            checkIcon: benifitsListCheckTwo,
          },
          {
            id: "contractors-voice-reporting-accountability",
            text: "Your manager gets notified before you've even put your phone in your pocket",
            checkIcon: benifitsBellDot,
          },
        ],
      },
    ],
  },
};

const Benefits = ({ className, style }) => {
  const [activeTab, setActiveTab] = useState("clients");
  const activeContent = contentByAudience[activeTab];

  // Select cards based on active tab
  const activeFeatureCards = FEATURE_CARDS_DATA[activeTab];

  return (
    <section
      className={`w-full overflow-x-hidden bg-[#F8F9F3] pb-20 ${className || ""}`}
      style={style}
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto w-full pt-10 sm:pt-16 lg:pt-[120px]">
        <div  className="global-padding">
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
              <img src={tabIcons.clients} alt="" aria-hidden="true" className="h-4 w-4" />
              <span>For Clients</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "contractors"}
              className={`flex h-11 min-w-max items-center  gap-[8px] rounded-t-[8px] px-5 text-small  font-medium transition-all duration-200 sm:h-10 sm:px-6 ${activeTab === "contractors" ? "bg-[#F8F9F3] text-primary shadow-[0_1px_2px_rgba(7,44,44,0.10)]" : "bg-transparent text-primary/60 hover:text-primary"}`}
              onClick={() => setActiveTab("contractors")}
            >
              <img src={tabIcons.contractors} alt="" aria-hidden="true" className="h-4 w-4" />
              <span>For Contractors</span>
            </button>
          </div>
          <div className="h-[2px] bg-surface-alt min-w-[100vw] absolute bottom-0"></div>
        </div>

        <div className="global-padding">
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
                  <div className="w-full h-full flex items-center justify-center">
                    {/* Check if card.image is a valid object before rendering */}
                    {card.image && typeof card.image === 'object' ? (
                      <Lottie
                        animationData={card.image}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                      />
                    ) : (
                      <div className="text-red-500">Invalid Lottie Data</div>
                    )}
                  </div>
                </figure>
              </article>
            ))}
          </div>
        </div>
      </div>

      <section className="w-full bg-[#F8F9F3] text-[#072C2C] global-padding">
        <div className="mx-auto w-full max-w-[1240px]">
          {/* Feature Bento Grid - Now Dynamic */}
          <div
            className="mt-12 grid grid-cols-1 gap-1 sm:mt-[60px] 
           rounded-[10px] sm:grid-cols-2 lg:grid-cols-3 bg-surface-alt p-1"
          >
            {activeFeatureCards.map((card) => (
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