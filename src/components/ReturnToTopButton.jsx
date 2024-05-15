import React from "react";
import ReturnToTop from "../assets/returntotop.svg";

export default function ReturnToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <img
      src={ReturnToTop}
      alt="return"
      id="return-to-top"
      onClick={scrollToTop}
    />
  );
}
