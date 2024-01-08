// About.js
import React from 'react';

const About = () => {
  return (
    <div className="about">
      <section className="about-header">
        <h1>About Our College</h1>
      </section>

      <section className="history">
        <h2>Our History</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="mission-vision">
        <h2>Mission and Vision</h2>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To provide quality education and foster an environment of academic excellence.
          </p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To be a leading institution in shaping future leaders and contributing to society.
          </p>
        </div>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default About;
