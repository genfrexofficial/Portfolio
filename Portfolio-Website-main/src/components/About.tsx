import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          MBA candidate in Human Resources & Business Analytics with a solid BCA foundation. Experienced across business development, digital growth, SEO architecture, and talent operations. Proven track record with 6+ state and national case competition laurels, high-impact internship achievements at Home First Finance Company (HFFC), Magic Factory London, and Purezza Technologies. Seeking an HR internship-cum-placement opportunity to create measurable organizational impact.
        </p>

        {/* Interactive Stats Grid */}
        <div className="about-stats-grid">
          <div className="about-stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">National Case Laurels</span>
          </div>
          <div className="about-stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Live Client Platforms</span>
          </div>
          <div className="about-stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Industry Internships</span>
          </div>
          <div className="about-stat-item">
            <span className="stat-number">MBA '27</span>
            <span className="stat-label">HR & Analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
