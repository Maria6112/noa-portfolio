import React from "react";
import "./About.css";
// import photo from "/images/neom.jpg";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language || "he";

  return (
    <div className="about">
      <div className={`about-me-container ${isHebrew ? "he" : "en"}`}>
        <div
          className="about-me-text"
          data-aos={isHebrew ? "fade-left" : "fade-right"}
        >
          <h2>{t("about.title")}</h2>
          <p> {t("about.text1")}</p>
          <p> {t("about.text2")}</p>
        </div>
        <div
          className="about-me-photo"
          data-aos={isHebrew ? "fade-right" : "fade-left"}
        >
          <img src="/images/neom.jpg" alt="About me" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
