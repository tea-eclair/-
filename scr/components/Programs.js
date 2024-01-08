// Programs.js
import React from 'react';

const Programs = () => {
  return (
    <div className="programs">
      <section className="programs-header">
        <h1>Educational Programs</h1>
      </section>

      <section className="available-programs">
        <h2>Available Programs</h2>
        <ul>
          <li>Bachelor of Science in Computer Science</li>
          <li>Bachelor of Arts in Business Administration</li>
          <li>Bachelor of Fine Arts in Art and Design</li>
          {/* Add more programs as needed */}
        </ul>
      </section>

      <section className="admission-requirements">
        <h2>Admission Requirements</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default Programs;
