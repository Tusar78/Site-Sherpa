import React, { useState } from 'react';

const checkIconUrl = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/405f723e-9b7e-4f74-99fd-0799f425703b.svg';

const tabIcons = {
  clients: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/8394ae72-3bcb-42b6-968a-317efa4f5802.svg',
  contractors: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/d4808bed-7368-4fdb-99de-4c8c8244f551.svg'
};

const contentByAudience = {
  clients: {
    eyebrow: 'Benefits',
    headline: 'AI-powered safety built around how your team actually works',
    subheading: 'Everything clients need to stay compliant and everything contractors need to show up ready, all in one place.',
    cards: [{
      id: 'clients-site-visibility',
      title: "Get compliant in days, not weeks",
      image: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/592bf771-fd51-43fe-9299-b390f68fc747.png',
      imageAlt: 'SiteSherpa dashboard showing live site attendance and contractor status',
      features: [
        {
          id: "clients-site-visibility-live",
          text: "Win the contract on Friday, be on site by Monday ",
          checkIcon: "",
        },
        {
          id: "clients-site-visibility-credentials",
          text: "AI generates your SWMS in minutes with inductions and training records ready before your first contractor steps on site",
          checkIcon: checkIconUrl,
        },
        {
          id: "clients-site-visibility-records",
          text: "Simple enough to set up yourself, no consultant required",
          checkIcon: checkIconUrl,
        },
      ]
    }, {
      id: 'clients-paper-trail',
      title: 'A paper trail that builds itself while work happens',
      image: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/f94aeb9b-5f1f-4158-ad8a-ce9e58d5048c.png',
      imageAlt: 'Automated compliance records and induction evidence in SiteSherpa',
      features: [
        {
          id: "clients-paper-trail-logged",
          text: "Track workers are checked in across every client site in real time",
          checkIcon: checkIconUrl,
        },
        {
          id: "clients-paper-trail-ready",
          text: "Manage training, tickets, and expiries so nobody gets turned away at the gate",
          checkIcon: checkIconUrl,
        },
        {
          id: "clients-paper-trail-standards",
          text: "Full attendance and learning records on demand without having to chase anyone",
          checkIcon: checkIconUrl,
        },
      ]
    }, {
      id: 'clients-contractor-prequal',
      title: "Always know who's on your site and what they're up to",
      image: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/9523ad1d-bf24-4265-8978-86c68f3abfcb.png',
      imageAlt: 'Contractor pre-qualification workflow with insurance and licence verification',
      features: [
        {
          id: "clients-contractor-prequal-documents",
          text: "See who's on site right now, what they're working on and when they're due to check out",
          checkIcon: checkIconUrl,
        },
        {
          id: "clients-contractor-prequal-expiry",
          text: "Pre-qual status, credentials and inductions confirmed before anyone starts work",
          checkIcon: checkIconUrl,
        },
        {
          id: "clients-contractor-prequal-access",
          text: "Full attendance history on demand, every name accounted for",
          checkIcon: checkIconUrl,
        },
      ]
    }]
  },
  contractors: {
    eyebrow: 'Benefits',
    headline: 'AI-powered safety built around how your team actually works',
    subheading: 'Everything clients need to stay compliant and everything contractors need to show up ready, all in one place.',
    cards: [{
      id: 'contractors-fast-compliance',
      title: 'Get compliant in days, not weeks',
      image: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/afabad05-d932-46c6-8886-05043030e59d.png',
      imageAlt: 'Contractor setup screen showing fast compliance preparation',
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
      ]
    }, {
      id: 'contractors-risk-assessments',
      title: 'Custom risk assessments without the blank page',
      image: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/fdfae89f-a6e2-4562-89be-b835903413fc.svg',
      imageAlt: 'Abstract SiteSherpa interface pattern representing AI-generated safety documents',
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
      ]
    }, {
      id: 'contractors-voice-reporting',
      title: 'Log incidents and hazards by voice from the field',
      image: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/35478b79-465f-4f32-924f-46662acad947.png',
      imageAlt: 'Worker on an industrial site using a mobile safety reporting workflow',
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
      ]
    }, {
      id: 'contractors-crew-ready',
      title: 'Keep every ticket, induction and licence ready to go',
      image: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/28408bda-c623-4a43-a7a4-dad86430cd7a.png',
      imageAlt: 'Industrial crew and equipment representing contractor readiness on site',
      features: [
        {
          id: "contractors-crew-ready-wallet",
          text: "Store worker credentials, licences and induction evidence where managers can actually find them",
          checkIcon: checkIconUrl,
        },
        {
          id: "contractors-crew-ready-reminders",
          text: "Get reminders before important documents expire and block your team from starting",
          checkIcon: checkIconUrl,
        },
        {
          id: "contractors-crew-ready-share",
          text: "Share the right proof with the right client without exposing unnecessary company data",
          checkIcon: checkIconUrl,
        },
      ]
    }]
  }
};


const Benefits = ({ className, style }) => {
  const [activeTab, setActiveTab] = useState('clients');
  const activeContent = contentByAudience[activeTab];

  return (
    <section className={`w-full overflow-x-hidden bg-[#F8F9F3] ${className || ''}`} style={style} aria-labelledby="benefits-heading">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-[120px]">
        <div className="mx-auto flex max-w-[628px] flex-col items-center text-center">
          <p className="mb-[17px] inline-flex font-semibold font-body text-[#137F58] uppercase">
            <span>Benefits</span>
          </p>
          <h2 id="benefits-heading" className="text-h2 font-medium">
            <span>AI-powered safety built around how your team actually works</span>
          </h2>
          <p className="mt-[20px] max-w-[510px] text-medium leading-7 text-primary/70 sm:text-lg">
            <span>Everything clients need to stay compliant and everything contractors need to show up ready, all in one place.</span>
          </p>
        </div>

        <div className="mt-[37px] flex w-full justify-start overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center">
          <div className="inline-flex min-w-max rounded-t-[8px] bg-[#E3E5D7] p-0.5" role="tablist" aria-label="Benefits audience">
            <button type="button" role="tab" aria-selected={activeTab === 'clients'} className={`flex min-w-max items-center gap-[8px] rounded-t-[8px] px-5 text-small font-medium transition-all duration-200 ${activeTab === 'clients' ? 'bg-bge text-primary shadow-[0_1px_2px_rgba(7,44,44,0.10)]' : 'bg-transparent text-primary/60 hover:text-primary'}`} onClick={() => setActiveTab('clients')}>
              <img className="h-[16px] w-[16px]" src={tabIcons.clients} alt="" aria-hidden="true" />
              <span>For Clients</span>
            </button>
            <button type="button" role="tab" aria-selected={activeTab === 'contractors'} className={`flex h-11 min-w-max items-center  gap-[8px] rounded-t-[8px] px-5 text-small  font-medium transition-all duration-200 sm:h-10 sm:px-6 ${activeTab === 'contractors' ? 'bg-[#F8F9F3] text-primary shadow-[0_1px_2px_rgba(7,44,44,0.10)]' : 'bg-transparent text-primary/60 hover:text-primary'}`} onClick={() => setActiveTab('contractors')}>
              <img className="h-4 w-4" src={tabIcons.contractors} alt="" aria-hidden="true" />
              <span>For Contractors</span>
            </button>
          </div>
        </div>

        <div key={activeTab} className="mt-[42px] flex flex-col gap-8 motion-safe:animate-[benefitContentIn_250ms_ease] sm:mt-14 lg:mt-20 lg:gap-15">
          {activeContent.cards.map(card => (
            <article key={card.id} className="grid min-h-0 overflow-hidden rounded-[12px] bg-surface sm:min-h-[420px] sm:grid-cols-[1.15fr_0.85fr] lg:min-h-[520px] lg:grid-cols-[1.45fr_1fr]">
              <div className="flex flex-col justify-center px-8 py-8 sm:px-8 sm:py-10 lg:py-12 lg:px-12">
                <h3 className="max-w-[450px] text-h3 font-medium text-primary">
                  <span>{card.title}</span>
                </h3>
                <div className="mt-[24px] flex flex-col sm:mt-[32px] lg:mt-[40px] max-w-[540px]">
                  {card.features.map(feature => (
                    <div key={feature.id} className="flex items-center gap-4 border-b border-dashed border-[#C1C79C] py-4 first:pt-0 sm:gap-4 sm:py-5">
                      <img className="mt-1 h-4 w-4 shrink-0" src={checkIconUrl} alt="" aria-hidden="true" />
                      <p className="text-medium leading-6 text-primary ">
                        <span>{feature.text}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <figure className="h-100  w-full max-w-[560px] p-2 pt-0 sm:h-full sm:min-h-[420px] sm:p-2 lg:min-h-[560px]">
                <img className="h-full w-full rounded-xl object-contain sm:rounded-l-lg sm:rounded-r-xl  bg-bge" src={card.image} alt={card.imageAlt} />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;