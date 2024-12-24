import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function HeroSection({ title, subtitle, backgroundImage }) {
  const heroRef = useRef(null);

  useEffect(() => {
    // Fade in hero on mount
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <section 
      ref={heroRef} 
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: `url(${backgroundImage}) center/cover no-repeat`,
        color: '#fff',
        padding: '2rem'
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{title}</h1>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{subtitle}</h2>
    </section>
  );
}

export default HeroSection;
