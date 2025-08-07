import React, { useState } from "react";
import VideoModal from "./VideoModal";
import "./VideoGallery.css";

const videos = [
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    title: "Dvir & Noa",
  },
  {
    id: "1",
    videoUrl:
      "https://www.dropbox.com/scl/fi/h7z88h2zrgz203bsergm2/N-D.mp4?rlkey=mwpb8p3pi9l4711x8hoxfvdfp&raw=1",
    thumbnail: "/images/dvir&noa.png",
    title: "Dvir & Noa",
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="video-gallery">
      {videos.map((video) => (
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
            <img src={video.thumbnail} alt={video.title} />
            <div className="play-button">▶</div>
          </div>
          {/* <p>{video.title}</p> */}
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
