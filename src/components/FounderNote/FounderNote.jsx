import React, { useState } from 'react';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';

export const FounderNote = ({
  className,
  style,
  onDemoClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    width: '100%',
    maxWidth: '780px',
    minHeight: '840px',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'rgba(235, 236, 226, 1)',
    border: '1px solid rgba(227, 229, 215, 1)',
    borderRadius: '10px',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'%3E%0A  %3Cfilter id=\'n\' color-interpolation-filters=\'sRGB\'%3E%0A    %3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.125\' numOctaves=\'1\' seed=\'1\' result=\'turb\'/%3E%0A    %3CfeGaussianBlur in=\'turb\' stdDeviation=\'4\' result=\'blur\'/%3E%0A    %3CfeColorMatrix in=\'blur\' type=\'saturate\' values=\'0\' result=\'mono\'/%3E%0A    %3CfeComponentTransfer in=\'mono\' result=\'alpha\'%3E%0A      %3CfeFuncA type=\'table\' tableValues=\'0 0.08\'/%3E%0A    %3C/feComponentTransfer%3E%0A    %3CfeComposite in=\'SourceGraphic\' in2=\'alpha\' operator=\'in\'/%3E%0A  %3C/filter%3E%0A  %3Crect width=\'100%25\' height=\'100%25\' fill=\'rgb(255%2C 255%2C 255)\' filter=\'url(%23n)\'/%3E%0A%3C/svg%3E")',
    backgroundBlendMode: 'soft-light, normal',
    padding: 'clamp(32px, 5vw, 39px) clamp(28px, 6vw, 48px)',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto 120px',
    ...style
  };

  const taglineStyle = {
    color: 'rgba(7, 44, 44, 1)',
    opacity: 0.5,
    fontSize: '16px',
    fontFamily: '"Google Sans Code", monospace',
    fontWeight: 600,
    lineHeight: '24px',
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
    marginBottom: '12px',
    display: 'block'
  };

  const headingStyle = {
    maxWidth: '715px',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 'clamp(26px, 3.85vw, 30px)',
    fontFamily: '"Inter Display", sans-serif',
    fontWeight: 500,
    lineHeight: 'clamp(34px, 5vw, 40px)',
    margin: '0 0 24px 0',
    display: 'block'
  };

  const bodyTextStyle = {
    maxWidth: '597px',
    color: 'rgba(7, 44, 44, 0.7)',
    fontSize: 'clamp(16px, 2.4vw, 18px)',
    fontFamily: '"Inter Display", sans-serif',
    fontWeight: 400,
    lineHeight: 'clamp(25px, 3.6vw, 28px)',
    whiteSpace: 'pre-line',
    marginBottom: '24px',
    display: 'block'
  };

  const quoteStyle = {
    maxWidth: '478px',
    color: 'rgba(7, 44, 44, 1)',
    fontSize: 'clamp(17px, 2.4vw, 18px)',
    fontFamily: '"Inter Display", sans-serif',
    fontWeight: 500,
    lineHeight: 'clamp(26px, 3.6vw, 28px)',
    margin: '0 0 122px 4px',
    display: 'block'
  };

  const signatureTextStyle = {
    color: 'rgba(7, 44, 44, 1)',
    fontSize: '18px',
    fontFamily: '"Inter Display", sans-serif',
    fontWeight: 400,
    lineHeight: '28px',
    marginBottom: '19px',
    display: 'block',
    zIndex: 2
  };

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    padding: 0,
    transition: 'transform 0.2s ease, opacity 0.2s ease',
    opacity: isHovered ? 0.9 : 1,
    transform: isHovered ? 'translateY(-1px)' : 'none',
    zIndex: 2,
    width: 'fit-content'
  };

  const buttonMainStyle = {
    width: '142px',
    height: '48px',
    backgroundColor: 'rgba(209, 255, 110, 1)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(7, 44, 44, 1)',
    fontSize: '16px',
    fontFamily: '"Inter Display", sans-serif',
    fontWeight: 500,
    lineHeight: '24px'
  };

  const buttonIconBoxStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: 'rgba(209, 255, 110, 1)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '4px'
  };

  const signatureImageStyle = {
    position: 'absolute',
    width: 'clamp(220px, 33.5vw, 261px)',
    height: 'auto',
    left: '42px',
    top: '624px',
    pointerEvents: 'none',
    zIndex: 1
  };

  const founderImageStyle = {
    position: 'absolute',
    width: 'clamp(270px, 39.75vw, 310px)',
    height: 'clamp(270px, 39.75vw, 310px)',
    right: '3px',
    bottom: '2px',
    objectFit: 'cover',
    objectPosition: 'center',
    pointerEvents: 'none'
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (onDemoClick) onDemoClick();
  };

  return <div className={`founder-note ${className || ''}`.trim()} style={containerStyle}>
      <span className="founder-note__eyebrow" style={taglineStyle}>Note from the founder</span>
      
      <h2 className="founder-note__heading" style={headingStyle}>
        SiteSherpa was built because site operators deserve better than enterprise software that didn't fit.
      </h2>
      
      <p className="founder-note__body" style={bodyTextStyle}>
        {`Justine Youl spent over 20 years working as a frontline heavy machinery operator on mine sites across Australia before transitioning into a career as a WHS professional. She did not learn about safety from a textbook. She learned it from working in the environments where getting it wrong has real consequences.

After years working as a WHS consultant for some of Australia’s largest mining and construction operations, Justine built SiteSherpa because she could not find software that actually worked for the businesses she was trying to help. Everything was either too complex, too expensive, or built for enterprise companies with dedicated safety teams.`}
      </p>

      <blockquote className="founder-note__quote" style={quoteStyle}>
        “I built SiteSherpa because I knew what it was like to be the person on the tools who had to do the paperwork too. That experience is in every decision we make.”
      </blockquote>

      <span className="founder-note__signature-text" style={signatureTextStyle}>Justine Youl, Founder and CEO</span>


      <img className="founder-note__signature-image" src="https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/94855190-5b82-4270-9973-ab80fea30d3e.svg" alt="Justine Youl Signature" style={signatureImageStyle} />

      <PrimaryBtn href='#' text="Book a demo" />
      
      <img className="founder-note__founder-image" src="https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/0645f6af-70d1-437d-9ae0-0b6ec4c9cd35.png" alt="Justine Youl, Founder and CEO" style={founderImageStyle} />
    </div>;
};