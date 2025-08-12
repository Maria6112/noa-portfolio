import React, { useState, useEffect } from "react";
// import VideoModal from "./VideoModal";
import "./VideoGallery.css";

const translations = {
  en: {
    videos: [
      { title: "Dvir & Noa" },
      { title: "Wedding Highlights" },
      { title: "Beach Memories" },
      { title: "Beach Memories" },
      { title: "Beach Memories" },
      { title: "Beach Memories" },
      { title: "Beach Memories" },
      { title: "Beach Memories" },
      { title: "Beach Memories" },
      { title: "Beach Memories" },
    ],
  },
  he: {
    videos: [
      { title: "דביר ונועה" },
      { title: "רגעים מהחתונה" },
      { title: "זכרונות מהחוף" },
      { title: "זכרונות מהחוף" },
      { title: "זכרונות מהחוף" },
      { title: "זכרונות מהחוף" },
      { title: "זכרונות מהחוף" },
      { title: "זכרונות מהחוף" },
      { title: "זכרונות מהחוף" },
      { title: "זכרונות מהחוף" },
    ],
  },
};

const videoSources = [
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "2",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "3",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "4",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "5",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "6",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "7",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "8",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "9",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
];

const VideoGallery = () => {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    // Получаем язык из html атрибута lang
    const htmlLang = document.documentElement.lang || "en";
    setLang(htmlLang);
  }, []);

  return (
    <div className="video-gallery ">
      {videoSources.map((video, index) => (
        <div className="video-card">
          <div className="video-wrapper">
            <video
              key={video.id}
              src={video.videoUrl}
              poster={video.thumbnail}
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
