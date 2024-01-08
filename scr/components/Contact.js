// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Свяжитесь с нами</h1>
      </section>

      <section className="contact-details">
        <h2>Контактная информация</h2>
        <p>
        Адрес: ул. Фрунзе 18, Уральск 090000
        </p>
        <p>
          Телефон: 8(7112)-51-35-70
        </p>
        <p>
          Email: vtsh_08@mail.ru
        </p>
      </section>

      <section className="office-hours">
        <h2>Рабочие часы</h2>
        <p>
          С понедельника по пятницу: 8:00 - 19:00 
        </p>
        <p>
          Суббота, воскресенье: Выходной
        </p>
      </section>

      <section className="contact-form">
        <h2>Оставьте свое сообщение</h2>
        {/* Add a contact form component here if needed */}
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default Contact;
