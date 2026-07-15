import "./Partner.css";
import { 
    logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  PartnerProfile
} from "../../assets/images";

const logos = [
  { src: logo3, label: "Fletcher Building", width: "171px" },
  { src: logo4, label: "Rio Tinto", width: "120px" },
  { src: logo5, label: "Adore Beauty", width: "120px" },
  { src: logo6, label: "Bayside City Council" },
  { src: logo7, label: "icare", width: "191px" },
  { src: logo8, label: "Boyne Smelters", width: "175px" },
  { src: logo1, label: "Government of South Australia" },
  { src: logo2, label: "John Holland" },
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
                "Risk assessments used to eat half a day. Now they're done in minutes and actually read like someone who knows the site wrote them."
              </p>

              <div className="partner_quote-author">
                <span className="partner_author-avatar">
                  <img src={PartnerProfile} alt="David Henricks" />
                </span>
                <div>
                  <p className="partner_author-name">HSEQ Manager</p>
                  <p className="partner_author-role">Construction Industry</p>
                </div>
              </div>
            </article>

            <div className="partner_logo-grid" role="list">
              {logos.map((logo) => (
                <div key={logo.label} className="partner_logo-card" role="listitem">
                  <img 
                    className="partner_logo-image" 
                    style={{ maxWidth: logo.width || "120px" }}
                    src={logo.src} 
                    alt={logo.label} 
                  />
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