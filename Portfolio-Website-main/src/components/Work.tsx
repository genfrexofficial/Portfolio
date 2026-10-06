import { useState } from "react";
import "./styles/Work.css";
import Marquee from "react-fast-marquee";
import { FaExternalLinkAlt, FaGlobe, FaTrophy } from "react-icons/fa";

interface WebProject {
  title: string;
  category: string;
  tools: string;
  image?: string;
  link?: string;
  badge: string;
  badgeType: string;
  domain: string;
}

const liveWebProjects: WebProject[] = [
  {
    title: "Printz - App Landing Page",
    category: "WordPress Web Application",
    tools: "WordPress, MySQL, SEO, Responsive UI",
    image: "/images/live/printz_app.png",
    link: "https://printzapp.in/",
    badge: "Live Client App",
    badgeType: "blue",
    domain: "Product Landing Page",
  },
  {
    title: "Purezza Company Portfolio",
    category: "Corporate Brand Website",
    tools: "WordPress, Elementor, Custom CSS, MySQL",
    image: "/images/live/purezza_portfolio.png",
    link: "https://portfolio.purezzatechnologies.com/",
    badge: "Company Portal",
    badgeType: "blue",
    domain: "Corporate Presence",
  },
  {
    title: "Purezza CRM & Business Blog",
    category: "CRM & Content Engine",
    tools: "WordPress, SEO Architecture, Content Hub",
    image: "/images/live/purezza_crm_blog.png",
    link: "https://crm.purezzatechnologies.com",
    badge: "CRM Platform",
    badgeType: "blue",
    domain: "Lead Generation",
  },
  {
    title: "Buyzencart E-Commerce",
    category: "E-Commerce Multivendor Platform",
    tools: "WordPress, WooCommerce, Vendor Portal, MySQL",
    image: "/images/live/buyzencart.png",
    link: "https://buyzencart.com/",
    badge: "E-Commerce",
    badgeType: "gold",
    domain: "Multivendor Retail",
  },
  {
    title: "Magic Factory Remote Hiring",
    category: "Global Talent Platform",
    tools: "Technical SEO, SEMrush, Content Optimization",
    image: "/images/live/magicfactory.png",
    link: "https://magicfactory.tech/",
    badge: "Global Remote",
    badgeType: "blue",
    domain: "Talent Acquisition",
  },
  {
    title: "Met28 Online Learning",
    category: "EdTech Learning Portal",
    tools: "WordPress, Digital Marketing, SEO Strategy",
    image: "/images/live/met28_learning.png",
    link: "https://backup.met28.in/",
    badge: "EdTech Portal",
    badgeType: "blue",
    domain: "Digital Education",
  },
  {
    title: "Shyam Hathaliya Portfolio",
    category: "Personal Brand Portfolio",
    tools: "WordPress, Custom Layouts, Performance SEO",
    image: "/images/live/shyam_portfolio.png",
    link: "https://shyam.purezzatechnologies.com",
    badge: "Founder Portfolio",
    badgeType: "blue",
    domain: "Personal Branding",
  },
];

const laurelProjects: WebProject[] = [
  {
    title: "National Case Study",
    category: "1st Prize Winner • Bsmart",
    tools: "Strategic Case Analysis, Competitive Strategy, Market Assessment",
    badge: "1st Prize • 2026",
    badgeType: "gold",
    domain: "Strategic Management",
  },
  {
    title: "Brand Case Study",
    category: "1st Prize Winner • MKCE",
    tools: "Brand Strategy, Consumer Insights, Market Positioning",
    badge: "1st Prize • 2026",
    badgeType: "gold",
    domain: "Brand Architecture",
  },
  {
    title: "National Business Quiz",
    category: "1st Prize Winner • SRM Trichy",
    tools: "Corporate Strategy, Economics, Macro Analysis",
    badge: "1st Prize • 2026",
    badgeType: "gold",
    domain: "Business Acumen",
  },
  {
    title: "Product Launch Strategy",
    category: "1st Prize • K.S.R. College",
    tools: "Go-to-Market, Commercialization Roadmap, Value Proposition",
    badge: "1st Prize • 2024",
    badgeType: "gold",
    domain: "Product Marketing",
  },
  {
    title: "HFFC Loan Growth Network",
    category: "Business Development Intern",
    tools: "B2B Channel Partnerships, Verification, Client Management",
    badge: "Field Operations • 2026",
    badgeType: "blue",
    domain: "Financial Growth",
  },
  {
    title: "SEO Engine Architecture",
    category: "Magic Factory London (Remote)",
    tools: "Technical SEO, SEMrush, Ahrefs, Indexing Automation",
    badge: "Technical SEO • 2025",
    badgeType: "blue",
    domain: "Digital Optimization",
  },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState<"web" | "laurels">("web");

  const currentList = activeTab === "web" ? liveWebProjects : laurelProjects;

  return (
    <section className="work-section" id="work">
      <div className="work-header-container">
        <h2>
          Featured <span>Work & Laurels</span>
        </h2>
        <p className="work-subtitle">
          Real deployed web client solutions & national business competition laurels
        </p>

        {/* Tab Controls */}
        <div className="work-tab-controls">
          <button
            type="button"
            className={`work-tab-btn ${activeTab === "web" ? "active" : ""}`}
            onClick={() => setActiveTab("web")}
          >
            <FaGlobe /> Live Client Websites (7)
          </button>
          <button
            type="button"
            className={`work-tab-btn ${activeTab === "laurels" ? "active" : ""}`}
            onClick={() => setActiveTab("laurels")}
          >
            <FaTrophy /> Laurels & Case Studies (6)
          </button>
        </div>
      </div>

      <div className="work-marquee-wrapper">
        <Marquee
          key={activeTab}
          speed={40}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          autoFill={true}
          gradient={false}
          className="work-marquee-track"
        >
          {currentList.map((item, index) => (
            <div className={`work-card ${item.image ? "has-image" : ""}`} key={`${activeTab}-${index}`}>
              {item.image && (
                <div className="work-card-media">
                  <img src={item.image} alt={item.title} className="work-preview-img" />
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-visit-link"
                      title="Visit Live Site"
                    >
                      <span>Visit Live</span> <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              )}

              <div className="work-card-top">
                <div className="work-card-num">0{index + 1}</div>
                <span className={`work-card-badge badge-${item.badgeType}`}>
                  {item.badge}
                </span>
              </div>

              <div className="work-card-main">
                <span className="work-card-domain">{item.domain}</span>
                <h3 className="work-card-title">{item.title}</h3>
                <p className="work-card-org">{item.category}</p>
              </div>

              <div className="work-card-bottom">
                <span className="work-card-tools-label">Technologies & Focus:</span>
                <p className="work-card-tools">{item.tools}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Brand Collaborations Bar */}
      <div className="brand-collab-section">
        <p className="brand-collab-title">
          Collaborated with Brands to Enhance Digital Presence & Drive Business Growth
        </p>
        <div className="brand-collab-row">
          <div className="brand-logo-item">
            <img
              src="/images/live/clean_logo_purezza.png"
              alt="Purezza Technologies"
              className="brand-logo-img brand-logo-purezza"
            />
          </div>
          <div className="brand-logo-item">
            <img
              src="/images/live/clean_logo_buyzencart.png"
              alt="Buyzencart"
              className="brand-logo-img brand-logo-buyzen"
            />
          </div>
          <div className="brand-logo-item">
            <img
              src="/images/live/clean_logo_printzapp.svg"
              alt="Printzapp"
              className="brand-logo-img brand-logo-printz"
            />
          </div>
          <div className="brand-logo-item">
            <img
              src="/images/live/clean_logo_magicfactory.svg"
              alt="Magic Factory"
              className="brand-logo-img brand-logo-magic"
            />
          </div>
          <div className="brand-logo-item">
            <img
              src="/images/live/clean_logo_met28.png"
              alt="Mavevam Educational Trust (MET28)"
              className="brand-logo-img brand-logo-met"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
