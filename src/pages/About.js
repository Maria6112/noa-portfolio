import React from "react";
import "./About.css";
// import photo from "/images/neom.jpg";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about-me-container">
        <div className="about-me-text">
          <h2>{t("about.title")}</h2>
          <p> {t("about.text1")}</p>
          <p> {t("about.text2")}</p>
        </div>
        <div className="about-me-photo">
          <img src="/images/neom.jpg" alt="About me" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
