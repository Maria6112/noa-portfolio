import React from "react";
import "./VideoGallery.css";

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        {/* <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Vimeo Video"
        ></iframe> */}
        <video src={videoUrl} controls autoPlay className="modal-video"></video>
      </div>
    </div>
  );
};

export default VideoModal;
