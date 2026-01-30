import React from "react";
import { useTranslation } from "react-i18next";
import "./Shorts.css";

const Shorts = () => {
  const { t } = useTranslation();

  const translations = {
    en: {
      videos: [
        { title: "T | Y" },
        { title: "H | E" },
        { title: "A | A" },
        { title: "S | I" },
        { title: "S | E" },
      ],
    },
    he: {
      videos: [
        { title: "תמה | יאיר" },
        { title: " הלל | אלי" },
        { title: "אבישי | אילהה" },
        { title: "שובל אביגיל | יצחק" },
        { title: "ספיר | אילה" },
      ],
    },
  };
  const tiktokVideos = [
    {
      id: "7568750850852539669",
      title: "תמה | יאיר",
    },
    {
      id: "7586244486888459541",
      title: " הלל | אלי",
    },
    {
      id: "7576210667137518868",
      title: "אבישי | אילהה",
    },
    {
      id: "7583626496154094868",
      title: "ספיר | אילה",
    },
  ];
  return (
    <div className="shorts-container">
      <h1>{t("shorts.shortsh1")}</h1>
      {/* <p className="shorts-subtitle">Check out my latest development shorts!</p> */}
      <div className="shorts-section">
        {tiktokVideos.map((video) => (
          <div key={video.id} className="shorts-card">
            {/* ✅ IFRAME — работает без ошибок */}
            <div className="tiktok-embed-container">
              <iframe
                src={`https://www.tiktok.com/embed/v2/${video.id}?autoplay=0&muted=1&loop=0`}
                allowFullScreen
                scrolling="no"
                allow="encrypted-media; fullscreen"
                className="tiktok-iframe"
                title={video.title}
              />
            </div>
            <div className="shorts-title">{video.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shorts;
