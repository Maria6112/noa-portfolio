import React from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";

const Home = () => {
  const { i18n } = useTranslation();

  const titles = {
    en: "NOA STEFANIAN",
    he: "נעה סטפניאן",
  };

  const currentLang = i18n.language || "he";
  let title = titles[currentLang] || titles.he;

  // const lettersArray = currentLang === "he" ? [...title].reverse() : [...title];

  return (
    <section id="home" dir={currentLang === "he" ? "rtl" : "ltr"}>
      <div className="home-container">
        <div className="animation-title">
          <h1 className="animation-title">
            {title.split("").map((letter, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
          <div className="vertical-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
