import "./Hero.css";

function Hero() {
  return (
    <section className="section_hero">
      <div className="global-padding">
        <div className="container-regular">
          <div className="hero_content">
            <div className="hero_left">
              <div className="hero_badge">
                <span className="hero_badge-dot"></span>
                <span className="hero_badge-text">
                  Safety software built by operators, for operators
                </span>
              </div>
              <h1 className="hero_title">
                Get on site faster with safety software that doesn't suck.
              </h1>

              <p className="hero_description">
                Customised Risk assessments in 30 seconds and incidents logged
                by voice— so when the auditor shows up, you're already covered.
              </p>

              <div className="hero_actions">
                <button className="hero_cta">Book a demo</button>
                <button className="hero_arrow-btn">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="hero_visual">
            <img
              src="/src/assets/images/hero-mockup.png"
              alt="SiteSherpa dashboard"
              className="hero_image"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
