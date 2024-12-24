import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        {/* Replace with your actual logo */}
        <img
          src="https://via.placeholder.com/40x40?text=M"
          alt="Logo"
          style={{ marginRight: '8px' }}
        />
        <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Mawaddah</span>
      </div>
      <ul style={styles.ul}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">How It Works</Link></li>
        <li><Link to="/pricing">Services Provided</Link></li>
        <li><Link to="/events">Upcoming Events</Link></li>
        <li><Link to="/match">Exciting Updates</Link></li>
      </ul>
      <div>
        {/* Could be your mini QR code */}
        <img 
          src="https://via.placeholder.com/40?text=QR" 
          alt="QR" 
        />
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(6px)',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  ul: {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
  }
};

export default Navbar;
