import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => (
  <>
    <div className="footer">
      <a
        href="mailto:cameron.wills89@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Email"
          className="footer-img"
          src={require("../../assets/icons/email.png")}
        />
      </a>

      <a
        href="https://github.com/CamWills89"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Github"
          className="footer-img"
          src={require("../../assets/icons/github2.png")}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/cameronwills89/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="LinkedIn"
          className="footer-img"
          src={require("../../assets/icons/linkedin4.png")}
        />
      </a>
      <a href="tel:512.940.3380" target="_blank" rel="noopener noreferrer">
        <img
          alt="Telephone"
          className="footer-img"
          src={require("../../assets/icons/phone.png")}
        />
      </a>
    </div>
  </>
);

export default Footer;
