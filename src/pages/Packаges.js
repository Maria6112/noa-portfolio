import React from "react";
import "./Packages.css";
import { useTranslation } from "react-i18next";

const Packages = () => {
  const { t } = useTranslation();

  return (
    <div className="packages-container">
      <section className="package-section" data-aos="fade-up">
        <h1>{t("packages.wedding")}</h1>
        <div className="package-card" data-aos="zoom-in" data-aos-delay="100">
          <h2>{t("packages.basic")}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="package-card" data-aos="zoom-in" data-aos-delay="200">
          <h2>{t("packages.premium")}</h2>
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          </p>
        </div>
        <div className="package-card" data-aos="zoom-in" data-aos-delay="300">
          <h2>{t("packages.luxury")}</h2>
          <p>
            Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero.
          </p>
        </div>
      </section>

      {/* <section className="package-section" data-aos="fade-up">
        <h1>{t("packages.business")}</h1>
        <div className="package-card" data-aos="zoom-in" data-aos-delay="100">
          <h2>{t("packages.starter")}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="package-card" data-aos="zoom-in" data-aos-delay="200">
          <h2>{t("packages.pro")}</h2>
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          </p>
        </div>
        <div className="package-card" data-aos="zoom-in" data-aos-delay="300">
          <h2>{t("packages.enterprise")}</h2>
          <p>
            Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero.
          </p>
        </div>
      </section>

      <section className="package-section" data-aos="fade-up">
        <h1>{t("packages.otherEvents")}</h1>
        <div className="package-card" data-aos="zoom-in" data-aos-delay="100">
          <h2>{t("packages.birthday")}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="package-card" data-aos="zoom-in" data-aos-delay="200">
          <h2>{t("packages.banquet")}</h2>
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          </p>
        </div>
        <div className="package-card" data-aos="zoom-in" data-aos-delay="300">
          <h2>{t("packages.customEvent")}</h2>
          <p>
            Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero.
          </p>
        </div>
      </section> */}
    </div>
  );
};
export default Packages;
