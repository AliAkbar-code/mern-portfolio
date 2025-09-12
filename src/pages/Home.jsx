import React from "react";
import "../style/Home.css";

const Home = () => {
  return (
    <main className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          Hi, I'm <span>Ali Akbar Subhani</span>
        </h1>
        <h2 className="home-subtitle">Full Stack MERN Developer</h2>
        <p className="home-description">
          I specialize in building scalable and modern web applications using
          MongoDB, Express, React, and Node.js. Explore my projects and skills
          to see what I can create.
        </p>

        <div className="home-buttons">
          <a href="/projects" className="btn primary">View Projects</a>
          <a href="/contact" className="btn secondary">Contact Me</a>
        </div>
      </div>

      <div className="home-image">
        <img
          src="/images/WhatsApp Image 2025-09-11 at 19.05.18_90764fcd.jpg"
          alt="Ali Akbar Profile"
        />
      </div>
    </main>
  );
};

export default Home;
