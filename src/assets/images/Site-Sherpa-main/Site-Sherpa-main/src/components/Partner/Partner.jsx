import "./Partner.css";
import logo1 from "../../assets/images/Partner/Partner Logo (1).svg";
import logo2 from "../../assets/images/Partner/Partner Logo (2).svg";
import logo3 from "../../assets/images/Partner/Partner Logo (3).svg";
import logo4 from "../../assets/images/Partner/Partner Logo (4).svg";
import logo5 from "../../assets/images/Partner/Partner Logo (5).svg";
import logo6 from "../../assets/images/Partner/Partner Logo (6).svg";
import logo7 from "../../assets/images/Partner/Partner Logo (7).svg";
import logo8 from "../../assets/images/Partner/Partner Logo (8).svg";
import PartnerProfile from "../../assets/images/Partner/Partner Profile.png";

const logos = [
  { src: logo1, label: "Government of South Australia" },
  { src: logo2, label: "John Holland" },
  { src: logo3, label: "Fletcher Building" },
  { src: logo4, label: "Rio Tinto" },
  { src: logo5, label: "Adore Beauty" },
  { src: logo6, label: "Bayside City Council" },
  { src: logo7, label: "icare" },
  { src: logo8, label: "Boyne Smelters" },
];

function Partner() {
  return (
    <section className="partner_section">
      <div className="global-padding">
        <div className="container-regular">
          <div className="partner_header">
            <p className="partner_header-eyebrow">
              Trusted by industry leaders just like you
            </p>
          </div>

          <div className="partner_shell">
            <article className="partner_quote-card">
              <p className="partner_quote-text">
                “We needed to align with the new Aged Care Quality Standards, and
                SiteSherpa made the process seamless.”
              </p>

              <div className="partner_quote-author">
                <span className="partner_author-avatar">
                  <img src={PartnerProfile} alt="David Henricks" />
                </span>
                <div>
                  <p className="partner_author-name">David Henricks</p>
                  <p className="partner_author-role">National Retail Operations Lead</p>
                </div>
              </div>
            </article>

            <div className="partner_logo-grid" role="list">
              {logos.map((logo) => (
                <div key={logo.label} className="partner_logo-card" role="listitem">
                  <img src={logo.src} alt={logo.label} className="partner_logo-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
