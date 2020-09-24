import React from 'react';
import '../styles/Experience.css';
import punch from '../images/punch.jpg';

const Experience = () => {
  return (
    <div className="exp">
      <div className="exp__container">
        <img
          src={punch}
          alt="Two people working on a pc"
          className="views__img"
        />
        <div className="exp__content">
          <div className="exp__content-wrapper">
            <div className="exp__qna" style={{ marginBottom: '20px' }}>
              <h2 style={{ marginBottom: '15px' }}>My Experience</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
