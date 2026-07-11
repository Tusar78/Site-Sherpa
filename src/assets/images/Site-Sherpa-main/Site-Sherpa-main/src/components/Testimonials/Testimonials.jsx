import React from 'react';

const companyLogoA = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/73e3c362-49c0-4acb-9ff1-a0142eb97d69.svg';
const companyLogoB = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/2b7c90ab-5724-4d25-a57f-6036ac68c5e6.svg';
const companyLogoC = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/afffddac-0eef-4b29-98db-e0fde618dab9.svg';
const companyLogoD = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/5219cc1b-bf9a-411b-a753-7838968651bc.svg';
const statLogoB = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/d6600e8a-6d59-450e-8fc8-e3923bbc5bee.svg';
const portraitA = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/17e32877-9dee-4193-a7ac-4a7b844b71dc.png';
const portraitD = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/db86a9fd-8047-4507-876e-7992a8161257.png';

// Reusable Testimonial Card Component
function TestimonialCard({ logo, quote, name, role, image, logoClass = "h-[28px] max-w-[120px]" }) {
  const isFeatured = !!image;
  
  return (
    <article className={`testimonials__card ${isFeatured ? 'testimonials__card--featured col-span-2 md:col-span-2 lg:col-span-1 lg:flex lg:flex-row' : 'testimonials__card--plain flex'} min-w-0 overflow-hidden rounded-[10px] border border-[#E3E5D7] bg-white p-0 shadow-[0_1px_0_rgba(7,44,44,0.04)] lg:min-h-[338px]`}>
      <div className="testimonials__card-content flex min-w-0 flex-1 flex-col justify-between gap-[24px] p-[24px] sm:p-[32px]">
        <div className="testimonials__quote-group flex min-w-0 flex-col gap-[20px]">
          <img src={logo} alt={`${name} company logo`} className={`testimonials__logo object-contain object-left ${logoClass}`} />
          <blockquote className="testimonials__quote min-w-0 font-['Inter_Display','Inter',sans-serif] text-[clamp(18px,2.5vw,20px)] font-normal leading-relaxed tracking-[-0.01em] text-[#072C2C]" style={{ fontFamily: "'Inter Display', Inter, sans-serif" }}>
            <p><span>{quote}</span></p>
          </blockquote>
        </div>
        <footer className="testimonials__person flex min-w-0 flex-col gap-[4px]">
          <p className="testimonials__name font-['Inter_Display','Inter',sans-serif] text-[16px] font-medium leading-normal text-[#072C2C]" style={{ fontFamily: "'Inter Display', Inter, sans-serif" }}>
            <span>{name}</span>
          </p>
          <p className="testimonials__role font-['Inter_Display','Inter',sans-serif] text-[14px] font-normal leading-normal text-[#072C2C]/70" style={{ fontFamily: "'Inter Display', Inter, sans-serif" }}>
            <span>{role}</span>
          </p>
        </footer>
      </div>
      
      {isFeatured && (
        <>
          <img src={image} alt={`${name} workspace context`} className="testimonials__image block h-[240px] w-full object-cover sm:h-[280px] lg:hidden" />
          <div className="testimonials__desktop-media hidden w-[37%] shrink-0 overflow-hidden rounded-[7px] lg:m-[8px] lg:block">
            <img src={image} alt={`${name} workspace context`} className="testimonials__desktop-image h-full w-full object-cover" />
          </div>
        </>
      )}
    </article>
  );
}

// Main Testimonials Component
export function Testimonials({ className = '' }) {
  return (
    <section aria-labelledby="testimonials-heading" className={`testimonials min-h-screen w-full overflow-x-hidden bg-[#F8F9F3] px-[16px] py-[48px] text-[#072C2C] sm:px-[24px] sm:py-[80px] lg:py-[96px] xl:px-[0px] ${className}`.trim()}>
      <div className="testimonials__container mx-auto flex w-full max-w-[1240px] flex-col gap-[32px] sm:gap-[48px] lg:gap-[56px]">
        <header className="testimonials__header mx-auto flex w-full max-w-[768px] flex-col items-center gap-[16px] text-center">
          <h1 id="testimonials-heading" className="testimonials__title font-['Inter_Display','Inter',sans-serif] text-[clamp(32px,5.5vw,48px)] font-medium leading-[1.2] tracking-[-0.03em] text-black" style={{ fontFamily: "'Inter Display', Inter, sans-serif" }}>
            <span>Trusted by others just like you</span>
          </h1>
        </header>

        <div className="testimonials__rows flex w-full min-w-0 flex-col gap-[12px] sm:gap-[16px]">
          
          {/* Top Row Grid Layer */}
          <div className="testimonials__row testimonials__row--top grid w-full min-w-0 grid-cols-1 gap-[12px] sm:gap-[16px] md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr]">
            <TestimonialCard 
              logo={companyLogoA}
              logoClass="h-[28px] max-w-[130px] opacity-60"
              quote="“We needed to align with the new Aged Care Quality Standards, and SiteSherpa made the process seamless”"
              name="David Henricks"
              role="National Retail Operations Lead"
              image={portraitA}
            />
            <TestimonialCard 
              logo={companyLogoB}
              quote="“Transitioning to Crossover streamlined our workflow. The intuitive design and powerful capabilities have transformed our operations entirely.”"
              name="Jordan Lee"
              role="Product Manager at Sailwind"
            />
            <TestimonialCard 
              logo={companyLogoC}
              logoClass="h-[28px] max-w-[120px] opacity-70"
              quote="“Transitioning to Crossover streamlined our workflow. The intuitive design and powerful capabilities have transformed our operations entirely.”"
              name="Jordan Lee"
              role="Product Manager at Sailwind"
            />
          </div>

          {/* Bottom Row Grid Layer */}
          <div className="testimonials__row testimonials__row--bottom grid w-full min-w-0 grid-cols-2 gap-[12px] sm:gap-[16px] lg:grid-cols-[1fr_1fr_2.2fr]">
            
            {/* Metric Analytics Card 1 */}
            <article className="testimonials__metric-card col-span-1 flex min-w-0 flex-col justify-between rounded-[10px] border border-[#E3E5D7] bg-white p-[20px] shadow-[0_1px_0_rgba(7,44,44,0.04)] sm:p-[24px] lg:min-h-[338px] lg:p-[32px]">
              <div className="testimonials__metric-copy min-w-0 border-b border-[#E3E5D7] pb-[20px]">
                <p className="testimonials__metric-value font-['Inter_Display','Inter',sans-serif] text-[clamp(36px,5vw,48px)] font-medium leading-none tracking-[-0.03em] text-[#072C2C]" style={{ fontFamily: "'Inter Display', Inter, sans-serif" }}>
                  <span>1000hr</span>
                </p>
                <p className="testimonials__metric-label mt-[12px] font-['Google_Sans_Code',sans-serif] text-[12px] font-semibold uppercase tracking-wider leading-none text-[#072C2C]/70" style={{ fontFamily: "'Google Sans Code', sans-serif" }}>
                  <span>SAVED WORKING ON SITE</span>
                </p>
              </div>
              <img src={companyLogoC} alt="Customer logo for saved hours result" className="testimonials__metric-logo mt-[24px] h-[32px] max-w-[130px] object-contain object-left opacity-60 sm:h-[40px]" />
            </article>

            {/* Metric Analytics Card 2 */}
            <article className="testimonials__metric-card col-span-1 flex min-w-0 flex-col justify-between rounded-[10px] border border-[#E3E5D7] bg-white p-[20px] shadow-[0_1px_0_rgba(7,44,44,0.04)] sm:p-[24px] lg:min-h-[338px] lg:p-[32px]">
              <div className="testimonials__metric-copy min-w-0 border-b border-[#E3E5D7] pb-[20px]">
                <p className="testimonials__metric-value font-['Inter_Display','Inter',sans-serif] text-[clamp(36px,5vw,48px)] font-medium leading-none tracking-[-0.03em] text-[#072C2C]" style={{ fontFamily: "'Inter Display', Inter, sans-serif" }}>
                  <span>10X</span>
                </p>
                <p className="testimonials__metric-label mt-[12px] font-['Google_Sans_Code',sans-serif] text-[12px] font-semibold uppercase tracking-wider leading-none text-[#072C2C]/70" style={{ fontFamily: "'Google Sans Code', sans-serif" }}>
                  <span>REDUCE WORKER RISK ASSESSMENT</span>
                </p>
              </div>
              <img src={statLogoB} alt="Customer logo for risk reduction result" className="testimonials__metric-logo mt-[24px] h-[32px] max-w-[140px] object-contain object-left sm:h-[40px]" />
            </article>

            <TestimonialCard 
              logo={companyLogoD}
              logoClass="h-[34px] max-w-[140px]"
              quote="“Transitioning to Crossover streamlined our workflow. The intuitive design and powerful capabilities have transformed our operations entirely.”"
              name="Jordan Lee"
              role="Product Manager at Sailwind"
              image={portraitD}
            />
          </div>

        </div>
      </div>
    </section>
  );
}