import React, { useState } from 'react';

const solutionTabs = [
  { id: 'contractor-management', label: 'Contractor management' },
  { id: 'risk-assessments', label: 'Risk assessments' },
  { id: 'toolbox-talks', label: 'Toolbox Talks' },
  { id: 'voice-first-reporting', label: 'Voice-first reporting' },
  { id: 'whs-dashboard', label: 'WHS dashboard' },
  { id: 'actions-tasks', label: 'Actions and tasks' },
  { id: 'iso-compliance', label: 'ISO Compliance' },
  { id: 'learning-inductions', label: 'Learning and inductions' }
];

const heroImageUrl = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/1c4df4d8-28f1-40ae-b934-f6662ca5b7ad.svg';

const tabPanelContent = {
  'contractor-management': {
    imageUrl: 'https://placehold.co/1120x720/F8F9F3/072C2C/svg?text=Contractor+Readiness',
    imageAlt: 'Contractor readiness workspace representing insurance, licence and worker pre-qualification status',
    title: 'Contractor readiness',
    text: 'Keep companies, workers, licences and insurance checks organised before anyone arrives on site.'
  },
  'risk-assessments': {
    imageUrl: 'https://placehold.co/1120x720/F8F9F3/072C2C/svg?text=Risk+Assessment+Draft',
    imageAlt: 'Risk assessment draft workspace representing hazards, controls and SWMS preparation',
    title: 'Risk assessment drafts',
    text: 'Generate site-specific SWMS and risk assessments from plain-language job details in seconds.'
  },
  'toolbox-talks': {
    imageUrl: 'https://placehold.co/1120x720/F8F9F3/072C2C/svg?text=Toolbox+Talk+Record',
    imageAlt: 'Toolbox talk record workspace representing briefings, attendance and worker acknowledgements',
    title: 'Toolbox talk records',
    text: 'Create briefings from live site risks and capture attendance with a clean audit trail.'
  },
  'voice-first-reporting': {
    imageUrl: heroImageUrl,
    imageAlt: 'Voice-first reporting interface with a recording card and incident reporting workflow',
    title: 'Voice-first reporting',
    text: 'Record incidents while still on site, then let AI classify the report, evidence and follow-up actions.'
  },
  'whs-dashboard': {
    imageUrl: 'https://placehold.co/1120x720/F8F9F3/072C2C/svg?text=WHS+Dashboard',
    imageAlt: 'WHS dashboard workspace representing site status, trends, open risks and overdue actions',
    title: 'WHS visibility',
    text: 'See compliance status, open risks, worker attendance and overdue actions across every site.'
  },
  'actions-tasks': {
    imageUrl: 'https://placehold.co/1120x720/F8F9F3/072C2C/svg?text=Tracked+Actions',
    imageAlt: 'Tracked actions workspace representing owners, due dates and closure evidence',
    title: 'Tracked actions',
    text: 'Assign corrective actions, chase owners and close the loop with proof attached to every task.'
  },
  'iso-compliance': {
    imageUrl: 'https://placehold.co/1120x720/F8F9F3/072C2C/svg?text=ISO+Evidence',
    imageAlt: 'ISO evidence workspace representing mapped controls, documents and audit trails',
    title: 'ISO evidence',
    text: 'Map everyday site activity to ISO requirements so audits and gap analysis are easier to prove.'
  },
  'learning-inductions': {
    imageUrl: 'https://placehold.co/1120x720/F8F9F3/072C2C/svg?text=Learning+%26+Inductions',
    imageAlt: 'Learning and inductions workspace representing training paths, tickets and site readiness',
    title: 'Learning and inductions',
    text: 'Deliver role-based inductions, capture acknowledgements and keep training records ready for every worker.'
  }
};

function BookDemoButton(props) {
  const [activeTab, setActiveTab] = useState('voice-first-reporting');
  const activeContent = solutionTabs.find(tab => tab.id === activeTab) ?? solutionTabs[3];
  const activePanel = tabPanelContent[activeContent.id];

  return (
    <section className={`solution w-full overflow-x-hidden bg-[#F8F9F3] ${props.className || ''}`.trim()} style={props.style}>
      <style>{`
        @keyframes solutionTabFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .solution-tab-fade { animation: solutionTabFade 260ms ease-out both; }
      `}</style>
      <div className="relative w-full overflow-hidden bg-[#F8F9F3] lg:h-[1264px]">
        <div className="pointer-events-none hidden lg:block lg:absolute lg:left-[-186px] lg:top-[45px] lg:h-[267px] lg:w-[1788px]" aria-hidden="true">
          <div className="absolute left-0 top-0 h-[136px] w-[1788px] bg-[#D1FF6E] blur-[48.5px]" />
          <div className="absolute left-0 top-[32px] h-[136px] w-[1788px] bg-[#025D5D] blur-[48.5px]" />
          <div className="absolute left-0 top-[100px] h-[167px] w-[1788px] bg-[#041A1A] blur-[48.5px]" />
        </div>

        <div className="w-full bg-[#041A1A] px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-16 md:px-8 lg:absolute lg:left-0 lg:top-[180px] lg:h-[1084px] lg:px-0 lg:pb-0 lg:pt-0">
          <div className="mx-auto w-full max-w-[1240px] lg:relative lg:h-full lg:max-w-[1440px]">
            <div className="lg:absolute lg:left-[100px] lg:top-[323px] lg:w-[651px]">
              <div className="scrollbar-hide -mx-4 flex flex-nowrap gap-3 overflow-x-auto px-4 pb-2 [-webkit-overflow-scrolling:touch] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:overflow-visible sm:px-0 sm:pb-0 md:gap-x-8 lg:block" role="tablist" aria-label="SiteSherpa solution features">
                {solutionTabs.map(tab => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button 
                      key={tab.id} 
                      type="button" 
                      role="tab" 
                      aria-selected={isActive} 
                      aria-controls="solution-tab-panel" 
                      onClick={() => setActiveTab(tab.id)} 
                      className={`group flex min-h-[44px] min-w-max max-w-full shrink-0 items-center gap-3 border border-white/10 px-4 py-3 text-left transition duration-200 sm:min-h-[56px] sm:min-w-0 sm:shrink sm:border-x-0 sm:border-b-0 sm:px-0 sm:py-3 lg:h-[70px] lg:w-[651px] lg:border-t lg:px-0 lg:py-0 ${isActive ? 'rounded-md bg-white/[0.04] text-white sm:rounded-none sm:bg-transparent' : 'rounded-md text-white/40 hover:text-white/70 sm:rounded-none'}`}
                    >
                      <span className={`h-5 w-5 shrink-0 rounded-[6px] transition duration-200 lg:ml-0 ${isActive ? 'bg-[#D1FF6E] opacity-100' : 'bg-transparent opacity-0 sm:group-hover:bg-white/10 sm:group-hover:opacity-100'}`} aria-hidden="true" />
                      <span className="whitespace-nowrap font-['Inter_Display','Inter',sans-serif] text-[15px] font-medium leading-6 sm:whitespace-normal sm:text-[18px] sm:leading-6 md:text-[20px] md:leading-7 lg:whitespace-nowrap lg:text-[28px] lg:leading-8">
                        <span>{tab.label}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div key={activeContent.id} id="solution-tab-panel" role="tabpanel" className="solution-tab-fade mt-8 flex w-full max-w-full flex-col gap-0 overflow-hidden rounded-lg bg-[#122323] md:grid md:grid-cols-[minmax(0,1fr)_minmax(260px,0.75fr)] lg:absolute lg:left-[780px] lg:top-[323px] lg:mt-0 lg:block lg:h-[540px] lg:w-[560px]">
              <div className="relative min-h-[260px] w-full max-w-full overflow-hidden bg-[#122323] p-4 sm:min-h-[320px] sm:p-6 md:min-h-[393px] lg:h-[393px] lg:p-0">
                <figure className="flex h-full min-h-[260px] w-full max-w-full items-center justify-center overflow-hidden rounded-lg bg-[#122323] lg:min-h-0 lg:rounded-none">
                  <img src={activePanel.imageUrl} alt={activePanel.imageAlt} className="h-auto max-h-[280px] w-full max-w-full object-contain object-center sm:max-h-[320px] md:h-full md:max-h-none md:object-cover lg:h-[540px] lg:w-[560px]" />
                </figure>
              </div>
              <div className="p-5 sm:p-6 md:flex md:flex-col md:justify-end lg:absolute lg:left-[32px] lg:top-[420px] lg:w-[406px] lg:p-0">
                <h2 className="font-['Inter_Display','Inter',sans-serif] text-[20px] font-semibold leading-7 text-white lg:text-[18px] lg:leading-7">
                  <span>{activePanel.title}</span>
                </h2>
                <p className="mt-3 font-['Inter_Display','Inter',sans-serif] text-[15px] font-normal leading-6 text-white/70 sm:text-[16px] sm:leading-7 lg:mt-3 lg:text-[18px] lg:leading-7">
                  <span>{activePanel.text}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDemoButton;