import React from "react";
import { useTranslation } from "react-i18next";
import "./Shorts.css";

const Shorts = () => {
  const { t, i18n } = useTranslation();

  const videoTitles =
    i18n.language === "he"
      ? ["תמה | יאיר", " הלל | אלי", "אבישי | אילהה", "ספיר | אילה"]
      : ["T | Y", "H | E", "A | A", "S | E"];
  const tiktokVideos = [
    {
      id: "7576210667137518868",
      title: videoTitles[2],
    },
    {
      id: "7568750850852539669",
      title: videoTitles[0],
    },
    {
      id: "7586244486888459541",
      title: videoTitles[1],
    },

    {
      id: "7583626496154094868",
      title: videoTitles[3],
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
