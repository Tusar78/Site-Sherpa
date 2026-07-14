import "./Partner.css";
import logo1 from "../../assets/images/Partner/Partner Logo (1).webp";
import logo2 from "../../assets/images/Partner/Partner Logo (2).webp";
import logo3 from "../../assets/images/Partner/Partner Logo (3).webp";
import logo4 from "../../assets/images/Partner/Partner Logo (4).webp";
import logo5 from "../../assets/images/Partner/Partner Logo (5).webp";
import logo6 from "../../assets/images/Partner/Partner Logo (6).webp";
import logo7 from "../../assets/images/Partner/Partner Logo (7).webp";
import logo8 from "../../assets/images/Partner/Partner Logo (8).webp";
import PartnerProfile from "../../assets/images/Partner/Partner Profile.png";

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
                  {/* Tailwind-এর ডাইনামিক ক্লাস কাজ করে না বলে ইনলাইন স্টাইল দিয়ে maxWidth সেট করা হয়েছে */}
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