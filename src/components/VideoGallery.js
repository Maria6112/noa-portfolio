import React, { useState, useEffect } from "react";
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
      { title: "דביר | נועה" },
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
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    // thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "2",
    videoUrl:
      "https://www.dropbox.com/scl/fi/yu7ksilmwacgcdtnljn6b/04.12.24.mp4?rlkey=rz0813nocvcgnb1mi2t0sslmf&e=1&st=kwi2wc5j&raw=1",
  },
  {
    id: "3",
    videoUrl:
      "https://www.dropbox.com/scl/fi/2rundd75ngvguz8vtelez/.mp4?rlkey=txkhhsa2zqjcmecdtj4oio492&st=y7u9umov&raw=1",
  },
  {
    id: "4",
    videoUrl:
      "https://www.dropbox.com/scl/fi/t5oo7ql576x8zsiuclv05/.mp4?rlkey=6flplhuxubizo4sfmo6ho3ha5&st=n5nto0qp&raw=1",
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

  return (
    <div className="video-gallery ">
      {videoSources.map((video, index) => (
        <div className="video-card">
          <div className="video-wrapper">
            <video
              key={video.id}
              src={video.videoUrl}
              // poster={video.thumbnail}
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              preload="metadata"
              className="video-full"
            ></video>
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
