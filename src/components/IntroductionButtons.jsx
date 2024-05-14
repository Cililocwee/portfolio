import React from "react";

export default function IntroductionButtons() {
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div id="introduction-buttons">
      <button className="button-30" onClick={scrollToBottom}>
        Get in touch
      </button>
    </div>
  );
}
