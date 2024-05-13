import React from "react";

export default function ReturnToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button id="return-to-top" onClick={scrollToTop}>
      Top
    </button>
  );
}
