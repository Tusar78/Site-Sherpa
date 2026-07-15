import React from 'react';
import './Testimonials.css';
import {testiLogoOne,
  testiLogoTwo,
  testiLogoThree,
  testiLogoFour,
  testiLogoFive,
  testiProfilePicOne,
  testiProfilePicTwo} from "../../assets/images"

const companyLogoA = testiLogoThree;
const companyLogoB = testiLogoTwo;
const companyLogoC = testiLogoOne;
const companyLogoD = testiLogoFive;
const statLogoB = testiLogoFour;
const portraitA = testiProfilePicTwo;
const portraitD = testiProfilePicOne;

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
              quote="““Transitioning to Crossover streamlined our workflow. The intuitive design and powerful capabilities have transformed our operations entirely.””"
              name="Jordan Lee"
              role="/ Product Manager at Sailwind"
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