import React, { useState } from "react";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const tabs = [
  {
    id: "construction",
    label: "Construction",
    eyebrow: "Built for crews on shifting sites",
    headline:
      "Keep every contractor, SWMS, induction and site record ready before work starts.",
    imageUrl:
      "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/8aa3896c-ef0b-4c56-b833-fd772be2e43b.png",
    useCases: [
      {
        id: "construction-01",
        title: "Use case 01",
        description:
          "Until your documentation is sorted, no one's working and nothing's moving.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/a98008c4-48e9-4b35-9b6a-6778a34d8ce5.svg",
        iconAlt: "Building icon",
      },
      {
        id: "construction-03",
        title: "Use case 03",
        description:
          "Generate job-specific paperwork quickly when scopes, clients or conditions change.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/1035c863-d890-4e57-aa84-600af42ab27e.svg",
        iconAlt: "Brick wall icon",
      },
      {
        id: "construction-04",
        title: "Use case 04",
        description:
          "Log incidents, actions and evidence while the crew is still on site.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/03bc5d44-44e4-450a-9f3d-936192e737a0.svg",
        iconAlt: "Hammer icon",
      },
      {
        id: "construction-05",
        title: "Use case 05",
        description:
          "Track expiries, sign-offs and training records without chasing folders.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/b32587d2-0bd3-4df9-b74d-4173d8684895.svg",
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
    imageUrl:
      "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/5561ef12-044a-499a-8cec-6cf5f0c1d1c5.png",
    useCases: [
      {
        id: "mining-01",
        title: "Use case 01",
        description:
          "Create task-specific SWMS for remote teams before crews mobilise.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/a98008c4-48e9-4b35-9b6a-6778a34d8ce5.svg",
        iconAlt: "Building icon",
      },
      {
        id: "mining-02",
        title: "Use case 02",
        description:
          "Keep plant, operator tickets and site competencies visible in one place.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/b32587d2-0bd3-4df9-b74d-4173d8684895.svg",
        iconAlt: "Cog icon",
      },
      {
        id: "mining-03",
        title: "Use case 03",
        description:
          "Capture field observations by voice when typing is not practical.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/03bc5d44-44e4-450a-9f3d-936192e737a0.svg",
        iconAlt: "Hammer icon",
      },
      {
        id: "mining-04",
        title: "Use case 04",
        description:
          "Prepare clean records for principal contractors and regulator reviews.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/1035c863-d890-4e57-aa84-600af42ab27e.svg",
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
    imageUrl:
      "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/8493f375-ab4d-46e5-9e0b-82aa12a7cdbf.png",
    useCases: [
      {
        id: "mining-services-01",
        title: "Use case 01",
        description:
          "Package client-ready safety documentation for each new contract.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/a98008c4-48e9-4b35-9b6a-6778a34d8ce5.svg",
        iconAlt: "Building icon",
      },
      {
        id: "mining-services-02",
        title: "Use case 02",
        description:
          "Monitor tickets, licences and expiries before mobilisation day.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/b32587d2-0bd3-4df9-b74d-4173d8684895.svg",
        iconAlt: "Cog icon",
      },
      {
        id: "mining-services-03",
        title: "Use case 03",
        description:
          "Assign workers to client sites with the right evidence attached.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/03bc5d44-44e4-450a-9f3d-936192e737a0.svg",
        iconAlt: "Hammer icon",
      },
      {
        id: "mining-services-04",
        title: "Use case 04",
        description:
          "Respond to pre-qualification requests without rebuilding paperwork.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/1035c863-d890-4e57-aa84-600af42ab27e.svg",
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
    imageUrl:
      "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/e94f9ae3-c0c5-47c0-8ca3-ab2cfd15a264.svg",
    useCases: [
      {
        id: "manufacturing-01",
        title: "Use case 01",
        description:
          "Turn changed work methods into updated risk controls fast.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/a98008c4-48e9-4b35-9b6a-6778a34d8ce5.svg",
        iconAlt: "Building icon",
      },
      {
        id: "manufacturing-02",
        title: "Use case 02",
        description:
          "Track machine-area inductions and training acknowledgements.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/1035c863-d890-4e57-aa84-600af42ab27e.svg",
        iconAlt: "Brick wall icon",
      },
      {
        id: "manufacturing-03",
        title: "Use case 03",
        description:
          "Log near misses and actions while details are still fresh.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/03bc5d44-44e4-450a-9f3d-936192e737a0.svg",
        iconAlt: "Hammer icon",
      },
      {
        id: "manufacturing-04",
        title: "Use case 04",
        description:
          "Show supervisors what is overdue before the next shift starts.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/b32587d2-0bd3-4df9-b74d-4173d8684895.svg",
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
    imageUrl:
      "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/d423ab36-092b-4f39-9b1d-75ac7c69f1ed.png",
    useCases: [
      {
        id: "transport-01",
        title: "Use case 01",
        description:
          "Manage inductions and route-specific safety requirements across depots.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/a98008c4-48e9-4b35-9b6a-6778a34d8ce5.svg",
        iconAlt: "Building icon",
      },
      {
        id: "transport-02",
        title: "Use case 02",
        description:
          "Keep contractor credentials verified before they enter the yard.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/1035c863-d890-4e57-aa84-600af42ab27e.svg",
        iconAlt: "Brick wall icon",
      },
      {
        id: "transport-03",
        title: "Use case 03",
        description: "Capture vehicle, loading and incident notes hands-free.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/03bc5d44-44e4-450a-9f3d-936192e737a0.svg",
        iconAlt: "Hammer icon",
      },
      {
        id: "transport-04",
        title: "Use case 04",
        description:
          "Keep full attendance and evidence history ready for audits.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/b32587d2-0bd3-4df9-b74d-4173d8684895.svg",
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
    imageUrl:
      "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/dcb37b3f-515e-42a4-bfa4-1b7a4fa9e975.png",
    useCases: [
      {
        id: "civil-01",
        title: "Use case 01",
        description:
          "Build job-specific documentation for changing ground and traffic controls.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/a98008c4-48e9-4b35-9b6a-6778a34d8ce5.svg",
        iconAlt: "Building icon",
      },
      {
        id: "civil-02",
        title: "Use case 02",
        description:
          "Coordinate contractor readiness before handover gates and possessions.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/1035c863-d890-4e57-aa84-600af42ab27e.svg",
        iconAlt: "Brick wall icon",
      },
      {
        id: "civil-03",
        title: "Use case 03",
        description:
          "Record site changes and corrective actions in the moment.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/03bc5d44-44e4-450a-9f3d-936192e737a0.svg",
        iconAlt: "Hammer icon",
      },
      {
        id: "civil-04",
        title: "Use case 04",
        description:
          "Provide principal contractors a clean, searchable evidence trail.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/b32587d2-0bd3-4df9-b74d-4173d8684895.svg",
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
    imageUrl:
      "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/108f2d25-7e32-43f5-ad12-5e35182f508b.png",
    useCases: [
      {
        id: "facilities-01",
        title: "Use case 01",
        description:
          "Pre-qualify providers before they arrive at tenant or public sites.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/a98008c4-48e9-4b35-9b6a-6778a34d8ce5.svg",
        iconAlt: "Building icon",
      },
      {
        id: "facilities-02",
        title: "Use case 02",
        description:
          "Attach permits, insurances and inductions to each work order.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/1035c863-d890-4e57-aa84-600af42ab27e.svg",
        iconAlt: "Brick wall icon",
      },
      {
        id: "facilities-03",
        title: "Use case 03",
        description:
          "Maintain evidence for repairs, incidents and recurring site tasks.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/03bc5d44-44e4-450a-9f3d-936192e737a0.svg",
        iconAlt: "Hammer icon",
      },
      {
        id: "facilities-04",
        title: "Use case 04",
        description:
          "Find records by site, contractor or date when someone asks.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/b32587d2-0bd3-4df9-b74d-4173d8684895.svg",
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
    imageUrl:
      "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/660cd3c6-6e40-4e1d-bab5-81cc6e8d41bd.png",
    useCases: [
      {
        id: "government-01",
        title: "Use case 01",
        description:
          "Standardise contractor onboarding across departments and facilities.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/a98008c4-48e9-4b35-9b6a-6778a34d8ce5.svg",
        iconAlt: "Building icon",
      },
      {
        id: "government-02",
        title: "Use case 02",
        description:
          "Keep signed evidence searchable for reviews and public reporting.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/1035c863-d890-4e57-aa84-600af42ab27e.svg",
        iconAlt: "Brick wall icon",
      },
      {
        id: "government-03",
        title: "Use case 03",
        description:
          "Capture incidents and notifications with timestamped records.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/03bc5d44-44e4-450a-9f3d-936192e737a0.svg",
        iconAlt: "Hammer icon",
      },
      {
        id: "government-04",
        title: "Use case 04",
        description:
          "See overdue actions before they become governance problems.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/b32587d2-0bd3-4df9-b74d-4173d8684895.svg",
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
    imageUrl:
      "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/3c94c77c-ccf3-4914-b5f9-e2a5ad7afd43.png",
    useCases: [
      {
        id: "healthcare-01",
        title: "Use case 01",
        description:
          "Confirm contractor readiness before work begins in live environments.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/a98008c4-48e9-4b35-9b6a-6778a34d8ce5.svg",
        iconAlt: "Building icon",
      },
      {
        id: "healthcare-02",
        title: "Use case 02",
        description:
          "Track training and site rules for controlled or restricted areas.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/1035c863-d890-4e57-aa84-600af42ab27e.svg",
        iconAlt: "Brick wall icon",
      },
      {
        id: "healthcare-03",
        title: "Use case 03",
        description:
          "Record maintenance evidence without disturbing operational teams.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/03bc5d44-44e4-450a-9f3d-936192e737a0.svg",
        iconAlt: "Hammer icon",
      },
      {
        id: "healthcare-04",
        title: "Use case 04",
        description:
          "Find every document, sign-off and action when compliance teams ask.",
        iconUrl:
          "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/b32587d2-0bd3-4df9-b74d-4173d8684895.svg",
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
        className="w-full overflow-hidden px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 xl:px-5"
        aria-labelledby="industries-heading"
      >
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[10px] bg-cover bg-center px-4 py-10 sm:px-8 sm:py-14 md:py-16 lg:min-h-[951px] lg:px-20 lg:py-[100px]">
          <img
            src="https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/5561ef12-044a-499a-8cec-6cf5f0c1d1c5.png"
            className="absolute inset-0 -z-10 h-full w-full object-cover blur-[17px] scale-110 z-10"
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

          <div className="relative z-10 mx-auto mt-8 w-full max-w-[1240px] min-w-0 rounded-[12px] bg-white p-2 sm:mt-10 lg:mt-12">
            <div className="grid min-w-0 gap-4 md:grid-cols-[220px_minmax(0,1fr)] md:items-start lg:grid-cols-[280px_minmax(0,1fr)]">
              <nav
                aria-label="Industries"
                className="min-w-0 md:min-h-[500px] lg:min-h-[500px]"
              >
                <div className="flex min-w-0 gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible md:block md:overflow-visible md:pb-0 lg:block lg:overflow-visible lg:pb-0">
                  {tabs.map((tab) => {
                    const isActive = tab.id === activeTab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTabId(tab.id)}
                        className={`group relative flex shrink-0 items-center border-b text-left transition-colors duration-200 py-3 sm:min-w-0 sm:flex-[1_1_220px] sm:shrink md:w-[220px] md:min-w-0 md:flex-none lg:w-[100%] ${isActive ? "border-[#072C2C] pl-3 text-[#072C2C] sm:pl-4" : "border-[#E3E5D7] pl-0 text-[rgba(7,44,44,0.5)] hover:text-[#072C2C]"}`}
                        aria-selected={isActive}
                        role="tab"
                      >
                        <span
                          className={`mr-2 h-2 w-2 shrink-0 rounded-[2px] bg-[#072C2C] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
                          aria-hidden="true"
                        />
                        <span className="break-words text-medium font-medium md:break-normal">
                          {tab.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </nav>

              <div
                className="min-w-0 rounded-[8px] border border-[#E3E5D7] p-3 sm:p-4 md:p-4 lg:min-h-[500px] lg:p-2"
                role="tabpanel"
              >
                <div
                  key={activeTab.id}
                  className="grid min-w-0 gap-7 animate-[fadeIn_280ms_ease-out] md:grid-cols-[minmax(0,1fr)_minmax(220px,38%)] md:gap-4 lg:grid-cols-[1fr_381px] lg:gap-6"
                >
                  <div className="flex justify-between gap-5 min-h-0 min-w-0 flex-col px-0 py-1 sm:px-2 sm:py-2 md:min-h-[420px] lg:min-h-[460px] lg:px-4 lg:py-4">
                    <div className="grid min-w-0 gap-x-8 gap-y-7 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-9 lg:pb-7">
                      {activeTab.useCases.map((useCase) => (
                        <article
                          key={useCase.id}
                          className="w-full max-w-none sm:max-w-[260px] md:max-w-none lg:max-w-[211px]"
                        >
                          <div className="flex items-center gap-2">
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

                  <figure className="m-0 min-w-0 overflow-hidden rounded-[8px] md:min-h-[360px]  lg:min-h-0">
                    <img
                      src={activeTab.imageUrl}
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
