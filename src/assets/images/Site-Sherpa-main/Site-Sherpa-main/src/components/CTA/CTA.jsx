import React from 'react';

const arrowIconUrl = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/76e666ac-69fb-407e-a82c-0dbf7dc9099f.svg';

export function CTA({ className = '', style }) {
  return (
    <section 
      className={`cta relative w-full overflow-hidden bg-[#F8F9F3] ${className}`.trim()} 
      style={style} 
      aria-labelledby="cta-heading"
    >
      <div className="relative mx-auto h-[620px] w-full overflow-hidden sm:h-[660px] lg:h-[692px]">
        {/* Background Radial/Blur Gradients */}
        <div className="absolute left-1/2 top-0 h-[267px] w-[1788px] -translate-x-1/2 sm:top-[24px] lg:top-[57px]" aria-hidden="true">
          <div className="absolute left-0 top-0 h-[136px] w-full bg-[#D1FF6E] blur-[48.5px]" />
          <div className="absolute left-0 top-[32px] h-[136px] w-full bg-[#025D5D] blur-[48.5px]" />
          <div className="absolute left-0 top-[100px] h-[167px] w-full bg-[#041A1A] blur-[48.5px]" />
        </div>

        <div className="absolute inset-x-0 bottom-0 top-[128px] bg-[#041A1A] sm:top-[160px] lg:top-[192px]" aria-hidden="true" />

        {/* Hero Content Area */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-start justify-center px-6 sm:px-8 lg:px-10 xl:px-0">
          <div className="mt-[194px] flex w-full max-w-[920px] flex-col items-center text-center sm:mt-[224px] lg:mt-[261px]">
            <p className="font-['Google_Sans_Code',monospace] text-[13px] font-semibold uppercase leading-6 tracking-[0px] text-[#D1FF6E] sm:text-[15px] lg:text-[16px]">
              Get on site faster
            </p>

            <h1 id="cta-heading" className="mt-3 max-w-[920px] font-['Inter_Display',sans-serif] text-[38px] font-medium leading-[42px] tracking-[-1.14px] text-white sm:text-[48px] sm:leading-[54px] sm:tracking-[-1.44px] lg:text-[60px] lg:leading-[66px] lg:tracking-[-1.8px]">
              Win the contract on Friday, have your team on site by Monday.
            </h1>

            <p className="mt-4 max-w-[642px] font-['Inter_Display',sans-serif] text-[16px] font-normal leading-6 tracking-[0px] text-white/60 sm:mt-5 sm:text-[17px] sm:leading-[27px] lg:text-[18px] lg:leading-[28px]">
              SiteSherpa AI handles your SWMS, inductions, credentials and incident reports automatically, so nothing stands between winning the job and starting it.
            </p>

            {/* Action Button Link */}
            <a href="#book-demo" className="mt-7 flex h-12 w-[194px] items-center justify-center gap-1 rounded-md font-['Inter_Display',sans-serif] text-[16px] font-medium leading-6 tracking-[0px] text-[#072C2C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FF6E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#041A1A] sm:mt-8 lg:mt-7" aria-label="Book a demo">
              <span className="flex h-12 w-[142px] items-center justify-center rounded-md bg-[#D1FF6E]">
                <span>Book a demo</span>
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#D1FF6E]" aria-hidden="true">
                <img src={arrowIconUrl} alt="" className="h-5 w-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}