import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Mawaddah. All rights reserved.</p>
      <p>
        Follow us on{" "}
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>{" "}
        |{" "}
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          Facebook
        </a>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '2rem',
    background: '#f5f5f5',
    marginTop: '2rem'
  }
};

export default Footer;
