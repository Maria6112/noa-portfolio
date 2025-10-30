import React from "react";
import "./Projects.css";
import VideoGallery from "../components/VideoGallery";
import { useTranslation } from "react-i18next";
import "./Home.css";
import { ReactComponent as TitleSVG_HE } from "../styles/font1.svg";
import { ReactComponent as TitleSVG_EN } from "../styles/font.svg";

const Home = () => {
  const { i18n, t } = useTranslation();

  const titles = {
    en: "Your story",
    he: " הסיפור שלכם ",
  };

  const currentLang = i18n.language || "he";
  let title = titles[currentLang] || titles.he;
  const totalWords = title.split(" ").length;
  const lineAnimationDelay = (totalWords - 1) * 0.4 + 0.6;

  const TitleSVG = currentLang === "he" ? TitleSVG_HE : TitleSVG_EN;

  return (
    <div>
      {/* --- Home Section --- */}
      <section id="home" dir={currentLang === "he" ? "rtl" : "ltr"}>
        <div className="home-container background-section">
          {/* <div className="animation-wrapper">
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
          </div> */}
          <div className="animation-wrapper">
            <div className="svg-title">
              <TitleSVG className="animated-svg" />
            </div>
          </div>
          <div
            className="vertical-line"
            style={{ animationDelay: `${lineAnimationDelay}s` }}
          ></div>
        </div>
      </section>
      {/* --- Projects Section --- */}
      <section id="projects">
        <div className="projects-container">
          {/* <h1>{t("projects.title")}</h1> */}
          <VideoGallery />
        </div>
      </section>
    </div>
  );
};

export default Home;
