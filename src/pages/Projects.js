import React from "react";
import "./Home.css";
import "./Projects.css";
import VideoGallery from "../components/VideoGallery";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <div className="projects-container">
        <h1>{t("projects.title")}</h1>
        <VideoGallery />
      </div>
    </section>
  );
};

export default Projects;
