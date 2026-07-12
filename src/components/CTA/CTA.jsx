import React from "react";
import { shadow } from "../../assets/images";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const arrowIconUrl =
  "https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/76e666ac-69fb-407e-a82c-0dbf7dc9099f.svg";

export function CTA({ className = "", style }) {
  return (
    <section
      className={`cta relative w-full overflow-hidden bg-[#F8F9F3] ${className}`.trim()}
      style={style}
      aria-labelledby="cta-heading"
    >
      <div className="relative mx-auto w-full overflow-hidden lg:pt-16 lg:pb-28">
        {/* Background Radial/Blur Gradients */}
        <img
          className="solution-shadow"
          src={shadow}
          alt="Shadow Illustration"
          style={{
            top: '28px'
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 top-[128px] bg-[#041A1A] sm:top-[160px] lg:top-[192px]"
          aria-hidden="true"
        />

        {/* Hero Content Area */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-start justify-center px-6 sm:px-8 lg:px-10 xl:px-0">
          <div className="mt-[194px] flex w-full max-w-[920px] flex-col items-center text-center sm:mt-[224px] lg:mt-[261px]">
            <p className="font-['Google_Sans_Code',monospace] text-[13px] font-semibold uppercase leading-6 tracking-[0px] text-[#D1FF6E] sm:text-[15px] lg:text-[16px]">
              Get on site faster
            </p>

            <h1
              id="cta-heading"
              className="mt-3 max-w-[920px] font-['Inter_Display',sans-serif] text-[38px] font-medium leading-[42px] tracking-[-1.14px] text-white sm:text-[48px] sm:leading-[54px] sm:tracking-[-1.44px] lg:text-[60px] lg:leading-[66px] lg:tracking-[-1.8px]"
            >
              Win the contract on Friday, have your team on site by Monday.
            </h1>

            <p className="mt-4 max-w-[642px] font-['Inter_Display',sans-serif] text-[16px] font-normal leading-6 tracking-[0px] text-white/60 sm:mt-5 sm:text-[17px] sm:leading-[27px] lg:text-[18px] lg:leading-[28px]">
              SiteSherpa AI handles your SWMS, inductions, credentials and
              incident reports automatically, so nothing stands between winning
              the job and starting it.
            </p>

            {/* Action Button Link */}
            <div className="cta_btn lg:mt-7">
              <PrimaryBtn href="#" text="Book a demo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
