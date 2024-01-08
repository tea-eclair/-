import React from 'react';
import HomepageImage from '../assets/orig.png'; // Adjust the import path

const Home = () => {
    return (
      <div className="home">
        <img src={HomepageImage} alt="College Homepage" />
      <section className="welcome-section">
        <h2>Добро пожаловать в наш колледж</h2>
        <p>
        Откройте для себя возможности и опыт, которые ждут вас в нашем колледже.
        </p>
      </section>

      <section className="featured-courses">
        <h2>Рекомендуемые курсы</h2>
        <ul>
          <li>Информатика</li>
          <li>Бизнес-администрирование</li>
          <li>Арт, живопись и дизайн</li>
        </ul>
      </section>

      <section className="events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Orientation Day - September 1</li>
          <li>Annual Career Fair - October 15</li>
          <li>Sports Day - November 5</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
