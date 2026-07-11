import React from 'react';
import './Testimonials.css';

const companyLogoA = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/73e3c362-49c0-4acb-9ff1-a0142eb97d69.svg';
const companyLogoB = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/2b7c90ab-5724-4d25-a57f-6036ac68c5e6.svg';
const companyLogoC = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/afffddac-0eef-4b29-98db-e0fde618dab9.svg';
const companyLogoD = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/5219cc1b-bf9a-411b-a753-7838968651bc.svg';
const statLogoB = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/d6600e8a-6d59-450e-8fc8-e3923bbc5bee.svg';
const portraitA = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/17e32877-9dee-4193-a7ac-4a7b844b71dc.png';
const portraitD = 'https://storage.googleapis.com/storage.magicpath.ai/user/378565768339677184/figma-assets/db86a9fd-8047-4507-876e-7992a8161257.png';

function TestimonialCard({ logo, quote, name, role, image, logoClass = 'testimonials__logo--default' }) {
  const isFeatured = !!image;

  return (
    <article className={`testimonials__card ${isFeatured ? 'testimonials__card--featured' : 'testimonials__card--plain'}`}>
      <div className="testimonials__card-content">
        <div className="testimonials__quote-group">
          <img src={logo} alt={`${name} company logo`} className={`testimonials__logo ${logoClass}`} />
          <blockquote className="testimonials__quote">
            <p><span>{quote}</span></p>
          </blockquote>
        </div>
        <footer className="testimonials__person">
          <p className="testimonials__name">
            <span>{name}</span>
          </p>
          <p className="testimonials__role">
            <span>{role}</span>
          </p>
        </footer>
      </div>

      {isFeatured && (
        <>
          <img src={image} alt={`${name} workspace context`} className="testimonials__image testimonials__image--mobile" />
          <div className="testimonials__desktop-media">
            <img src={image} alt={`${name} workspace context`} className="testimonials__desktop-image" />
          </div>
        </>
      )}
    </article>
  );
}

export function Testimonials({ className = '' }) {
  return (
    <section aria-labelledby="testimonials-heading" className={`testimonials ${className}`.trim()}>
      <div className="testimonials__container">
        <header className="testimonials__header">
          <h1 id="testimonials-heading" className="testimonials__title">Trusted by others just like you</h1>
        </header>

        <div className="testimonials__rows">
          <div className="testimonials__row testimonials__row--top">
            <TestimonialCard
              logo={companyLogoA}
              logoClass="testimonials__logo--a"
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
              logoClass="testimonials__logo--c"
              quote="“Transitioning to Crossover streamlined our workflow. The intuitive design and powerful capabilities have transformed our operations entirely.”"
              name="Jordan Lee"
              role="Product Manager at Sailwind"
            />
          </div>

          <div className="testimonials__row testimonials__row--bottom">
            <article className="testimonials__metric-card">
              <div className="testimonials__metric-copy">
                <p className="testimonials__metric-value">
                  <span>1000hr</span>
                </p>
                <p className="testimonials__metric-label">
                  <span>SAVED WORKING ON SITE</span>
                </p>
              </div>
              <img src={companyLogoC} alt="Customer logo for saved hours result" className="testimonials__metric-logo testimonials__metric-logo--primary" />
            </article>

            <article className="testimonials__metric-card">
              <div className="testimonials__metric-copy">
                <p className="testimonials__metric-value">
                  <span>10X</span>
                </p>
                <p className="testimonials__metric-label">
                  <span>REDUCE WORKER RISK ASSESSMENT</span>
                </p>
              </div>
              <img src={statLogoB} alt="Customer logo for risk reduction result" className="testimonials__metric-logo testimonials__metric-logo--secondary" />
            </article>

            <TestimonialCard
              logo={companyLogoD}
              logoClass="testimonials__logo--d"
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