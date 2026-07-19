import React, { useState } from "react";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import {
  // Card Images (Thumbnails)
  useCaseThumOne,
  useCaseThumTwo,
  useCaseThumThree,
  useCaseThumFour,
  useCaseThumFive,
  useCaseThumSix,
  useCaseThumSeven,
  useCaseThumEight,
  useCaseThumNine,
  // Background Images
  useCaseBgOne,
  useCaseBgTwo,
  useCaseBgThree,
  useCaseBgFour,
  useCaseBgFive,
  useCaseBgSix,
  useCaseBgSeven,
  useCaseBgEight,
  useCaseBgNine,

  // Icon
  useCaseIconBuilding,
  useCaseHammer,
  useCaseIconWallFire,
  useCaseIconCog
} from "../../assets/images";

const tabs = [
  {
    id: "construction",
    label: "Construction",
    eyebrow: "Built for crews on shifting sites",
    headline:
      "Keep every contractor, SWMS, induction and site record ready before work starts.",
    bgImage: useCaseBgTwo,
    cardImage: useCaseThumTwo,
    useCases: [
      {
        id: "construction-01",
        title: "Use case 01",
        description:
          "Until your documentation is sorted, no one's working and nothing's moving.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "construction-03",
        title: "Use case 03",
        description:
          "Generate job-specific paperwork quickly when scopes, clients or conditions change.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "construction-04",
        title: "Use case 04",
        description:
          "Log incidents, actions and evidence while the crew is still on site.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "construction-05",
        title: "Use case 05",
        description:
          "Track expiries, sign-offs and training records without chasing folders.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
    ],
  },
  {
    id: "mining",
    label: "Mining",
    eyebrow: "Heavy-risk work, lighter admin",
    headline:
      "Run high-risk work documentation with the evidence trail auditors expect.",
    bgImage: useCaseBgSeven,
    cardImage: useCaseThumSeven,
    useCases: [
      {
        id: "mining-01",
        title: "Use case 01",
        description:
          "Create task-specific SWMS for remote teams before crews mobilise.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "mining-02",
        title: "Use case 02",
        description:
          "Keep plant, operator tickets and site competencies visible in one place.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "mining-03",
        title: "Use case 03",
        description:
          "Capture field observations by voice when typing is not practical.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "mining-04",
        title: "Use case 04",
        description:
          "Prepare clean records for principal contractors and regulator reviews.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
    ],
  },
  {
    id: "mining-services",
    label: "Mining services",
    eyebrow: "Supplier compliance without the scramble",
    headline:
      "Prove your team is qualified, inducted and ready across every client site.",
    bgImage: useCaseBgSix,
    cardImage: useCaseThumSix,
    useCases: [
      {
        id: "mining-services-01",
        title: "Use case 01",
        description:
          "Package client-ready safety documentation for each new contract.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "mining-services-02",
        title: "Use case 02",
        description:
          "Monitor tickets, licences and expiries before mobilisation day.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "mining-services-03",
        title: "Use case 03",
        description:
          "Assign workers to client sites with the right evidence attached.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "mining-services-04",
        title: "Use case 04",
        description:
          "Respond to pre-qualification requests without rebuilding paperwork.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
    ],
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    eyebrow: "Safer shifts, cleaner records",
    headline:
      "Keep procedures, toolbox talks and corrective actions connected to daily operations.",
    bgImage: useCaseBgFive,
    cardImage: useCaseThumFive,
    useCases: [
      {
        id: "manufacturing-01",
        title: "Use case 01",
        description:
          "Turn changed work methods into updated risk controls fast.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "manufacturing-02",
        title: "Use case 02",
        description:
          "Track machine-area inductions and training acknowledgements.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "manufacturing-03",
        title: "Use case 03",
        description:
          "Log near misses and actions while details are still fresh.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "manufacturing-04",
        title: "Use case 04",
        description:
          "Show supervisors what is overdue before the next shift starts.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
    ],
  },
  {
    id: "transport-logistics",
    label: "Transport and Logistics",
    eyebrow: "Moving teams, grounded compliance",
    headline:
      "Give drivers, depots and contractors one source of truth for safety readiness.",
    bgImage: useCaseBgNine,
    cardImage: useCaseThumNine,
    useCases: [
      {
        id: "transport-01",
        title: "Use case 01",
        description:
          "Manage inductions and route-specific safety requirements across depots.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "transport-02",
        title: "Use case 02",
        description:
          "Keep contractor credentials verified before they enter the yard.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "transport-03",
        title: "Use case 03",
        description: "Capture vehicle, loading and incident notes hands-free.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "transport-04",
        title: "Use case 04",
        description:
          "Keep full attendance and evidence history ready for audits.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
    ],
  },
  {
    id: "civil-infrastructure",
    label: "Civil infrastructure",
    eyebrow: "Every package, every principal",
    headline:
      "Handle changing scopes, multiple contractors and site evidence without duplicate admin.",
    bgImage: useCaseBgOne,
    cardImage: useCaseThumOne,
    useCases: [
      {
        id: "civil-01",
        title: "Use case 01",
        description:
          "Build job-specific documentation for changing ground and traffic controls.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "civil-02",
        title: "Use case 02",
        description:
          "Coordinate contractor readiness before handover gates and possessions.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "civil-03",
        title: "Use case 03",
        description:
          "Record site changes and corrective actions in the moment.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "civil-04",
        title: "Use case 04",
        description:
          "Provide principal contractors a clean, searchable evidence trail.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
    ],
  },
  {
    id: "facilities-management",
    label: "Facilities management",
    eyebrow: "Many sites, one safety system",
    headline:
      "Know which contractors are cleared for each asset before work begins.",
    bgImage: useCaseBgThree,
    cardImage: useCaseThumThree,
    useCases: [
      {
        id: "facilities-01",
        title: "Use case 01",
        description:
          "Pre-qualify providers before they arrive at tenant or public sites.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "facilities-02",
        title: "Use case 02",
        description:
          "Attach permits, insurances and inductions to each work order.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "facilities-03",
        title: "Use case 03",
        description:
          "Maintain evidence for repairs, incidents and recurring site tasks.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "facilities-04",
        title: "Use case 04",
        description:
          "Find records by site, contractor or date when someone asks.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
    ],
  },
  {
    id: "government-public",
    label: "Government and public sector",
    eyebrow: "Accountable work, accessible records",
    headline:
      "Keep contractor evidence and incident records transparent across public assets.",
    bgImage: useCaseBgEight,
    cardImage: useCaseThumEight,
    useCases: [
      {
        id: "government-01",
        title: "Use case 01",
        description:
          "Standardise contractor onboarding across departments and facilities.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "government-02",
        title: "Use case 02",
        description:
          "Keep signed evidence searchable for reviews and public reporting.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "government-03",
        title: "Use case 03",
        description:
          "Capture incidents and notifications with timestamped records.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "government-04",
        title: "Use case 04",
        description:
          "See overdue actions before they become governance problems.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
    ],
  },
  {
    id: "healthcare-pharmaceuticals",
    label: "Healthcare and pharmacueticals",
    eyebrow: "Sensitive sites, controlled access",
    headline:
      "Support critical environments with clear inductions, approvals and audit-ready evidence.",
    bgImage: useCaseBgFour,
    cardImage: useCaseThumFour,
    useCases: [
      {
        id: "healthcare-01",
        title: "Use case 01",
        description:
          "Confirm contractor readiness before work begins in live environments.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "healthcare-02",
        title: "Use case 02",
        description:
          "Track training and site rules for controlled or restricted areas.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "healthcare-03",
        title: "Use case 03",
        description:
          "Record maintenance evidence without disturbing operational teams.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "healthcare-04",
        title: "Use case 04",
        description:
          "Find every document, sign-off and action when compliance teams ask.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
    ],
  },
];

function UseCase(props) {
  const [activeTabId, setActiveTabId] = useState("construction");
  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    <main
      className={`w-full bg-[#F8F9F3] ${props.className || ""}`.trim()}
      style={props.style}
    >
      <section
        className="w-full overflow-hidden global-padding py-4 sm:py-8 lg:py-10"
        aria-labelledby="industries-heading"
      >
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[10px] bg-cover bg-center px-4 py-10 sm:px-8 sm:py-14 md:py-16 lg:min-h-[951px] lg:px-20 lg:py-[100px]">

          {/* Dynamic Background Image */}
          <img
            src={activeTab.bgImage}
            className="absolute inset-0 h-full w-full object-cover blur-[17px] scale-110 z-10"
            alt=""
          />

          <div className="relative z-10 mx-auto max-w-[1240px] text-center text-white">
            <p className="font-body text-regular font-semibold uppercase">
              <span>{"Industries and use cases"}</span>
            </p>
            <h1
              id="industries-heading"
              className="mx-auto mt-3 md:mt-4 max-w-[788px] text-h2 font-medium sm:mt-4"
            >
              <span>
                {
                  "SiteSherpa is built for every industry where safety is non-negotiable"
                }
              </span>
            </h1>
          </div>

          <div className="relative z-10 mx-auto mt-8 w-full max-w-[1240px] min-w-0 rounded-[12px] bg-white py-2 pr-2 pl-2 lg:pl-6 sm:mt-10 lg:mt-12">
            <div className="flex min-w-0 flex-col gap-4 lg:flex-row">
              <nav
                aria-label="Industries"
                className="min-w-0 lg:min-h-[500px]"
              >
                <div className="flex min-w-0 gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible md:overflow-visible md:pb-0 lg:block lg:overflow-visible lg:pb-0">
                  {tabs.map((tab) => {
                    const isActive = tab.id === activeTab.id;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTabId(tab.id)}
                        className={`group relative flex shrink-0 items-center border-b text-left transition-colors duration-200 py-2 sm:py-3 sm:min-w-0 sm:flex-[1_1_220px] lg:w-full ${isActive
                            ? "border-[#072C2C] text-[#072C2C]"
                            : "border-[#E3E5D7] text-[rgba(7,44,44,0.5)] hover:text-[#072C2C]"
                          }`}
                        aria-selected={isActive}
                        role="tab"
                      >
                        {/* Smooth Scale & Width Animation for Bullet */}
                        <span
                          className={`h-2 bg-primary shrink-0 transition-all duration-300 ease-out hidden sm:block ${
                            isActive
                              ? "w-2 opacity-100 mr-3"
                              : "w-0 opacity-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:mr-3"
                          }`}
                          aria-hidden="true"
                        />
                        <span className="break-words text-small md:text-medium font-medium md:break-normal whitespace-nowrap">
                          {tab.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </nav>

              <div
                className="min-w-0 rounded-[8px] border border-[#E3E5D7] p-3 sm:p-4 md:p-4 lg:p-2"
                role="tabpanel"
              >
                <div
                  key={activeTab.id}
                  className="h-full flex min-w-0 flex-col gap-7 animate-[fadeIn_280ms_ease-out] md:flex-row md:gap-4 lg:gap-6"
                >
                  <div className="flex justify-between gap-5 min-h-0 min-w-0 flex-col px-0 py-1 sm:px-2 sm:py-2 md:min-h-[420px] lg:min-h-[460px] lg:px-4 lg:py-4">
                    <div className="grid min-w-0 gap-x-8 gap-y-7 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-9 lg:pb-7">
                      {activeTab.useCases.map((useCase) => (
                        <article
                          key={useCase.id}
                          className="w-full max-w-none sm:max-w-[260px] md:max-w-none lg:max-w-[211px]"
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <img
                              src={useCase.iconUrl}
                              alt={useCase.iconAlt}
                              className="h-5 w-5 shrink-0"
                            />
                            <h3 className="text-regular font-medium text-[#072C2C]">
                              <span>{useCase.title}</span>
                            </h3>
                          </div>
                          <p className="mt-3 text-regular font-normal text-[rgba(7,44,44,0.7)]">
                            <span>{useCase.description}</span>
                          </p>
                        </article>
                      ))}
                    </div>

                    <PrimaryBtn text={"Book a demo"} />
                  </div>

                  {/* Dynamic Card Image */}
                  <figure className="m-0 min-w-0 md:max-w-[380px] overflow-hidden rounded-[8px] md:min-h-[360px] lg:min-h-0">
                    <img
                      src={activeTab.cardImage}
                      alt={`${activeTab.label} industry safety operations`}
                      className="h-auto max-h-[320px] min-h-[220px] w-full object-cover object-center sm:h-[320px] sm:max-h-none md:h-full lg:h-full"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export { UseCase };