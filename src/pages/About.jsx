import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/AboutPageStyles.css';

function About() {
  return (
    <div className="about-page__wrapper">
      <h2>Fernando Segura</h2>
      <div className="about-page__contact_card_wrapper">
        <div className="about-page__contact_card_header">
          <span>About</span>
        </div>
        <div className="about-page__contact_card_body">
          <p>Me gusta la tecnología, el desarrollo de software y blockchain.</p>
        </div>
      </div>
      <div className="about-page__contact_card_wrapper">
        <div className="about-page__contact_card_header">
          <span>Lecciones aprendidas</span>
        </div>
        <div className="about-page__contact_card_body">
          <ul>
            <li>Javascript</li>
            <li>SCRUM</li>
            <li>Mockups, Wireframes y Figma</li>
            <li>React, ,React Router</li>
          </ul>
        </div>
      </div>
      <div className="about-page__contact_card_wrapper">
        <div className="about-page__contact_card_header">
          <span>Contacto</span>
        </div>
        <div className="about-page__contact_card_body">
          <ul>
            <li>
              <FontAwesomeIcon icon="at" />
              <span>fsegura.agreda@gmail.com</span>
            </li>
            <li>
              <FontAwesomeIcon icon={['fab', 'github']} />
              <span>@kodigo19</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
