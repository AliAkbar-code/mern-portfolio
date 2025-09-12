import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyPortfolio</div>
      <div style={styles.links}>
        <NavLink to="/" style={styles.link} end activeStyle={styles.active}>
          Home
        </NavLink>
        <NavLink to="/about" style={styles.link} activeStyle={styles.active}>
          About
        </NavLink>
        <NavLink to="/projects" style={styles.link} activeStyle={styles.active}>
          Projects
        </NavLink>
        <NavLink to="/contact" style={styles.link} activeStyle={styles.active}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
    color: '#fff',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  active: {
    color: '#61dafb',
    fontWeight: 'bold',
  },
};

export default Navbar;
