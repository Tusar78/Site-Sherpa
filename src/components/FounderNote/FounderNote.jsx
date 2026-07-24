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
      <h2 className="block  text-primary font-base font-medium mt-0 mb-6 text-medium">
        I didn’t build SiteSherpa because I wanted to build software. I built it because I was sick of watching businesses waste hours on paperwork that wasn’t keeping a single person safer.
      </h2>

      {/* Body Text */}
      <p className="block  text-primary/70 text-medium font-base whitespace-pre-line mb-6">
        {`I started my career on site, operating machinery, before moving into workplace health and safety across Australia. I’ve stood in crib huts. I’ve watched workers sign paperwork they hadn’t read. I’ve also worked alongside business owners who were genuinely trying to do the right thing, but found themselves buried in legislation, paperwork and compliance when all they wanted to do was run their business.

Somewhere along the way, we confused paperwork with safety. We made compliance so complicated that people stopped engaging with it. That’s the problem I set out to solve.

SiteSherpa wasn’t built in a boardroom. It was built from years of seeing what actually happens onsite. Every feature we build has one purpose: to save businesses time, reduce administrative chaos, and make workplace safety simple enough that people will actually use it.

Because when safety becomes easier, people spend less time pushing paper and more time going home safely.`}
      </p>

      {/* Quote */}
      <blockquote className="block max-w-[478px] italic text-medium text-primary font-base font-medium"
        style={{
          fontSize: 'clamp(17px, 2.4vw, 18px)',
          lineHeight: 'clamp(26px, 3.6vw, 28px)'
        }}>
        “More paperwork doesn't make people safer. Better systems do. That's why I built SiteSherpa.”
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