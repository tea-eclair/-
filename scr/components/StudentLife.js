// StudentLife.js
import React from 'react';

const StudentLife = () => {
  return (
    <div className="student-life">
      <section className="student-life-header">
        <h1>Student Life</h1>
      </section>

      <section className="campus-activities">
        <h2>Campus Activities</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="clubs-and-organizations">
        <h2>Clubs and Organizations</h2>
        <ul>
          <li>Student Government Association</li>
          <li>Art Club</li>
          <li>Sports Club</li>
          {/* Add more clubs as needed */}
        </ul>
      </section>

      <section className="events-and-festivals">
        <h2>Events and Festivals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default StudentLife;
