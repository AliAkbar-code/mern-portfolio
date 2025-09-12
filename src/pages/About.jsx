import React from 'react';

const About = () => {
  return (
    <main style={styles.container}>
      <h1>About Me</h1>
      <p>
        I'm a dedicated Full Stack MERN developer with expertise in HTML, CSS,
        Bootstrap, JavaScript, React, Node.js, Express, and MongoDB. I have
        experience in building real-world applications such as HealthMark,
        a livestock healthcare management system.
      </p>
      <p>
        I enjoy solving complex problems and writing clean, maintainable
        code.
      </p>
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
};

export default About;
