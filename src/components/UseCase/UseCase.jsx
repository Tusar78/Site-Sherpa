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
        title: "SWMS AI",
        description:
          "Task-specific SWMS drafted in seconds, ready for your team to review, approve, and sign on to from any phone",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "construction-03",
        title: "Contractor prequalification",
        description:
          "Insurances, licences, and safety management plans collected, scored against your criteria, and tracked with expiry alerts.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "construction-04",
        title: "Permits to work",
        description:
          "Digital permits with approval workflows for any work requiring formal authorisation before it starts",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "construction-05",
        title: "Site attendance",
        description:
          "QR check-in and check-out with a live view of every worker, contractor, and visitor on site",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "construction-05",
        title: "AI toolbox talks",
        description:
          "Pre-start talks drafted from your site's recent hazards and incidents, with QR or photo roll-call attendance",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "construction-05",
        title: "Emergency muster",
        description:
          "One-tap muster with a live accounted/unaccounted roll, aligned to AS 3745 emergency planning principles",
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
        title: "Risk register and controls",
        description:
          "Risks recorded, categorised, and monitored with linked controls and configurable risk matrices.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "mining-02",
        title: "Live safety dashboards",
        description:
          "TRIFR, LTIFR, days since last injury, and open actions calculated live, not compiled monthly.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "mining-03",
        title: "Multi-language toolbox talks",
        description:
          "AI-drafted pre-starts auto-translated into workers' preferred languages for CALD workforces.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "mining-04",
        title: "Multi-company structure",
        description:
          "Multiple entities and sites under one organisation, with central oversight and company-level data separation.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "mining-04",
        title: "SherpaWatch voice reporting",
        description:
          "Workers speak incidents and hazards; AI structures and files the report.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "mining-04",
        title: "Training & competency register",
        description:
          "Every qualification, licence, and competency tracked by role with expiry notifications.",
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
        title: "Credential tracking",
        description:
          "Every worker's tickets, licences, and qualifications tracked with expiry alerts and site access eligibility.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "mining-services-02",
        title: "SWMS AI",
        description:
          "Draft SWMS for drill and blast, confined space, and high-risk tasks in seconds, reviewed and approved by your team.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "mining-services-03",
        title: "Site-specific inductions",
        description:
          "Inductions assigned and completed on mobile before workers arrive at each site.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "mining-services-04",
        title: "Permits to work",
        description:
          "Digital high-risk work permits with configurable approval workflows per site.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "mining-services-04",
        title: "Voice incident reporting",
        description:
          "Report once by voice on site; export or integrate via API to your principal's systems.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "mining-services-04",
        title: "Compliance evidence on demand",
        description:
          "Attendance, toolbox talk, and safety performance reports exportable for principals, auditors, and tenders.",
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
        title: "Inspections and audits",
        description:
          "Configurable forms with photos, signatures, and findings that automatically generate corrective actions.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "manufacturing-02",
        title: "Multi-language toolbox talks",
        description:
          "Safety messages AI-translated into your workforce's preferred languages.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "manufacturing-03",
        title: "Voice incident reporting",
        description:
          "Floor workers speak the incident; AI classifies and files it in seconds.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "manufacturing-04",
        title: "ISO Pre-Audit App",
        description:
          "AI-assisted gap analysis across ISO 9001, 45001, and 14001, with gap registers and readiness dashboards.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "manufacturing-04",
        title: "Live KPI dashboards",
        description:
          "TRIFR, LTIFR, and inspection completion rates visible in real time, with scheduled reports to the board.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "manufacturing-04",
        title: "Training and competency register",
        description:
          "Role-based training, licences, and competencies with automated expiry alerts.",
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
        title: "Digital pre-start checks",
        description:
          "Vehicle and plant pre-starts on mobile, with defects raised as corrective actions with owners and due dates.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "transport-02",
        title: "Depot attendance",
        description:
          "QR check-in and check-out across every depot and distribution centre, with attendance reports on demand.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "transport-03",
        title: "Contractor management",
        description: "Owner-drivers and subcontractor companies registered, prequalified, and insurance-tracked in one place.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "transport-04",
        title: "Voice incident reporting",
        description:
          "Incidents reported by voice from any phone — no app store download required.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "transport-04",
        title: "Licence and medical tracking",
        description:
          "Driver credentials tracked with automated expiry notifications before they lapse.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "transport-04",
        title: "Quiet Hours",
        description:
          "Non-critical notifications suppressed outside working hours, supporting right-to-disconnect obligations.",
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
        title: "Contractor prequalification",
        description:
          "Subcontractor submissions assessed and scored against your criteria, down to individual worker records.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "civil-02",
        title: "Daily forms with sign-off",
        description:
          "JSEAs, pre-starts, and inspections completed on mobile with digital signatures and photo evidence.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "civil-03",
        title: "QR site access",
        description:
          "Attendance and visitor management across metro and regional sites from one platform.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "civil-04",
        title: "Risk assessments",
        description:
          "Structured assessments with configurable likelihood and consequence matrices, consistent across every crew.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "civil-04",
        title: "Permits to work",
        description:
          "Formal authorisation workflows for high-risk activities, tracked to closure.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "civil-04",
        title: "Scheduled client reporting",
        description:
          "Safety performance, attendance, and contractor compliance reports generated and distributed automatically.",
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
        title: "Mobile-first platform",
        description:
          "A web app that works on any phone with no app store install — built for a workforce that's never at a desk.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "facilities-02",
        title: "Multi-company structure",
        description:
          "Every division or brand under one organisation, with separate data and consolidated oversight.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "facilities-03",
        title: "Contractor prequalification",
        description:
          "Requirements you define, from light-touch for low-risk trades to rigorous for high-risk work.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "facilities-04",
        title: "My Work",
        description:
          "Each worker sees only their tasks, forms, training, and documents — one clear view of what's due.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "facilities-04",
        title: "Document compliance",
        description:
          "Version-controlled document library with compliance reporting, so every site works from current documents.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "facilities-04",
        title: "SherpaConnect",
        description:
          "Alerts, announcements, and messages linked to incidents and actions — one channel instead of scattered emails.",
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
        title: "Multi-department structure",
        description:
          "Departments and entities configured in one hierarchy with role-based access for every level.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "government-02",
        title: "Contractor compliance",
        description:
          "Contractors submit their own documentation for assessment and scoring, with expiry tracking.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "government-03",
        title: "Live KPI dashboards",
        description:
          "TRIFR, LTIFR, and open actions visible in real time for executive and council reporting.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "government-04",
        title: "Scheduled reports",
        description:
          "Safety performance and compliance reports generated and distributed automatically on your cycle.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "government-04",
        title: "Visitor management",
        description:
          "Registration, inductions, and access records for every facility, with SMS verification.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "government-04",
        title: "Quiet Hours",
        description:
          "Configurable suppression of out-of-hours notifications, supporting right-to-disconnect compliance.",
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
        title: "Sherpa Learn",
        description:
          "Training assigned, tracked, and certificated across clinical, manufacturing, and support workforces.",
        iconUrl: useCaseIconBuilding,
        iconAlt: "Building icon",
      },
      {
        id: "healthcare-02",
        title: "Attendance and visitors",
        description:
          "Real-time visibility of exactly who is in your facility, with visitor inductions on arrival.",
        iconUrl: useCaseIconWallFire,
        iconAlt: "Brick wall icon",
      },
      {
        id: "healthcare-03",
        title: "Audit-ready reporting",
        description:
          "Training, incident, and document compliance records exportable as evidence for accreditation & audits.",
        iconUrl: useCaseHammer,
        iconAlt: "Hammer icon",
      },
      {
        id: "healthcare-04",
        title: "Document control",
        description:
          "One version-controlled document library with compliance reporting across every facility.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "healthcare-04",
        title: "Hazard and observation reporting",
        description:
          "Simple reporting of hazards physical & psychosocial with corrective actions tracked to closure.",
        iconUrl: useCaseIconCog,
        iconAlt: "Cog icon",
      },
      {
        id: "healthcare-04",
        title: "Credential and registration tracking",
        description:
          "Registrations, licences, and mandatory training tracked per role with automated expiry alerts.",
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
                    <div className="grid min-w-0 gap-x-8 gap-y-7 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-8 lg:pb-7">
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