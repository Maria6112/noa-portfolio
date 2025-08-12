import React from "react";
import "./VideoGallery.css";

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <video src={videoUrl} controls autoPlay className="modal-video"></video>
      </div>
    </div>
  );
};

export default VideoModal;
