import { useState } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <div className="whatIDO" id="what-i-do">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          
          {/* Card 1: HR & Talent */}
          <div
            className={`what-content ${activeCard === 0 ? "what-content-active" : ""}`}
            onClick={() => setActiveCard(0)}
            onMouseEnter={() => setActiveCard(0)}
          >
            <div className="what-corner"></div>
            <div className="what-arrow"></div>

            <div className="what-content-in">
              <h3>HR & TALENT</h3>
              <h4>Domain Focus</h4>
              <p>
                Focus on modern talent management, candidate screening, employee engagement, operations, and analytical workforce decision systems.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Recruitment</div>
                <div className="what-tags">Candidate Screening</div>
                <div className="what-tags">HR Analytics</div>
                <div className="what-tags">Employee Engagement</div>
                <div className="what-tags">HR Operations</div>
                <div className="what-tags">Coordination</div>
                <div className="what-tags">Performance Tracking</div>
                <div className="what-tags">Team Culture</div>
              </div>
            </div>
          </div>

          {/* Card 2: Analytics & Growth */}
          <div
            className={`what-content ${activeCard === 1 ? "what-content-active" : ""}`}
            onClick={() => setActiveCard(1)}
            onMouseEnter={() => setActiveCard(1)}
          >
            <div className="what-corner"></div>
            <div className="what-arrow"></div>

            <div className="what-content-in">
              <h3>ANALYTICS & GROWTH</h3>
              <h4>Domain Focus</h4>
              <p>
                Driving strategic business development, market intelligence, customer acquisition, SEO engineering, and digital optimization infrastructure.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Business Development</div>
                <div className="what-tags">Lead Generation</div>
                <div className="what-tags">Market Research</div>
                <div className="what-tags">SEO Architecture</div>
                <div className="what-tags">Google Analytics</div>
                <div className="what-tags">SEMrush</div>
                <div className="what-tags">Ahrefs</div>
                <div className="what-tags">WordPress</div>
                <div className="what-tags">CRM Tools</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
