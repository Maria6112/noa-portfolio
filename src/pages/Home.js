import React from "react";
import "./Home.css";

const Home = () => {
  const title = "NOA STEFANIAN";

  return (
    <section id="home">
      <div className="home-container">
        <div className="animation-title">
          <h1 className="animation-title">
            {title.split("").map((letter, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
          <div className="vertical-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
