import React from "react";
import ProfilePicture from "../assets/profilepicture.jpg";
import IntroductionButtons from "./IntroductionButtons";
// import "./components.css";

export default function Hero() {
  return (
    <div id="hero">
      <div id="headline">
        <h1>
          Making momentum <br /> Building solutions <br /> Reaching new users
        </h1>

        <h2>Hey there, I'm Corrie!</h2>
        <p>
          I'm a Full Stack Developer based in Vietnam. I specialize in
          distilling your particular needs and producing quick results that get
          your business noticed. From custom websites to applications, from
          optimizing your SEO to updating legacy code, I've got you covered.
        </p>
        <IntroductionButtons />
      </div>

      <div id="profile-picture">
        <small>
          Freelance Full Stack Developer <br />& Software Engineer
        </small>
        <img src={ProfilePicture} alt="Corrie Stroup" />
      </div>
    </div>
  );
}
