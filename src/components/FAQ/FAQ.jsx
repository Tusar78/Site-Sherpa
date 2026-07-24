import React, { useState } from "react";

const FAQ_DATA = [
  {
    question: "How long does it take to get set up?",
    answer:
      "Most teams are up and running as fast as you need. With our Done-For-You WHSMS service, your system is ready before you even log in.",
  },
  {
    question: "What is the difference between a full user and a field user?",
    answer:
      "Full users are for administrators and managers who need full editing and reporting access, while field users are for site workers who just need to complete forms and view documents.",
  },
  {
    question: "Is SiteSherpa built for construction and mining specifically?",
    answer:
      "SiteSherpa's risk management approach works across industries, but it's built with high-risk sectors like construction and mining specifically in mind — covering the hazards, controls, and documentation those sites need, including alignment with standards like ISO 45001.",
  },
  {
    question: "What does the ISO Gap Analysis include?",
    answer:
      "A clause-by-clause gap report against ISO 9001, 45001, or 14001 — rated by severity, with a prioritised action plan and a downloadable PDF/Excel report. Delivered in 24 hours (Rapid) or 5 days (Expert Review).",
  },
  {
    question: "How does SiteSherpa use AI?",
    answer:
      "Our voice AI creates record, drafts risk assessments and toolbox talks, and analyses incidents — automating the everyday admin so your team spend less time on paperwork and more time on site.",
  },
  {
    question: "Is SiteSherpa only for construction and mining?",
    answer:
      "No — SiteSherpa works across any industry with WHS obligations. Construction and mining are where we've built the deepest expertise.",
  },
];

export const FaqSection = () => {
  // Changed to null to prevent any initial load "flash". 
  // Change back to 0 if you specifically want the first item open by default.
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
      <section className="w-full container-regular mx-auto flex flex-row justify-between items-start gap-6 box-border py-[60px] md:py-[140px] lg:pb-[200px] [@media(max-width:1024px)]:flex-col [@media(max-width:1024px)]:items-center [@media(max-width:1024px)]:gap-[60px]">
        {/* Left Content Side */}
        <div className="w-full max-w-[578px] flex flex-col gap-3 [@media(max-width:1024px)]:max-w-full">
          {/* Tagline with Gradient */}
          <span className="inline-block text-base font-['Google_Sans_Code',monospace] font-semibold leading-6 tracking-normal text-left uppercase bg-clip-text text-transparent bg-[image:var(--gradient-sunset)]">
            Frequently asked questions
          </span>

          <div className="flex flex-col gap-4">
            <h2 className="m-0 text-[#072C2C] text-[48px] font-['Inter_Display',sans-serif] font-medium leading-[58px] tracking-[-1.44px] text-left [@media(max-width:640px)]:text-[32px] [@media(max-width:640px)]:leading-10">
              Questions managers ask us before they book a demo
            </h2>
            <p className="m-0 text-[#072C2C]/70 text-lg font-['Inter_Display',sans-serif] font-normal leading-7 tracking-normal text-left max-w-[523px]">
              Every concern you have about switching over, your budget and whether
              the AI actually works on site, answered below.
            </p>
          </div>
        </div>

        {/* Right Accordion Side */}
        <div className="w-full max-w-[600px] flex flex-col rounded-lg overflow-hidden border border-[#E3E5D7] border-b-0 [@media(max-width:1024px)]:max-w-full">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className="w-full border-b border-[#E3E5D7] box-border cursor-pointer bg-transparent group"
            >
              {/* Header */}
              <div className="py-3 px-4 md:py-4 md:px-6 flex justify-between items-center min-h-[56px] rounded-lg transition-colors duration-200 hover:bg-[#072C2C]/5">
                <span className="text-[#072C2C] text-lg font-['Inter_Display',sans-serif] font-medium leading-7 text-left">
                  {item.question}
                </span>
                <img
                  src={
                    activeIndex === index
                      ? "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/db7c2577-e0b6-4e3c-ade7-a9b197a695e7.svg"
                      : "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/e17e1479-ae15-431e-a82a-9a6245577fca.svg"
                  }
                  alt={activeIndex === index ? "minus" : "plus"}
                  className="w-5 h-5 transition-transform duration-300 ease-out"
                />
              </div>

              {/* 
                Smooth Height Animation Container 
                - Uses CSS Grid trick (grid-rows) to animate to the EXACT content height
                - Eliminates "flash" or uneven speed caused by hardcoded max-h values
                - Includes opacity fade for extra smoothness
              */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  {/* Inner Content Wrapper with Static Padding */}
                  <div className="px-6 pb-6">
                    <p className="m-0 text-[#072C2C]/70 text-base font-['Inter_Display',sans-serif] font-normal leading-6 max-w-[396px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

  );
};