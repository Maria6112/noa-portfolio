import React from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";

const Home = () => {
  const { i18n } = useTranslation();

  const titles = {
    en: "Let's Make Beautifull Memories Together",
    he: " בואו ליצור איתנו זכרונות יפים ",
  };

  const currentLang = i18n.language || "he";
  let title = titles[currentLang] || titles.he;

  return (
    <section id="home" dir={currentLang === "he" ? "rtl" : "ltr"}>
      <div className="home-container">
        <div className="animation-title">
          <h1 className="animation-title">
            {/* {title.split("").map((letter, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                {letter === " " ? "\u00A0" : letter}
              </span> */}
            {title.split(" ").map((word, i) => (
              <span
                key={i}
                className="word"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {word}
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
