import React from 'react';

const About = () => {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>About Me</h1>
      <p style={styles.intro}>
        Hi, I'm <span style={styles.highlight}>Ali Akbar</span>, a passionate 
        <strong> Full Stack MERN Developer</strong> with a love for building 
        modern, responsive, and scalable web applications.
      </p>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Who I Am</h2>
        <p style={styles.text}>
          I specialize in creating professional websites and real-world 
          applications using technologies like <strong>HTML, CSS, Bootstrap,
          JavaScript, React, Node.js, Express, and MongoDB</strong>.  
        </p>
        <p style={styles.text}>
          One of my major projects is <em>HealthMark</em>, a livestock healthcare 
          management system designed to streamline animal healthcare and market 
          processes. 
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>My Skills</h2>
        <ul style={styles.skillList}>
          <li>⚡ React.js & Frontend Development</li>
          <li>⚡ Node.js, Express.js, REST APIs</li>
          <li>⚡ MongoDB & Database Design</li>
          <li>⚡ Responsive UI with CSS, Bootstrap, Tailwind</li>
          <li>⚡ Problem-solving & Clean Code Practices</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Beyond Code</h2>
        <p style={styles.text}>
          I enjoy solving challenges, exploring new technologies, and sharing 
          knowledge. My goal is to keep growing as a developer and contribute 
          to impactful projects that make a difference.
        </p>
      </section>
    </main>
  );
};

const styles = {
  container: {
    padding: '1rem 1rem',
    maxWidth: '900px',
    margin: '-45px auto',
    minHeight: '80vh',
    lineHeight: '1.7',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#333',
  },
  intro: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  highlight: {
    color: '#61dafb',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '2.5rem',
  },
  subtitle: {
    fontSize: '1.6rem',
    marginBottom: '1rem',
    color: '#444',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  skillList: {
    listStyle: 'none',
    padding: 0,
    fontSize: '1rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.8rem',
  },
};

export default About;
