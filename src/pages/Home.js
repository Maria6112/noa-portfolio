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
  const totalWords = title.split(" ").length;
  const lineAnimationDelay = (totalWords - 1) * 0.4 + 0.6;

  return (
    <section id="home" dir={currentLang === "he" ? "rtl" : "ltr"}>
      <div className="home-container">
        <div className="animation-wrapper">
          <h1 className="animation-title">
            {title.split(" ").map((word, i) => (
              <span
                key={i}
                className="word"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>

        <div
          className="vertical-line"
          style={{ animationDelay: `${lineAnimationDelay}s` }}
        ></div>
      </div>
    </section>
  );
};

export default Home;
