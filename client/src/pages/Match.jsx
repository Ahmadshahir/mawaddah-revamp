import React from 'react';

function Match() {
  return (
    <section>
      <h1>Exciting Updates</h1>
      <p>
        Our matching algorithm is evolving! Get ready for a next-gen approach to 
        finding the perfect partner.
      </p>
      <ul style={styles.list}>
        <li>Improved Preference Matching</li>
        <li>Faster Recommendations</li>
        <li>Integrated Video Chat</li>
      </ul>
    </section>
  );
}

const styles = {
  list: {
    marginTop: '1rem',
    listStyle: 'circle inside',
    maxWidth: '600px'
  }
};

export default Match;
