import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.socials}>
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
      <p style={styles.copy}>
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "1.5rem 1rem",
    backgroundColor: "#282c34",
    color: "#aaa",
    width: "100%",
    marginTop: "auto", // ensures footer stays at bottom if page is short
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    fontSize: "1.4rem",
    marginBottom: "0.5rem",
  },
  copy: {
    fontSize: "0.9rem",
  },
};

export default Footer;
