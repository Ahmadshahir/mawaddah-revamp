import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Events() {
  const eventRef = useRef([]);
  eventRef.current = [];

  const addToRefs = (el) => {
    if (el && !eventRef.current.includes(el)) {
      eventRef.current.push(el);
    }
  };

  useEffect(() => {
    eventRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%'
          }
        }
      );
    });
  }, []);

  return (
    <section>
      <h1>Upcoming Events</h1>
      <p>Join our local gatherings and connect with potential matches in person.</p>
      <div style={styles.eventContainer}>
        <div style={styles.eventCard} ref={addToRefs}>
          <h3>Coffee & Conversations</h3>
          <p>Date: Dec 5th 2024<br/>Location: Café Istanbul</p>
        </div>
        <div style={styles.eventCard} ref={addToRefs}>
          <h3>Annual Gala</h3>
          <p>Date: Jan 15th 2025<br/>Location: Grand Ballroom</p>
        </div>
        <div style={styles.eventCard} ref={addToRefs}>
          <h3>Community Picnic</h3>
          <p>Date: Mar 1st 2025<br/>Location: City Park</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  eventContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    marginTop: '2rem'
  },
  eventCard: {
    flex: '1 1 240px',
    maxWidth: '280px',
    background: '#f8f8f8',
    borderRadius: '8px',
    padding: '1.5rem',
    textAlign: 'center',
    border: '1px solid #ddd'
  }
};

export default Events;
