import React from "react";
import ProfilePicture from "../assets/profilepicture.jpg";
import IntroductionButtons from "./IntroductionButtons";

export default function Hero() {
  return (
    <div id="hero">
      <div id="headline">
        <h1>
          Modern problems <br /> require modern solutions!
        </h1>

        <h2>Hello there!</h2>
        <p>
          My name is Corrie and I'm a Full Stack Developer who specializes in
          general purpose web development and loves to get his hands dirty. From
          custom websites to WordPress, from optimizing your SEO to developing
          tools for your team, I've got you covered!
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
