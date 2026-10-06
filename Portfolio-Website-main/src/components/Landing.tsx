import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        {/* Ambient floating glows */}
        <div className="landing-ambient-orb orb-1"></div>
        <div className="landing-ambient-orb orb-2"></div>

        <div className="landing-container">
          <div className="landing-intro">
            {/* Live Availability Badge */}
            <div className="landing-status-badge">
              <span className="status-ping"></span>
              <span className="status-text">Available for HR & Analytics Opportunities</span>
            </div>

            <h2>Hello! I'm</h2>
            <h1>
              DHARSHAN
              <br />
              <span className="text-shimmer">SELVARAJ</span>
            </h1>

            {/* Quick Action CTAs */}
            <div className="landing-cta-row">
              <a href="#work" className="landing-cta-btn primary-cta">
                <span>Explore Featured Work</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#credentials" className="landing-cta-btn secondary-cta">
                <span>View Credentials</span>
              </a>
            </div>
          </div>
          <div className="landing-info">
            <h3>Focused on</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">HR & Growth</div>
              <div className="landing-h2-2">Analytics</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Analytics</div>
              <div className="landing-h2-info-1">HR & Growth</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
