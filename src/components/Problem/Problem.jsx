import React, { useEffect, useRef, useState } from 'react';
import './Problem.css';
import { circleAlert, Problem1, Problem2, Problem3, Problem4 } from '../../assets/images';

const floatingAssets = [ 
  {
    id: 'dashboard-interface',
    src: Problem4,
    alt: 'Dashboard interface preview',
    width: 501,
    height: 281,
    desktopTop: 44,
    desktopLeft: 777,
    rotation: 'rotate(11.18deg)',
    top: '54px',
    left: '26px',
    text: `SWMS, inductions, risk assessments - every site and client wants something different.`,
  },
  {
    id: 'onboarding-workflow', 
    src: Problem3,
    alt: 'Onboarding workflow preview',
    width: 493,
    height: 250,
    desktopTop: 397,
    desktopLeft: 0,
    rotation: 'rotate(7.14deg)',
    top: '54px',
    left: '26px',
    text: `SWMS, inductions, risk assessments - every site and client wants something different.`,
  },
  {
    id: 'safety-compliance-card', 
    src: Problem2,
    alt: 'Safety compliance card preview',
    width: 492,
    height: 248,
    desktopTop: 394,
    desktopLeft: 802,
    rotation: 'rotate(-6.93deg)',
    top: '60px',
    left: '30px',
    text: `Your time is too valuable to be rewriting the same documents for every new job that expired last week.`,
  },
  {
    id: 'site-access-management', 
    src: Problem1,
    alt: 'Site access management preview',
    width: 494,
    height: 252,
    desktopTop: 35,
    desktopLeft: -9,
    rotation: 'rotate(-7.5deg)',
    top: '65px',
    left: '26px',
    text: `Until your documentation is sorted, no one's working and nothing's moving.`,
  }
];

const dots = [
  {
    id: 'top-status-dot',
    desktopTop: 90,
    desktopLeft: 672,
    mobileTop: '89px',
    mobileLeft: '52%',
    orbitOffset: 'translate(-100px, 50px) rotate(-90deg)'
  },
  {
    id: 'left-status-dot',
    desktopTop: 330,
    desktopLeft: 300,
    mobileTop: '288px',
    mobileLeft: '21.6%',
    orbitOffset: 'translate(80px, -60px) rotate(45deg)'
  },
  {
    id: 'right-status-dot',
    desktopTop: 413,
    desktopLeft: 978,
    mobileTop: '324px',
    mobileLeft: '76.6%',
    orbitOffset: 'translate(-80px, -80px) rotate(120deg)'
  }
];

const ringBaseStyle = {
  borderColor: 'var(--color-surface-alt)',
  borderStyle: 'dashed',
  borderWidth: '1px',
  boxSizing: 'border-box',
  borderRadius: '50%',
  pointerEvents: 'none'
};

const dotBaseStyle = {
  width: '8px',
  height: '8px',
  backgroundColor: '#EC382C',
  boxSizing: 'border-box',
  borderRadius: '50%',
  pointerEvents: 'none'
};

export const ProblemSection = ({ className, style }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`w-full overflow-x-hidden bg-transparent px-4 py-[60px] sm:px-6 sm:py-[80px] md:px-8 lg:px-0 lg:pt-[114px] lg:pb-[20px] ${className ?? ''}`.trim()} 
      style={style} 
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0 lg:max-w-[1295px]">
        <div className="problem-stage relative mx-auto flex w-full min-w-0 flex-col items-center gap-8 md:gap-10 lg:block lg:h-[648px] lg:w-[1295px] lg:max-w-full lg:gap-0">
          <div aria-hidden="true" className="problem-ring-outer absolute left-1/2 top-12 h-[260px] w-[560px] -translate-x-1/2 sm:top-16 sm:h-[392px] sm:w-[736px] lg:left-[135px] lg:top-[92px] lg:h-[530px] lg:w-[994px] lg:translate-x-0" style={ringBaseStyle} />
          <div aria-hidden="true" className="problem-ring-inner absolute left-1/2 top-24 h-[190px] w-[410px] -translate-x-1/2 sm:top-[124px] sm:h-[300px] sm:w-[560px] lg:left-[264px] lg:top-[161px] lg:h-[392px] lg:w-[736px] lg:translate-x-0" style={ringBaseStyle} />

          {dots.map((dot, index) => (
            <span 
              key={dot.id} 
              aria-hidden="true" 
              className="absolute z-[5] orbit-dot lg:left-[var(--desktop-left)] lg:top-[var(--desktop-top)]" 
              style={{
                ...dotBaseStyle,
                top: dot.mobileTop,
                left: dot.mobileLeft,
                '--desktop-left': `${dot.desktopLeft}px`,
                '--desktop-top': `${dot.desktopTop}px`,
                transform: isVisible ? 'translate(0, 0) rotate(0deg)' : dot.orbitOffset,
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.2}s`
              }} 
            />
          ))}

          <div 
            className={`problem-content relative z-20 order-1 flex w-full max-w-[566px] min-w-0 flex-col items-center pt-4 text-center sm:pt-10 lg:absolute lg:left-[365px] lg:top-[212px] lg:h-[224px] lg:w-[566px] lg:max-w-none lg:pt-0 premium-reveal ${isVisible ? 'is-visible' : ''}`}
          >
            <div className="mb-3 flex items-center gap-2">
              <img src={circleAlert} alt="Alert symbol" className="h-5 w-5 shrink-0" />
              <span className='problem_subtext'>
                Sound familiar?
              </span>
            </div>

            <h2 id="problem-heading" className="problem_title">
              Getting on site shouldn't be this complicated
            </h2>

            <p className="m-0 mt-4 max-w-full text-base font-normal leading-7 sm:max-w-[340px] sm:text-[18px] sm:leading-7 lg:w-[340px]" style={{
              color: 'rgba(7, 44, 44, 0.7)',
              fontFamily: '"Inter Display", Inter, ui-sans-serif, system-ui, sans-serif'
            }}>
              You won the job. Now the client wants a pile of paperwork by Monday...
            </p>
          </div>

          <div className="relative z-10 order-2 grid w-full max-w-full min-w-0 grid-cols-1 gap-6 pb-1 sm:max-w-[760px] sm:grid-cols-2 sm:gap-6 md:gap-8 lg:block lg:max-w-none lg:gap-0 lg:pb-0">
            {floatingAssets.map((asset, index) => (
              <figure 
                key={asset.id} 
                className="problem-floating-card relative m-0 w-full min-w-0 overflow-visible p-6 md:p-7 lg:absolute lg:left-[var(--desktop-left)] lg:top-[var(--desktop-top)] lg:w-[var(--asset-width)] lg:p-0" 
                style={{
                  '--desktop-left': `${asset.desktopLeft}px`,
                  '--desktop-top': `${asset.desktopTop}px`,
                  '--asset-width': `${asset.width}px`
                }}
              >
                <img 
                  src={asset.src} 
                  alt={asset.alt} 
                  className="block h-auto w-full max-w-full select-none spring-element" 
                  style={{
                    objectFit: 'contain',
                    transform: isVisible ? asset.rotation : 'translateY(30px) rotate(0deg)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${index * 0.15}s`,
                    transformOrigin: 'center center'
                  }} 
                  draggable={false} 
                />

                <div 
                  className='absolute flex flex-col spring-element responsive-card-text' 
                  style={{
                    transform: isVisible ? asset.rotation : 'translateY(30px) rotate(0deg)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${index * 0.15}s`,
                    gap: '44px',
                    top: asset.top,
                    left: asset.left
                  }}
                >
                  <span className='text-medium font-medium text-primary'>You can't start earning until you're on-site</span>
                  <span className='text-regular text-primary/70 max-w-[390px]'>{asset.text}</span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ProblemSection.displayName = 'Group2147223442';