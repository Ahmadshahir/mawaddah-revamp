import React from 'react';

function Pricing() {
  return (
    <section>
      <h1>Services Provided</h1>
      <p>
        Choose from flexible membership plans. From free sign-ups to premium perks, we have it all.
      </p>
      <div style={styles.pricingGrid}>
        <div style={styles.pricingCard}>
          <h2>Basic</h2>
          <p>$9.99/month</p>
        </div>
        <div style={styles.pricingCard}>
          <h2>Standard</h2>
          <p>$19.99/month</p>
        </div>
        <div style={styles.pricingCard}>
          <h2>Premium</h2>
          <p>$29.99/month</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  pricingGrid: {
    display: 'flex',
    gap: '2rem',
    marginTop: '2rem',
    justifyContent: 'center'
  },
  pricingCard: {
    background: '#f9f9f9',
    padding: '2rem',
    borderRadius: '8px',
    textAlign: 'center',
    minWidth: '200px',
    border: '1px solid #ddd'
  }
};

export default Pricing;
