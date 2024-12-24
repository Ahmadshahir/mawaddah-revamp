import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((sec) => {
      gsap.fromTo(
        sec,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sec,
            start: 'top 80%'
          }
        }
      );
    });
  }, []);

  return (
    <div>
      <section style={styles.section} ref={addToRefs}>
        <h1>About Mawaddah</h1>
        <p>
          We’re dedicated to creating meaningful connections through secure, user-friendly
          matchmaking solutions. Our advanced algorithms, combined with a personal touch,
          make it simple to find your ideal match.
        </p>
      </section>

      <section style={styles.section} ref={addToRefs}>
        <h2>Step 1: Create Your Profile</h2>
        <p>Share your interests, background, and preferences.</p>
      </section>

      <section style={styles.section} ref={addToRefs}>
        <h2>Step 2: Our Matching Algorithm</h2>
        <p>
          We use a unique blend of analytics and intuition to find the best possible
          match for you.
        </p>
      </section>

      <section style={styles.section} ref={addToRefs}>
        <h2>Step 3: Meet in Person</h2>
        <p>
          Connect via chat, then plan a meeting at one of our curated events, or a
          place of your choosing.
        </p>
      </section>
    </div>
  );
}

const styles = {
  section: {
    marginBottom: '3rem',
  }
};

export default About;
