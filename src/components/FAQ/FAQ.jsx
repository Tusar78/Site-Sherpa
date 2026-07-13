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
    <section
      className="group-2147223535"
      style={{
        width: "100%",
        maxWidth: "1240px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "40px",
        boxSizing: "border-box",
        padding: "140px 0 120px 0",
      }}
    >
      {/* Left Content Side */}
      <div
        className="group-2147223534 items-start bg-clip-text"
        style={{
          width: "100%",
          maxWidth: "578px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          
        }}
      >
        <span
          className="tagline bg-[image:var(--gradient-sunset)] bg-clip-text text-transparent"
          style={{
            display: "inline-block",        
            fontSize: "16px",
            fontFamily: '"Google Sans Code", monospace',
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "0px",
            textAlign: "left",
            textTransform: "uppercase",
          }}
        >
          Frequently asked questions
        </span>

        <div
          className="group-2147223532"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h2
            className="heading"
            style={{
              margin: 0,
              color: "#072C2C",
              fontSize: "48px",
              fontFamily: '"Inter Display", sans-serif',
              fontWeight: 500,
              lineHeight: "58px",
              letterSpacing: "-1.44px",
              textAlign: "left",
            }}
          >
            Questions managers ask us before they book a demo
          </h2>
          <p
            className="text"
            style={{
              margin: 0,
              color: "rgba(7, 44, 44, 0.7)",
              fontSize: "18px",
              fontFamily: '"Inter Display", sans-serif',
              fontWeight: 400,
              lineHeight: "28px",
              letterSpacing: "0px",
              textAlign: "left",
              maxWidth: "523px",
            }}
          >
            Every concern you have about switching over, your budget and whether
            the AI actually works on site, answered below.
          </p>
        </div>
      </div>

      {/* Right Accordion Side */}
      <div
        className="group-2147223533"
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
          overflow: "hidden",
          border: '1px solid #E3E5D7',
          borderBottom: 'none'
        }}
      >
        {FAQ_DATA.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleAccordion(index)}
            style={{
              width: "100%",
              borderBottom: "1px solid #E3E5D7",
              // borderBottom:
              //   index === FAQ_DATA.length - 0 ? "1px solid #E3E5D7" : "none",
              boxSizing: "border-box",
              cursor: "pointer",
              backgroundColor: "transparent",
              transition: "all 0.4s ease-out",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: "56px",
                borderRadius: "8px",
              }}
            >
              <span
                className="question"
                style={{
                  color: "#072C2C",
                  fontSize: "18px",
                  fontFamily: '"Inter Display", sans-serif',
                  fontWeight: 500,
                  lineHeight: "28px",
                  textAlign: "left",
                }}
              >
                {item.question}
              </span>
              <img
                src={
                  activeIndex === index
                    ? "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/db7c2577-e0b6-4e3c-ade7-a9b197a695e7.svg"
                    : "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/e17e1479-ae15-431e-a82a-9a6245577fca.svg"
                }
                alt={activeIndex === index ? "minus" : "plus"}
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>

            <div
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
                opacity: activeIndex === index ? 1 : 0,
                transition: "all 0.4s ease-out",
                padding: activeIndex === index ? "0 24px 24px 24px" : "0 24px",
              }}
            >
              <p
                className="text"
                style={{
                  margin: 0,
                  color: "rgba(7, 44, 44, 0.7)",
                  fontSize: "16px",
                  fontFamily: '"Inter Display", sans-serif',
                  fontWeight: 400,
                  lineHeight: "24px",
                  maxWidth: "396px",
                }}
              >
                {item.answer}
              </p>{" "}
              {/* Fixed: changed from </span> to </p> */}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .group-2147223535 {
            flex-direction: column !important;
            align-items: center !important;
            gap: 60px !important;
          }
          .group-2147223534, .group-2147223533 {
            max-width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .heading {
            font-size: 32px !important;
            line-height: 40px !important;
          }
          .group-2147223535 {
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
