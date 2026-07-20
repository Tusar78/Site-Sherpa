import React from 'react';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import { signature, founderProfile } from '../../assets/images';

export const FounderNote = ({ className, style, onDemoClick }) => {
  // The background SVG pattern
  const bgPattern = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%0A  %3Cfilter id='n' color-interpolation-filters='sRGB'%3E%0A    %3CfeTurbulence type='fractalNoise' baseFrequency='0.125' numOctaves='1' seed='1' result='turb'/%3E%0A    %3CfeGaussianBlur in='turb' stdDeviation='4' result='blur'/%3E%0A    %3CfeColorMatrix in='blur' type='saturate' values='0' result='mono'/%3E%0A    %3CfeComponentTransfer in='mono' result='alpha'%3E%0A      %3CfeFuncA type='table' tableValues='0 0.08'/%3E%0A    %3C/feComponentTransfer%3E%0A    %3CfeComposite in='SourceGraphic' in2='alpha' operator='in'/%3E%0A  %3C/filter%3E%0A  %3Crect width='100%25' height='100%25' fill='rgb(255%2C 255%2C 255)' filter='url(%23n)'/%3E%0A%3C/svg%3E";

  return (
    <div className="container-regular">
      <div
      className={`pb-[400px] md:pb-0 relative w-full max-w-[780px] min-h-[840px] box-border overflow-hidden bg-[#EBECE2] border border-[#E3E5D7] rounded-[10px] mx-auto mb-[60px] md:mb-[140px] flex flex-col group ${className || ''}`}
      style={{
        // Applying the complex background pattern and blend mode which are hard to do purely with utilities
        backgroundImage: `url("${bgPattern}")`,
        backgroundBlendMode: 'soft-light, normal',
        // Fluid padding matching clamp(32px, 5vw, 39px) clamp(28px, 6vw, 48px)
        padding: 'clamp(32px, 5vw, 39px) clamp(28px, 6vw, 48px)',
        ...style
      }}
    >
      {/* Tagline */}
      <span className="block text-primary/50 text-caption font-semibold uppercase mb-3">
        Note from the founder
      </span>

      {/* Heading */}
      <h2 className="block  text-primary font-base font-medium mt-0 mb-6 text-h4">
        SiteSherpa was built because site operators deserve better than enterprise software that didn't fit.
      </h2>

      {/* Body Text */}
      <p className="block max-w-[597px] text-primary/70 text-medium font-base whitespace-pre-line mb-6">
        {`Justine Youl spent over 20 years working as a frontline heavy machinery operator on mine sites across Australia before transitioning into a career as a WHS professional. She did not learn about safety from a textbook. She learned it from working in the environments where getting it wrong has real consequences.

After years working as a WHS consultant for some of Australia’s largest mining and construction operations, Justine built SiteSherpa because she could not find software that actually worked for the businesses she was trying to help. Everything was either too complex, too expensive, or built for enterprise companies with dedicated safety teams.`}
      </p>

      {/* Quote */}
      <blockquote className="block max-w-[478px] italic text-medium text-primary font-base font-medium"
        style={{
          fontSize: 'clamp(17px, 2.4vw, 18px)',
          lineHeight: 'clamp(26px, 3.6vw, 28px)'
        }}>
        “I built SiteSherpa because I knew what it was like to be the person on the tools who had to do the paperwork too. That experience is in every decision we make.”
      </blockquote>

      {/* Signature Image - Absolute Positioned */}
      <img
        className="pointer-events-none h-auto mt-6 md:mt-8"
        src={signature}
        alt="Justine Youl Signature"
        style={{
          width: 'clamp(220px, 33.5vw, 261px)'
        }}
      />
      {/* Signature Text */}
      <span className="block relative  text-medium  font-base font-bold mb-5">
        Justine Youl, Founder and CEO
      </span>

      {/* Button Area - Using Group Hover for smooth animation without JS state */}
      <div
      >
        <PrimaryBtn href='#' text="Book a demo" />
      </div>


      {/* Founder Image - Absolute Positioned */}
      <img
        className="hidden sm:block ml-auto absolute pointer-events-none right-0 bottom-0 object-cover object-center"
        src={founderProfile}
        alt="Justine Youl, Founder and CEO"
        style={{
          width: 'clamp(270px, 39.75vw, 10%)'
        }}
      />
    </div>
    </div>
  );
};