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
} from "../../assets/images";

// Import all dynamic icons from the separate file
import {
  ConstructionIcon01, ConstructionIcon02, ConstructionIcon03, ConstructionIcon04, ConstructionIcon05, ConstructionIcon06,
  MiningIcon01, MiningIcon02, MiningIcon03, MiningIcon04, MiningIcon05, MiningIcon06,
  MiningServicesIcon01, MiningServicesIcon02, MiningServicesIcon03, MiningServicesIcon04, MiningServicesIcon05, MiningServicesIcon06,
  ManufacturingIcon01, ManufacturingIcon02, ManufacturingIcon03, ManufacturingIcon04, ManufacturingIcon05, ManufacturingIcon06,
  TransportIcon01, TransportIcon02, TransportIcon03, TransportIcon04, TransportIcon05, TransportIcon06,
  CivilIcon01, CivilIcon02, CivilIcon03, CivilIcon04, CivilIcon05, CivilIcon06,
  FacilitiesIcon01, FacilitiesIcon02, FacilitiesIcon03, FacilitiesIcon04, FacilitiesIcon05, FacilitiesIcon06,
  GovernmentIcon01, GovernmentIcon02, GovernmentIcon03, GovernmentIcon04, GovernmentIcon05, GovernmentIcon06,
  HealthcareIcon01, HealthcareIcon02, HealthcareIcon03, HealthcareIcon04, HealthcareIcon05, HealthcareIcon06,
} from "./UseCaseIcons";

// Map each use case ID to its specific, unique icon component
const iconMap = {
  // Construction
  "construction-01": ConstructionIcon01,
  "construction-02": ConstructionIcon02,
  "construction-03": ConstructionIcon03,
  "construction-04": ConstructionIcon04,
  "construction-05": ConstructionIcon05,
  "construction-06": ConstructionIcon06,
  // Mining
  "mining-01": MiningIcon01,
  "mining-02": MiningIcon02,
  "mining-03": MiningIcon03,
  "mining-04": MiningIcon04,
  "mining-05": MiningIcon05,
  "mining-06": MiningIcon06,
  // Mining Services
  "mining-services-01": MiningServicesIcon01,
  "mining-services-02": MiningServicesIcon02,
  "mining-services-03": MiningServicesIcon03,
  "mining-services-04": MiningServicesIcon04,
  "mining-services-05": MiningServicesIcon05,
  "mining-services-06": MiningServicesIcon06,
  // Manufacturing
  "manufacturing-01": ManufacturingIcon01,
  "manufacturing-02": ManufacturingIcon02,
  "manufacturing-03": ManufacturingIcon03,
  "manufacturing-04": ManufacturingIcon04,
  "manufacturing-05": ManufacturingIcon05,
  "manufacturing-06": ManufacturingIcon06,
  // Transport & Logistics
  "transport-01": TransportIcon01,
  "transport-02": TransportIcon02,
  "transport-03": TransportIcon03,
  "transport-04": TransportIcon04,
  "transport-05": TransportIcon05,
  "transport-06": TransportIcon06,
  // Civil Infrastructure
  "civil-01": CivilIcon01,
  "civil-02": CivilIcon02,
  "civil-03": CivilIcon03,
  "civil-04": CivilIcon04,
  "civil-05": CivilIcon05,
  "civil-06": CivilIcon06,
  // Facilities Management
  "facilities-01": FacilitiesIcon01,
  "facilities-02": FacilitiesIcon02,
  "facilities-03": FacilitiesIcon03,
  "facilities-04": FacilitiesIcon04,
  "facilities-05": FacilitiesIcon05,
  "facilities-06": FacilitiesIcon06,
  // Government & Public Sector
  "government-01": GovernmentIcon01,
  "government-02": GovernmentIcon02,
  "government-03": GovernmentIcon03,
  "government-04": GovernmentIcon04,
  "government-05": GovernmentIcon05,
  "government-06": GovernmentIcon06,
  // Healthcare & Pharmaceuticals
  "healthcare-01": HealthcareIcon01,
  "healthcare-02": HealthcareIcon02,
  "healthcare-03": HealthcareIcon03,
  "healthcare-04": HealthcareIcon04,
  "healthcare-05": HealthcareIcon05,
  "healthcare-06": HealthcareIcon06,
};

const tabs = [
  {
    id: "construction",
    label: "Construction",
    eyebrow: "Built for crews on shifting sites",
    headline: "Keep every contractor, SWMS, induction and site record ready before work starts.",
    bgImage: useCaseBgTwo,
    cardImage: useCaseThumTwo,
    useCases: [
      { id: "construction-01", title: "SWMS AI", description: "Task-specific SWMS drafted in seconds, ready for your team to review, approve, and sign on to from any phone" },
      { id: "construction-02", title: "Contractor prequalification", description: "Insurances, licences, and safety management plans collected, scored against your criteria, and tracked with expiry alerts." },
      { id: "construction-03", title: "Permits to work", description: "Digital permits with approval workflows for any work requiring formal authorisation before it starts" },
      { id: "construction-04", title: "Site attendance", description: "QR check-in and check-out with a live view of every worker, contractor, and visitor on site" },
      { id: "construction-05", title: "AI toolbox talks", description: "Pre-start talks drafted from your site's recent hazards and incidents, with QR or photo roll-call attendance" },
      { id: "construction-06", title: "Emergency muster", description: "One-tap muster with a live accounted/unaccounted roll, aligned to AS 3745 emergency planning principles" },
    ],
  },
  {
    id: "mining",
    label: "Mining",
    eyebrow: "Heavy-risk work, lighter admin",
    headline: "Run high-risk work documentation with the evidence trail auditors expect.",
    bgImage: useCaseBgSeven,
    cardImage: useCaseThumSeven,
    useCases: [
      { id: "mining-01", title: "Risk register and controls", description: "Risks recorded, categorised, and monitored with linked controls and configurable risk matrices." },
      { id: "mining-02", title: "Live safety dashboards", description: "TRIFR, LTIFR, days since last injury, and open actions calculated live, not compiled monthly." },
      { id: "mining-03", title: "Multi-language toolbox talks", description: "AI-drafted pre-starts auto-translated into workers' preferred languages for CALD workforces." },
      { id: "mining-04", title: "Multi-company structure", description: "Multiple entities and sites under one organisation, with central oversight and company-level data separation." },
      { id: "mining-05", title: "SherpaWatch voice reporting", description: "Workers speak incidents and hazards; AI structures and files the report." },
      { id: "mining-06", title: "Training & competency register", description: "Every qualification, licence, and competency tracked by role with expiry notifications." },
    ],
  },
  {
    id: "mining-services",
    label: "Mining services",
    eyebrow: "Supplier compliance without the scramble",
    headline: "Prove your team is qualified, inducted and ready across every client site.",
    bgImage: useCaseBgSix,
    cardImage: useCaseThumSix,
    useCases: [
      { id: "mining-services-01", title: "Credential tracking", description: "Every worker's tickets, licences, and qualifications tracked with expiry alerts and site access eligibility." },
      { id: "mining-services-02", title: "SWMS AI", description: "Draft SWMS for drill and blast, confined space, and high-risk tasks in seconds, reviewed and approved by your team." },
      { id: "mining-services-03", title: "Site-specific inductions", description: "Inductions assigned and completed on mobile before workers arrive at each site." },
      { id: "mining-services-04", title: "Permits to work", description: "Digital high-risk work permits with configurable approval workflows per site." },
      { id: "mining-services-05", title: "Voice incident reporting", description: "Report once by voice on site; export or integrate via API to your principal's systems." },
      { id: "mining-services-06", title: "Compliance evidence on demand", description: "Attendance, toolbox talk, and safety performance reports exportable for principals, auditors, and tenders." },
    ],
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    eyebrow: "Safer shifts, cleaner records",
    headline: "Keep procedures, toolbox talks and corrective actions connected to daily operations.",
    bgImage: useCaseBgFive,
    cardImage: useCaseThumFive,
    useCases: [
      { id: "manufacturing-01", title: "Inspections and audits", description: "Configurable forms with photos, signatures, and findings that automatically generate corrective actions." },
      { id: "manufacturing-02", title: "Multi-language toolbox talks", description: "Safety messages AI-translated into your workforce's preferred languages." },
      { id: "manufacturing-03", title: "Voice incident reporting", description: "Floor workers speak the incident; AI classifies and files it in seconds." },
      { id: "manufacturing-04", title: "ISO Pre-Audit App", description: "AI-assisted gap analysis across ISO 9001, 45001, and 14001, with gap registers and readiness dashboards." },
      { id: "manufacturing-05", title: "Live KPI dashboards", description: "TRIFR, LTIFR, and inspection completion rates visible in real time, with scheduled reports to the board." },
      { id: "manufacturing-06", title: "Training and competency register", description: "Role-based training, licences, and competencies with automated expiry alerts." },
    ],
  },
  {
    id: "transport-logistics",
    label: "Transport and Logistics",
    eyebrow: "Moving teams, grounded compliance",
    headline: "Give drivers, depots and contractors one source of truth for safety readiness.",
    bgImage: useCaseBgNine,
    cardImage: useCaseThumNine,
    useCases: [
      { id: "transport-01", title: "Digital pre-start checks", description: "Vehicle and plant pre-starts on mobile, with defects raised as corrective actions with owners and due dates." },
      { id: "transport-02", title: "Depot attendance", description: "QR check-in and check-out across every depot and distribution centre, with attendance reports on demand." },
      { id: "transport-03", title: "Contractor management", description: "Owner-drivers and subcontractor companies registered, prequalified, and insurance-tracked in one place." },
      { id: "transport-04", title: "Voice incident reporting", description: "Incidents reported by voice from any phone — no app store download required." },
      { id: "transport-05", title: "Licence and medical tracking", description: "Driver credentials tracked with automated expiry notifications before they lapse." },
      { id: "transport-06", title: "Quiet Hours", description: "Non-critical notifications suppressed outside working hours, supporting right-to-disconnect obligations." },
    ],
  },
  {
    id: "civil-infrastructure",
    label: "Civil infrastructure",
    eyebrow: "Every package, every principal",
    headline: "Handle changing scopes, multiple contractors and site evidence without duplicate admin.",
    bgImage: useCaseBgOne,
    cardImage: useCaseThumOne,
    useCases: [
      { id: "civil-01", title: "Contractor prequalification", description: "Subcontractor submissions assessed and scored against your criteria, down to individual worker records." },
      { id: "civil-02", title: "Daily forms with sign-off", description: "JSEAs, pre-starts, and inspections completed on mobile with digital signatures and photo evidence." },
      { id: "civil-03", title: "QR site access", description: "Attendance and visitor management across metro and regional sites from one platform." },
      { id: "civil-04", title: "Risk assessments", description: "Structured assessments with configurable likelihood and consequence matrices, consistent across every crew." },
      { id: "civil-05", title: "Permits to work", description: "Formal authorisation workflows for high-risk activities, tracked to closure." },
      { id: "civil-06", title: "Scheduled client reporting", description: "Safety performance, attendance, and contractor compliance reports generated and distributed automatically." },
    ],
  },
  {
    id: "facilities-management",
    label: "Facilities management",
    eyebrow: "Many sites, one safety system",
    headline: "Know which contractors are cleared for each asset before work begins.",
    bgImage: useCaseBgThree,
    cardImage: useCaseThumThree,
    useCases: [
      { id: "facilities-01", title: "Mobile-first platform", description: "A web app that works on any phone with no app store install — built for a workforce that's never at a desk." },
      { id: "facilities-02", title: "Multi-company structure", description: "Every division or brand under one organisation, with separate data and consolidated oversight." },
      { id: "facilities-03", title: "Contractor prequalification", description: "Requirements you define, from light-touch for low-risk trades to rigorous for high-risk work." },
      { id: "facilities-04", title: "My Work", description: "Each worker sees only their tasks, forms, training, and documents — one clear view of what's due." },
      { id: "facilities-05", title: "Document compliance", description: "Version-controlled document library with compliance reporting, so every site works from current documents." },
      { id: "facilities-06", title: "SherpaConnect", description: "Alerts, announcements, and messages linked to incidents and actions — one channel instead of scattered emails." },
    ],
  },
  {
    id: "government-public",
    label: "Government and public sector",
    eyebrow: "Accountable work, accessible records",
    headline: "Keep contractor evidence and incident records transparent across public assets.",
    bgImage: useCaseBgEight,
    cardImage: useCaseThumEight,
    useCases: [
      { id: "government-01", title: "Multi-department structure", description: "Departments and entities configured in one hierarchy with role-based access for every level." },
      { id: "government-02", title: "Contractor compliance", description: "Contractors submit their own documentation for assessment and scoring, with expiry tracking." },
      { id: "government-03", title: "Live KPI dashboards", description: "TRIFR, LTIFR, and open actions visible in real time for executive and council reporting." },
      { id: "government-04", title: "Scheduled reports", description: "Safety performance and compliance reports generated and distributed automatically on your cycle." },
      { id: "government-05", title: "Visitor management", description: "Registration, inductions, and access records for every facility, with SMS verification." },
      { id: "government-06", title: "Quiet Hours", description: "Configurable suppression of out-of-hours notifications, supporting right-to-disconnect compliance." },
    ],
  },
  {
    id: "healthcare-pharmaceuticals",
    label: "Healthcare and pharmacueticals",
    eyebrow: "Sensitive sites, controlled access",
    headline: "Support critical environments with clear inductions, approvals and audit-ready evidence.",
    bgImage: useCaseBgFour,
    cardImage: useCaseThumFour,
    useCases: [
      { id: "healthcare-01", title: "Sherpa Learn", description: "Training assigned, tracked, and certificated across clinical, manufacturing, and support workforces." },
      { id: "healthcare-02", title: "Attendance and visitors", description: "Real-time visibility of exactly who is in your facility, with visitor inductions on arrival." },
      { id: "healthcare-03", title: "Audit-ready reporting", description: "Training, incident, and document compliance records exportable as evidence for accreditation & audits." },
      { id: "healthcare-04", title: "Document control", description: "One version-controlled document library with compliance reporting across every facility." },
      { id: "healthcare-05", title: "Hazard and observation reporting", description: "Simple reporting of hazards physical & psychosocial with corrective actions tracked to closure." },
      { id: "healthcare-06", title: "Credential and registration tracking", description: "Registrations, licences, and mandatory training tracked per role with automated expiry alerts." },
    ],
  },
];

function UseCase(props) {
  const [activeTabId, setActiveTabId] = useState("construction");
  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    <main className={`w-full bg-[#F8F9F3] ${props.className || ""}`.trim()} style={props.style}>
      <section className="w-full overflow-hidden global-padding py-4 sm:py-8 lg:py-10" aria-labelledby="industries-heading">
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[10px] bg-cover bg-center px-4 py-10 sm:px-8 sm:py-14 md:py-16 lg:min-h-[951px] lg:px-20 lg:py-[100px]">

          {/* Dynamic Background Image */}
          <img
            src={activeTab.bgImage}
            className="absolute inset-0 h-full w-full object-cover blur-[17px] scale-110 z-10"
            alt=""
          />

          <div className="relative z-10 mx-auto max-w-[1240px] text-center text-white">
            <p className="font-body text-regular font-semibold uppercase">
              <span>Industries</span>
            </p>
            <h1 id="industries-heading" className="mx-auto mt-3 md:mt-4 max-w-[788px] text-h2 font-medium sm:mt-4">
              <span>SiteSherpa is built for every industry where safety is non-negotiable</span>
            </h1>
          </div>

          <div className="relative z-10 mx-auto mt-8 w-full max-w-[1240px] min-w-0 rounded-[12px] bg-white py-2 pr-2 pl-2 lg:pl-6 sm:mt-10 lg:mt-12">
            <div className="flex min-w-0 flex-col gap-4 lg:flex-row">

              {/* Nav - Fixed 280px on desktop */}
              <nav aria-label="Industries" className="min-w-0 lg:w-[280px] lg:flex-shrink-0">
  {/* Added `justify-center` to center items when they wrap */}
  <div className="flex min-w-0 flex-wrap gap-2 justify-center pb-2 sm:pb-0 lg:block lg:pb-0">
    {tabs.map((tab) => {
      const isActive = tab.id === activeTab.id;
      return (
        <button
          key={tab.id}
          type="button"
          onClick={() => setActiveTabId(tab.id)}
          className={`group relative flex items-center justify-center border transition-colors duration-200 py-0.5 sm:py-1 px-2 
            lg:justify-start lg:w-full lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-3 
            ${isActive
              ? "border-[#072C2C] bg-[#072C2C] text-[#E3E5D7] lg:bg-transparent"
              : "border-[#E3E5D7] text-[rgba(7,44,44,0.5)] hover:text-[#072C2C] hover:border-[#072C2C]"
            }`}
          aria-selected={isActive}
          role="tab"
        >
          {/* Smooth Scale & Width Animation for Bullet */}
          <span
            className={`h-2 bg-primary shrink-0 transition-all duration-300 ease-out hidden lg:block ${isActive
                ? "w-2 opacity-100 mr-3"
                : "w-0 opacity-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:mr-3"
              }`}
            aria-hidden="true"
          />
          <span className="break-words text-xsmall sm:text-small lg:text-medium font-medium md:break-normal whitespace-nowrap">
            {tab.label}
          </span>
        </button>
      );
    })}
  </div>
</nav>
              {/* Right side - Takes remaining width */}
              <div className="min-w-0 flex-1 rounded-[8px] border border-[#E3E5D7] p-3 sm:p-4 md:p-4 lg:p-2">
                <div
                  key={activeTab.id}
                  className="h-full flex min-w-0 flex-col animate-[fadeIn_280ms_ease-out] md:flex-row gap-4 lg:gap-0"
                >
                  {/* Use case details - Takes remaining space */}
                  <div className="flex justify-between gap-6 min-h-0 min-w-0 flex-1 flex-col p-0 sm:p-0 lg:p-3">
                    <div className="grid min-w-0 gap-x-8 gap-y-7 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-8">
                      {activeTab.useCases.map((useCase) => {
                        // Dynamically resolve the correct, unique icon component
                        const IconComponent = iconMap[useCase.id];

                        return (
                          <article
                            key={useCase.id}
                            className="w-full max-w-none sm:max-w-[260px] md:max-w-none"
                          >
                            <div className="flex items-center gap-2">
                              {IconComponent && <IconComponent />}
                              <h3 className="text-regular font-medium text-[#072C2C]">
                                <span>{useCase.title}</span>
                              </h3>
                            </div>
                            <p className="mt-3 text-small font-normal text-[rgba(7,44,44,0.7)]">
                              <span>{useCase.description}</span>
                            </p>
                          </article>
                        );
                      })}
                    </div>

                    <PrimaryBtn text={"Book a demo"} />
                  </div>

                  {/* Image box - Max 380px */}
                  <figure className="m-0 min-w-0 w-full md:w-[380px] md:flex-shrink-0 overflow-hidden rounded-[8px] md:min-h-[360px] lg:min-h-0">
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