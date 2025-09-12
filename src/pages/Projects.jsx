import React from 'react';

const projects = [
  {
    name: 'HealthMark',
    description: 'Livestock healthcare management system built with MERN stack.',
    link: 'https://github.com/yourusername/healthmark', // Replace with your actual repo link
  },
  {
    name: 'Blog Website',
    description: 'A blogging platform built using React and Node.js.',
    link: 'https://github.com/yourusername/blog-website', // Replace with your actual repo link
  },
];

const Projects = () => {
  return (
    <main style={styles.container}>
      <h1>Projects</h1>
      <ul style={styles.list}>
        {projects.map((project) => (
          <li key={project.name} style={styles.listItem}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

const styles = {
  container: {
    padding: '3rem 2rem',
    maxWidth: '800px',
    margin: '0 auto',
    minHeight: '80vh',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '2rem',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
  },
};

export default Projects;
