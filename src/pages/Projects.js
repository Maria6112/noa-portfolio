import React from "react";
import "./Home.css";
import "./Projects.css";
import VideoGallery from "../components/VideoGallery";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <h1>MY PROJECTS</h1>
        <VideoGallery />
      </div>
    </section>
  );
};

export default Projects;
