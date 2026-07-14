import React, { useState } from "react";

const FAQ_DATA = [
  {
    question: "How long does it take to get set up?",
    answer:
      "Most teams are up and running as fast as you need. With our Done-For-You WHSMS service, your system is ready before you even log in.",
  },
  {
    question: "Do I need a dedicated Safety manager?",
    answer:
      "No, SiteSherpa is designed to be intuitive enough for site managers and owners to handle compliance without needing a full-time safety specialist.",
  },
  {
    question: "What is the difference between a full seat and a light seat?",
    answer:
      "Full seats are for administrators and managers who need full editing and reporting access, while light seats are for site workers who just need to complete forms and view documents.",
  },
  {
    question: "Is SiteSherpa built for construction and mining specifically?",
    answer:
      "Yes, our workflows and AI models are specifically trained on Australian construction and mining safety standards (ISO 45001).",
  },
  {
    question: "What does the ISO Gap Analysis include?",
    answer:
      "It includes a comprehensive review of your current systems against ISO 45001 standards to identify exactly what is missing for certification.",
  },
  {
    question: "How does SiteSherpa use AI?",
    answer:
      "Our AI helps automate form filling, risk assessments, and document analysis to save safety managers hours of manual data entry.",
  },
];

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[1240px] mx-auto flex flex-row justify-between items-start gap-10 box-border py-[140px] pb-[120px] [@media(max-width:1024px)]:flex-col [@media(max-width:1024px)]:items-center [@media(max-width:1024px)]:gap-[60px] [@media(max-width:640px)]:py-10 [@media(max-width:640px)]:px-4">
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
            className="w-full border-b border-[#E3E5D7] box-border cursor-pointer bg-transparent overflow-hidden group"
          >
            {/* Header */}
            <div className="py-4 px-6 flex justify-between items-center min-h-[56px] rounded-lg transition-colors duration-200 hover:bg-[#072C2C]/5">
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
                className="w-5 h-5 transition-transform duration-200"
              />
            </div>

            {/* 
              Fast & Smooth Animation Container 
              - Duration: 300ms (Fast)
              - Easing: ease-out (Smooth stop)
              - Padding: Isolated in child div (No glitch)
            */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                activeIndex === index 
                  ? "max-h-[500px] opacity-100" 
                  : "max-h-0 opacity-0"
              }`}
            >
              {/* Inner Content Wrapper with Static Padding */}
              <div className="px-6 pb-6">
                <p className="m-0 text-[#072C2C]/70 text-base font-['Inter_Display',sans-serif] font-normal leading-6 max-w-[396px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};