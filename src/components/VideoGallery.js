import React, { useState } from "react";
// import VideoModal from "./VideoModal";
import { useTranslation } from "react-i18next";

import "./VideoGallery.css";

const translations = {
  en: {
    videos: [
      { title: "N | D" },
      { title: "M | Y" },
      { title: "O | R" },
      { title: "A | I" },
      { title: "Beach Memories" },
    ],
  },
  he: {
    videos: [
      { title: "נעה | דביר" },
      { title: "מיכל | יהודה" },
      { title: "רוני | עוז" },
      { title: "שובל אביגיל | יצחק" },
      { title: "זכרונות מהחוף" },
    ],
  },
};

const videoSources = [
  {
    id: "1",
    type: "youtube",
    videoUrl: "https://www.youtube.com/embed/Gt1yMuvcAf4?si=kaXBZ7Pbf1LwdHEy",
    thumbnail: "/images/dvir&noa1.png",
  },
  {
    id: "2",
    type: "youtube",
    videoUrl: "https://www.youtube.com/embed/LXNrhIHoOJs?si=NhPDPRtX3V-RlDnl",
    thumbnail: "/images/M&Y.png",
  },
  {
    id: "3",
    type: "youtube",
    videoUrl: "https://www.youtube.com/embed/zzoBI8gHyeQ?si=Q2I_VC3TOE5IEPWU",
    thumbnail: "/images/roni&oz.jpg",
  },
  {
    id: "4",
    type: "youtube",
    videoUrl: "https://www.youtube.com/embed/qA21dZoZ1Cg?si=MuTxb4nq3r0tW1Vy",
    thumbnail: "/images/sh&i.png",
  },
  // {
  //   id: "5",
  //   videoUrl:
  //     "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
  //   thumbnail: "/images/dvir&noa.png",
  //   // title: "Dvir & Noa",
  // },
];

const VideoGallery = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <div className="video-gallery ">
      {videoSources.map((video, index) => (
        <div className="video-card" key={video.id}>
          <div className="video-wrapper">
            {playingVideo === video.id ? (
              // Показываем iframe только после клика
              <iframe
                src={`${video.videoUrl}&autoplay=1`}
                width="560"
                height="315"
                title={`YouTube video ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              // Показываем заставку
              <div
                className="video-thumbnail"
                onClick={() => setPlayingVideo(video.id)}
              >
                <img src={video.thumbnail} alt="Video thumbnail" />
                <div className="play-button">▶</div>
              </div>
            )}
          </div>

          <div className="video-title-box">
            {translations[lang].videos[index].title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
