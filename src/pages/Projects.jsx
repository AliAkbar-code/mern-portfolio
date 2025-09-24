import React from 'react';

const projects = [
  {
    name: 'HealthMark',
    description: 'A livestock healthcare management system built with the MERN stack, designed to streamline animal healthcare and market processes.',
    link: 'https://github.com/AliAkbar-code/-Livestock-health-care-HealthMark', // Replace with your actual repo link
  },
  {
    name: 'Blog Website',
    description: 'A modern blogging platform built with React and Node.js, featuring user authentication and CRUD functionality.',
    link: 'https://github.com/yourusername/blog-website', // Replace with your actual repo link
  },
];

const Projects = () => {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>My Projects</h1>
      <p style={styles.subtitle}>Here are some of the projects I’ve worked on recently:</p>

      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.name} style={styles.card}>
            <h2 style={styles.cardTitle}>{project.name}</h2>
            <p style={styles.cardDesc}>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

const styles = {
  container: {
    padding:'10px 10px',
    // margin:'10px 10px',
    maxWidth: '1000px',
    margin: '10px auto',
    minHeight: '80vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#666',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '12px',
    background: '#fff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#222',
  },
  cardDesc: {
    fontSize: '1rem',
    marginBottom: '1.2rem',
    color: '#555',
  },
  button: {
    display: 'inline-block',
    padding: '0.6rem 1.2rem',
    backgroundColor: '#61dafb',
    color: '#000',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background 0.3s ease',
  },
};

export default Projects;
