import React from 'react';

const Home = () => {
  return (
    <main style={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        I am a passionate Full Stack MERN developer specializing in building
        scalable web applications.
      </p>
      <p>Explore my projects and skills through the navigation above.</p>
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

export default Home;
