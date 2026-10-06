import "./styles/TechStack.css";

const TechStack = () => {
  return (
    <section className="credentials-section" id="credentials">
      <div className="credentials-header">
        <h2>
          Education <span>&</span> Credentials
        </h2>
        <p>
          Academic foundation in Business Analytics & HR, coupled with recognized national laurels and certified domain specializations.
        </p>
      </div>

      <div className="credentials-grid">
        {/* CARD 1: EDUCATION */}
        <div className="credential-card">
          <div className="card-top">
            <div className="card-icon edu-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h3>Education</h3>
          </div>

          <div className="card-items-list">
            {/* Degree 1 */}
            <div className="edu-item">
              <div className="edu-header-row">
                <h4>Master of Business Administration (MBA)</h4>
                <span className="edu-year-badge">2025 – 2027</span>
              </div>
              <p className="edu-college">
                Business Analytics & HR • M. Kumarasamy College of Engineering, Karur
              </p>
            </div>

            {/* Degree 2 */}
            <div className="edu-item">
              <div className="edu-header-row">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <span className="edu-year-badge">2022 – 2025</span>
              </div>
              <p className="edu-college">
                K.S. Rangasamy College of Arts and Science
              </p>
              <span className="edu-score-badge">CGPA: 7.1</span>
            </div>

            {/* Degree 3 */}
            <div className="edu-item">
              <div className="edu-header-row">
                <h4>Higher Secondary Certificate</h4>
                <span className="edu-year-badge">2020 – 2022</span>
              </div>
              <p className="edu-college">
                Commerce Stream • Cheran Matric Higher Secondary School
              </p>
              <span className="edu-score-badge">88.5%</span>
            </div>
          </div>
        </div>

        {/* CARD 2: ACHIEVEMENTS */}
        <div className="credential-card">
          <div className="card-top">
            <div className="card-icon achieve-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                <path d="M4 22h16"/>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
              </svg>
            </div>
            <h3>Achievements</h3>
          </div>

          <div className="card-items-list">
            {/* Achievement 1 */}
            <div className="achieve-item">
              <span className="prize-pill prize-1st">1st Prize</span>
              <div className="achieve-text">
                <p className="achieve-name">National Level Case Study Competition</p>
                <p className="achieve-meta">Bsmart (2026)</p>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="achieve-item">
              <span className="prize-pill prize-1st">1st Prize</span>
              <div className="achieve-text">
                <p className="achieve-name">Brand Case Study Competition</p>
                <p className="achieve-meta">M. Kumarasamy College of Engineering (2026)</p>
              </div>
            </div>

            {/* Achievement 3 */}
            <div className="achieve-item">
              <span className="prize-pill prize-1st">1st Prize</span>
              <div className="achieve-text">
                <p className="achieve-name">Business Quiz Competition</p>
                <p className="achieve-meta">SRM College, Trichy (2026)</p>
              </div>
            </div>

            {/* Achievement 4 */}
            <div className="achieve-item">
              <span className="prize-pill prize-1st">1st Prize</span>
              <div className="achieve-text">
                <p className="achieve-name">Product Launch Business Strategy</p>
                <p className="achieve-meta">K.S.R. College (2024)</p>
              </div>
            </div>

            {/* Achievement 5 */}
            <div className="achieve-item">
              <span className="prize-pill prize-2nd">2nd Prize</span>
              <div className="achieve-text">
                <p className="achieve-name">Business Plan Competition</p>
                <p className="achieve-meta">K.S.R. College (2024)</p>
              </div>
            </div>

            {/* Achievement 6 */}
            <div className="achieve-item">
              <span className="prize-pill prize-2nd">2nd Prize</span>
              <div className="achieve-text">
                <p className="achieve-name">Business Quiz Competition</p>
                <p className="achieve-meta">Sengunthar Engineering College (2025)</p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: CERTIFICATIONS */}
        <div className="credential-card">
          <div className="card-top">
            <div className="card-icon cert-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15l-2 5l4-2l4 2l-2-5"/>
                <circle cx="12" cy="8" r="6"/>
              </svg>
            </div>
            <h3>Certifications</h3>
          </div>

          <div className="card-items-list">
            {/* Cert 1 */}
            <div className="cert-item">
              <div className="cert-header">
                <h4>Fundamentals of Digital Marketing</h4>
                <span className="cert-badge cert-badge-elite">Elite • 85%</span>
              </div>
              <p className="cert-org">NPTEL / IIT Kharagpur (2026)</p>
            </div>

            {/* Cert 2 */}
            <div className="cert-item">
              <div className="cert-header">
                <h4>Value Added Course on GST & IT Return Filing</h4>
                <span className="cert-badge cert-badge-govt">Certified</span>
              </div>
              <p className="cert-org">EDII-TN, Government of Tamil Nadu (2026)</p>
            </div>

            {/* Cert 3 */}
            <div className="cert-item">
              <div className="cert-header">
                <h4>National Workshop on IPR & IP Management</h4>
                <span className="cert-badge cert-badge-ws">For Startups</span>
              </div>
              <p className="cert-org">K.S. Rangasamy College (2024)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
