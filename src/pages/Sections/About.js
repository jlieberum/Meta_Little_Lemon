import React from 'react';
import './CSS/About.css';
import Owners from '../../assets/Mario_Adrian_A.jpg';

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      <img className="about-image-1" src={Owners} alt="Mario and Adrian" height={200} width={200} />
    </div>
  );
};

export default About;
