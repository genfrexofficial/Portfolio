import { useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaCheck, FaCopy, FaEnvelope, FaPhone, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pspsdharshan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>Let's <span>Connect</span></h3>
          <p className="contact-subtitle">
            Open for HR leadership, business analytics, strategy consulting, and digital growth partnerships.
          </p>
        </div>

        <div className="contact-flex">
          {/* Box 1: Direct Contact */}
          <div className="contact-box direct-box">
            <h4>Direct Communications</h4>
            
            <div className="contact-channel-card">
              <div className="channel-icon">
                <FaEnvelope />
              </div>
              <div className="channel-details">
                <span className="channel-label">Email</span>
                <a href="mailto:pspsdharshan@gmail.com" data-cursor="disable" className="channel-link">
                  pspsdharshan@gmail.com
                </a>
              </div>
              <button
                type="button"
                className={`copy-btn ${copied ? "copied" : ""}`}
                onClick={handleCopyEmail}
                title="Copy Email to Clipboard"
              >
                {copied ? <><FaCheck /> Copied</> : <><FaCopy /> Copy</>}
              </button>
            </div>

            <div className="contact-channel-card">
              <div className="channel-icon">
                <FaPhone />
              </div>
              <div className="channel-details">
                <span className="channel-label">Phone & Call</span>
                <a href="tel:+919342915361" data-cursor="disable" className="channel-link">
                  +91 93429 15361
                </a>
              </div>
            </div>
          </div>

          {/* Box 2: Social Channels */}
          <div className="contact-box social-box">
            <h4>Social & Professional</h4>
            <div className="contact-social-grid">
              <a
                href="https://linkedin.com/in/dharshanselvaraj"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social-pill"
              >
                <span className="pill-icon linkedin"><FaLinkedinIn /></span>
                <span>LinkedIn</span>
                <MdArrowOutward className="pill-arrow" />
              </a>

              <a
                href="https://wa.me/9342915361"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social-pill"
              >
                <span className="pill-icon whatsapp"><FaWhatsapp /></span>
                <span>WhatsApp</span>
                <MdArrowOutward className="pill-arrow" />
              </a>

              <a
                href="https://www.instagram.com/d_h_a_r_s_h_a_n_x_x?igsh=aWNxNGYxc2J0OHRw"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social-pill"
              >
                <span className="pill-icon instagram"><FaInstagram /></span>
                <span>Instagram</span>
                <MdArrowOutward className="pill-arrow" />
              </a>
            </div>
          </div>

          {/* Box 3: Brand & Copyright */}
          <div className="contact-box info-box">
            <h2>
              HR & Business Analytics <br /> by <span>Dharshan Selvaraj</span>
            </h2>
            <p className="contact-role-desc">
              Transforming organizations through data-driven HR strategies, analytics, and high-performance digital architectures.
            </p>
            <h5>
              <MdCopyright /> 2026 • Karur, Tamil Nadu, India
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

