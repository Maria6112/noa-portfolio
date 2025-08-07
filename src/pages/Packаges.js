import React from "react";
import "./Packages.css";

const Packages = () => {
  return (
    <div className="packages-container">
      <section
        className="package-section"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <h1>Wedding Packages</h1>
        <div className="package-card">
          <h2>Basic</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="package-card" data-aos="fade-up">
          <h2>Premium</h2>
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          </p>
        </div>
        <div className="package-card">
          <h2>Luxury</h2>
          <p>
            Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero.
          </p>
        </div>
      </section>

      <section
        className="package-section"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <h1>Business Promotional</h1>
        <div className="package-card">
          <h2>Starter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="package-card">
          <h2>Pro</h2>
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          </p>
        </div>
        <div className="package-card">
          <h2>Enterprise</h2>
          <p>
            Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero.
          </p>
        </div>
      </section>

      <section
        className="package-section"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <h1>Other Events</h1>
        <div className="package-card">
          <h2>Birthday</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="package-card">
          <h2>Banquet</h2>
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          </p>
        </div>
        <div className="package-card">
          <h2>Custom Event</h2>
          <p>
            Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Packages;
