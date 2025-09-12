import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#282c34',
    color: '#aaa',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
