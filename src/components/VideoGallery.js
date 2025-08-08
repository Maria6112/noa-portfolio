import React, { useState, useEffect } from "react";
import VideoModal from "./VideoModal";
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
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    // title: "Dvir & Noa",
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lang, setLang] = useState("en");
  useEffect(() => {
    // Получаем язык из html атрибута lang
    const htmlLang = document.documentElement.lang || "en";
    setLang(htmlLang);
  }, []);

  return (
    <div className="video-gallery ">
      {videoSources.map((video, index) => (
        <div
          key={video.id}
          className="video-card"
          onClick={() => setSelectedVideo(video.videoUrl)}
        >
          {/* <iframe
            src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=0&background=1`}
            // src={`https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&st=0x4djuuz&dl=0 `}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={video.title}
          ></iframe> */}
          {/* <video
            src={video.videoUrl}
            muted
            preload="metadata"
            className="video-preview"
          ></video> */}
          <div className="video-thumbnail">
            <img
              src={video.thumbnail}
              alt={translations[lang].videos[index].title}
            />
            <div className="play-button">▶</div>
          </div>
          <p>{translations[lang].videos[index].title}</p>
        </div>
      ))}

      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default VideoGallery;
