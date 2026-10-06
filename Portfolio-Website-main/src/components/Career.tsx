import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Development Intern</h4>
                <h5>Home First Finance Company (HFFC)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Generated home loan leads through referral partner networks, managed field client visits, coordinated documentation with branch teams, and strengthened relationship management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing & SEO Intern</h4>
                <h5>Magic Factory (London, Remote)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led technical and on-page SEO initiatives, automated repetitive optimization workflows, handled indexing and site health, and executed competitor keyword audits via SEMrush and Ahrefs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>WordPress & Digital Intern</h4>
                <h5>Purezza Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered and maintained responsive WordPress websites with Elementor, developed company portal and CRM blog, and executed SEO and lead generation campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
