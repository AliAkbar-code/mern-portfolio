// src/pages/Home.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import "../style/Home.css";

const Home = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <main className="home-container">
        {/* Left Content */}
        <div className="home-content">
          <h1 className="home-title">
            Hi, I'm <span>Ali Akbar Subhani</span>
          </h1>
          <h2 className="home-subtitle">Full Stack MERN Developer</h2>
          <p className="home-description">
            Building responsive, user-centric web applications with a focus on
            performance and modern design.
          </p>

          {/* CTA Buttons */}
          <div className="home-buttons">
            <a href="/projects" className="btn primary">View Projects</a>
            <a href="/contact" className="btn secondary">Contact Me</a>
            <a href="/profile1.jpg" download className="btn resume-btn">
              <FaDownload /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>

          {/* Tech Stack Icons */}
          <div className="tech-stack">
            <span>⚛️ React</span>
            <span>🟢 Node.js</span>
            <span>🗄️ MongoDB</span>
            <span>🚀 Express</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="home-image">
          <img
            src="/images/profile.jpg"
            alt="Ali Akbar Profile"
            loading="lazy"
          />
        </div>
      </main>

      {/* 2. About Me Section */}
      <section className="about-section">
        <div className="about-container">
          <h2>About Me</h2>
          <p>
            I’m a passionate Full Stack MERN Developer with a strong interest in
            building modern, scalable, and visually appealing applications. My
            journey started with curiosity about how websites work, and now I
            specialize in developing full-stack applications using{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">Node.js</span>,{" "}
            <span className="highlight">Express</span>, and{" "}
            <span className="highlight">MongoDB</span>.
          </p>
          <p>
            I love solving problems, learning new technologies, and designing
            applications with a user-first mindset.
          </p>
        </div>
      </section>

      {/* 3. Skills & Expertise Section */}
      <section className="skills-section">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div><strong>Front-end:</strong> HTML, CSS, JavaScript, React</div>
          <div><strong>Back-end:</strong> Node.js, Express, MongoDB</div>
          <div><strong>Design:</strong> Figma</div>
          <div><strong>Other Tools:</strong> Git, GitHub</div>
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section className="portfolio-section">
        <h2>My Work</h2>
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src="/images/herosection.png" alt="Project 1" />
            <h3>Codm Blog Website</h3>
            <p>A modern blogging platform built with React and Node.js, featuring user authentication and CRUD functionality.</p>
          </div>
          <div className="portfolio-card">
            <img src="/images/helthmark.png" alt="Project 2" />
            <h3>LiveStock Health care and Marketing Managment System</h3>
            <p>A livestock healthcare management system built with the MERN stack, designed to streamline animal healthcare and market processes.</p>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      {/* <section className="testimonials-section">
        <h2>Testimonials</h2>
        <blockquote>
          "Ali is a talented developer who always delivers on time. His
          attention to detail and problem-solving ability is outstanding."
        </blockquote>
        <p>- Client Name</p>
      </section> */}

      {/* 6. Blog Section */}
      {/* <section className="blog-section">
        <h2>Latest Articles</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <h3>Understanding MERN Stack</h3>
            <p>A beginner-friendly guide to full-stack development.</p>
          </div>
          <div className="blog-card">
            <h3>Why React is Awesome</h3>
            <p>Exploring the power of components and reusability.</p>
          </div>
        </div>
      </section> */}

      {/* 7. Contact Section */}
      <section className="contact-section">
        <h2>Let’s Collaborate</h2>
        <p>Have a project in mind? Let’s bring it to life together!</p>
        <a href="/contact" className="btn primary">Contact Me</a>
      </section>
    </>
  );
};

export default Home;
