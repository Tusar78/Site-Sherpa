import "./Challenge.css";
import challengeBg from "../../assets/images/Challenge/challenge-bg.svg";
import alertIcon from "../../assets/images/Challenge/circle-alert.svg";
import floatOne from "../../assets/images/Challenge/challenge (1).svg";
import floatTwo from "../../assets/images/Challenge/challenge (2).svg";
import floatThree from "../../assets/images/Challenge/challenge (3).svg";
import floatFour from "../../assets/images/Challenge/challenge (4).svg";

function Challenge() {
  return (
    <section className="challenge_section">
      <div className="challenge_frame">
        <div className="challenge_inner">
          <div className="challenge_header">
            <span className="challenge_label">
              <img src={alertIcon} alt="Alert" className="challenge_label-icon" />
              <span className="challenge_label-text">Sound familiar?</span>
            </span>
            <h2 className="challenge_header-title">
              Getting on site shouldn't be this complicated
            </h2>
            <p className="challenge_header-text">
              You won the job. Now the client wants a pile of paperwork by Monday…
            </p>
          </div>
        </div>

        <div className="challenge_overlays" aria-hidden="true">
          <img src={floatOne} alt="" className="challenge_float challenge_float-top-left" />
          <img src={floatTwo} alt="" className="challenge_float challenge_float-top-right" />
          <img src={floatThree} alt="" className="challenge_float challenge_float-bottom-left" />
          <img src={floatFour} alt="" className="challenge_float challenge_float-bottom-right" />
        </div>
      </div>
    </section>
  );
}

export default Challenge;
