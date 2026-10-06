import {
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaInstagram,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" id="social">
        <span>
          <a
            href="https://linkedin.com/in/dharshanselvaraj"
            target="_blank"
            title="LinkedIn"
            data-cursor="disable"
            className="social-link social-link-linkedin"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href="https://wa.me/9342915361"
            target="_blank"
            title="WhatsApp"
            data-cursor="disable"
            className="social-link social-link-whatsapp"
          >
            <FaWhatsapp />
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/d_h_a_r_s_h_a_n_x_x?igsh=aWNxNGYxc2J0OHRw"
            target="_blank"
            title="Instagram"
            data-cursor="disable"
            className="social-link social-link-instagram"
          >
            <FaInstagram />
          </a>
        </span>
        <span>
          <a
            href="mailto:pspsdharshan@gmail.com"
            title="Email"
            data-cursor="disable"
            className="social-link social-link-email"
          >
            <FaEnvelope />
          </a>
        </span>
        <span>
          <a
            href="tel:+919342915361"
            title="Call"
            data-cursor="disable"
            className="social-link social-link-phone"
          >
            <FaPhone />
          </a>
        </span>
      </div>
      <a className="resume-button" href="mailto:pspsdharshan@gmail.com?subject=Resume%20Request">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
