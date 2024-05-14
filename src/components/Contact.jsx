import React from "react";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Email from "../assets/gmail.png";

export default function Contact() {
  return (
    <div id="contact" className="section">
      <h2>Let's connect!</h2>
      <p>I want to work with you to make something amazing!</p>

      <div className="contact-quick-links">
        <ul>
          <li>
            <p>corrie.stroup@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className="contact-links">
        <a href="http://www.github.com/cililocwee" target="_blank">
          <img src={Github} alt="Github Link" className="contact-link bouncy" />
        </a>
        <a href="https://www.linkedin.com/in/corriestroup/" target="_blank">
          <img
            src={LinkedIn}
            alt="Linkedin Link"
            className="contact-link bouncy"
          />
        </a>
        <a href="mailto:corrie.stroup@gmail.com">
          <img src={Email} alt="Email Link" className="contact-link bouncy" />
        </a>
      </div>
    </div>
  );
}
