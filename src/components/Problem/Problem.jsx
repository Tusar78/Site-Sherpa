import React from 'react';

const floatingAssets = [
  {
    id: 'dashboard-interface',
    src: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/38bb9b50-1b82-4467-a3b4-f9322b828554.png',
    alt: 'Dashboard interface preview',
    width: 501,
    height: 281,
    desktopTop: 0,
    desktopLeft: 777,
    rotation: 'rotate(11.18deg)'
  },
  {
    id: 'onboarding-workflow',
    src: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/28909fcb-7665-432a-8ab7-d51852046a22.png',
    alt: 'Onboarding workflow preview',
    width: 493,
    height: 250,
    desktopTop: 397,
    desktopLeft: 0,
    rotation: 'rotate(7.14deg)'
  },
  {
    id: 'safety-compliance-card',
    src: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/d1f8be99-edad-4990-9a87-735a9e4176df.png',
    alt: 'Safety compliance card preview',
    width: 492,
    height: 248,
    desktopTop: 394,
    desktopLeft: 802,
    rotation: 'rotate(-6.93deg)'
  },
  {
    id: 'site-access-management',
    src: 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/0a56265a-8ce9-459e-82bb-45786ff69482.png',
    alt: 'Site access management preview',
    width: 494,
    height: 252,
    desktopTop: 13,
    desktopLeft: 9,
    rotation: 'rotate(-7.5deg)'
  }
];

const dots = [
  {
    id: 'top-status-dot',
    desktopTop: 90,
    desktopLeft: 672,
    mobileTop: '89px',
    mobileLeft: '52%'
  },
  {
    id: 'left-status-dot',
    desktopTop: 330,
    desktopLeft: 300,
    mobileTop: '288px',
    mobileLeft: '21.6%'
  },
  {
    id: 'right-status-dot',
    desktopTop: 413,
    desktopLeft: 978,
    mobileTop: '324px',
    mobileLeft: '76.6%'
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
  return (
    <section className={`w-full overflow-x-hidden bg-transparent px-4 py-[60px] sm:px-6 sm:py-[80px] md:px-8 lg:px-0 lg:pt-[114px] lg:pb-[20px] ${className ?? ''}`.trim()} style={style} aria-labelledby="problem-heading">
      <div className="mx-auto w-full max-w-7xl min-w-0 lg:max-w-[1295px]">
        <div className="problem-stage relative mx-auto flex w-full min-w-0 flex-col items-center gap-8 md:gap-10 lg:block lg:h-[648px] lg:w-[1295px] lg:max-w-full lg:gap-0">
          <div aria-hidden="true" className="problem-ring-outer absolute left-1/2 top-12 h-[260px] w-[560px] -translate-x-1/2 sm:top-16 sm:h-[392px] sm:w-[736px] lg:left-[135px] lg:top-[92px] lg:h-[530px] lg:w-[994px] lg:translate-x-0" style={ringBaseStyle} />
          <div aria-hidden="true" className="problem-ring-inner absolute left-1/2 top-24 h-[190px] w-[410px] -translate-x-1/2 sm:top-[124px] sm:h-[300px] sm:w-[560px] lg:left-[264px] lg:top-[161px] lg:h-[392px] lg:w-[736px] lg:translate-x-0" style={ringBaseStyle} />

          {dots.map(dot => (
            <span key={dot.id} aria-hidden="true" className="absolute z-[5] lg:left-[var(--desktop-left)] lg:top-[var(--desktop-top)]" style={{
              ...dotBaseStyle,
              top: dot.mobileTop,
              left: dot.mobileLeft,
              '--desktop-left': `${dot.desktopLeft}px`,
              '--desktop-top': `${dot.desktopTop}px`
            }} />
          ))}

          <div className="problem-content relative z-20 order-1 flex w-full max-w-[566px] min-w-0 flex-col items-center pt-4 text-center sm:pt-10 lg:absolute lg:left-[365px] lg:top-[212px] lg:h-[224px] lg:w-[566px] lg:max-w-none lg:pt-0">
            <div className="mb-3 flex items-center gap-2">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/157eb921-dc81-455d-901f-44f166c35ca2.svg" alt="Alert symbol" className="h-5 w-5 shrink-0" />
              <span className="text-[15px] font-semibold uppercase leading-6 tracking-[0.05em] sm:text-base" style={{
                background: 'linear-gradient(180deg, #C12A15 0%, #F43A30 33%, #FF6868 69%, #83190A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: '"Google Sans Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
              }}>
                Sound familiar?
              </span>
            </div>

            <h2 id="problem-heading" className="m-0 max-w-full text-[30px] font-medium leading-[36px] tracking-[-0.9px] sm:max-w-[566px] sm:text-[42px] sm:leading-[50px] sm:tracking-[-1.26px] md:text-[44px] md:leading-[52px] lg:w-[566px] lg:text-[48px] lg:leading-[58px] lg:tracking-[-1.44px]" style={{
              color: '#072C2C',
              fontFamily: '"Inter Display", Inter, ui-sans-serif, system-ui, sans-serif'
            }}>
              <span className="hidden lg:inline">Getting on site shouldn't<br /> be this complicated</span>
              <span className="lg:hidden">Getting on site shouldn't be this complicated</span>
            </h2>

            <p className="m-0 mt-4 max-w-full text-base font-normal leading-7 sm:max-w-[340px] sm:text-[18px] sm:leading-7 lg:w-[340px]" style={{
              color: 'rgba(7, 44, 44, 0.7)',
              fontFamily: '"Inter Display", Inter, ui-sans-serif, system-ui, sans-serif'
            }}>
              You won the job. Now the client wants a pile of paperwork by Monday...
            </p>
          </div>

          <div className="relative z-10 order-2 grid w-full max-w-full min-w-0 grid-cols-1 gap-6 pb-1 sm:max-w-[760px] sm:grid-cols-2 sm:gap-6 md:gap-8 lg:block lg:max-w-none lg:gap-0 lg:pb-0">
            {floatingAssets.map(asset => (
              <figure key={asset.id} className="problem-floating-card relative m-0 w-full min-w-0 overflow-visible p-6 md:p-7 lg:absolute lg:left-[var(--desktop-left)] lg:top-[var(--desktop-top)] lg:w-[var(--asset-width)] lg:p-0" style={{
                '--desktop-left': `${asset.desktopLeft}px`,
                '--desktop-top': `${asset.desktopTop}px`,
                '--asset-width': `${asset.width}px`
              }}>
                <img src={asset.src} alt={asset.alt} className="block h-auto w-full max-w-full select-none" style={{
                  objectFit: 'contain',
                  transform: asset.rotation,
                  transformOrigin: 'center center'
                }} draggable={false} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ProblemSection.displayName = 'Group2147223442';