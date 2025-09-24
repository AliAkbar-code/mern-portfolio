import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaWhatsapp, FaBriefcase } from "react-icons/fa";
import "../style/contact.css";

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animate on scroll (once)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={sectionRef}
      className={`contact-container animate-once ${isVisible ? "visible" : ""}`}
    >
      <h1 className="contact-title">Let’s Connect</h1>
      <p className="contact-subtitle">
        Reach out to me directly through these platforms:
      </p>

      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon linkedin" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://profile.indeed.com/p/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaBriefcase className="contact-icon indeed" />
          <span>Indeed</span>
        </a>

        <a
          href="https://wa.me/923xxxxxxxxx?text=Hello!%20I%20found%20your%20portfolio."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaWhatsapp className="contact-icon whatsapp" />
          <span>WhatsApp Business</span>
        </a>
      </div>
    </main>
  );
};

export default Contact;
