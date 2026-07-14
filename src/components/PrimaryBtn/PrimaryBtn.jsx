import "./PrimaryBtn.css";

export default function PrimaryBtn({ href = "#", text, bg }) {
  return (
    <a href={href} className="primary-btn">
      
      <div className="primary-btn_text">
        {text}
      </div>

      <div className="primary-btn_icon">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" fill="none" stroke="currentColor" 
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>

    </a>
  );
}