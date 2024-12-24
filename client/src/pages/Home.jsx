import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animate each card as it enters the viewport
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          }
        }
      );
    });
  }, []);

  return (
    <div>
      <HeroSection
        title="Matchmaking Made Easy!"
        subtitle="مودة – Mawaddah"
        backgroundImage="https://via.placeholder.com/1200x600?text=Hero+BG"
      />

      <section style={styles.cardsSection}>
        <div style={styles.card} ref={addToRefs}>
          <h3>How it works</h3>
          <p>From signing up to meeting your match in person—learn the steps.</p>
        </div>
        <div style={styles.card} ref={addToRefs}>
          <h3>Services Provided</h3>
          <p>We offer personalized matching, event planning, and more.</p>
        </div>
        <div style={styles.card} ref={addToRefs}>
          <h3>Upcoming Events</h3>
          <p>Stay tuned for our next open-house and special meetups.</p>
        </div>
        <div style={styles.card} ref={addToRefs}>
          <h3>Exciting Updates</h3>
          <p>We’re always improving. Discover the latest platform features.</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  cardsSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    marginTop: '2rem',
    padding: '0 1rem',
  },
  card: {
    background: '#f8f8f8',
    border: '2px solid #d90429',
    borderRadius: '8px',
    padding: '2rem',
    flex: '1 1 240px',
    maxWidth: '280px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }
};

export default Home;
