import React from 'react';
import '../styles/AboutMe.css';
import whoami from '../images/whoami.jpg';

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMe__container">
        <img
          src={whoami}
          alt="Two people working on a pc"
          className="views__img"
        />
        <div className="aboutMe__content">
          <div className="aboutMe__content-wrapper">
            <div className="aboutMe__qna" style={{ marginBottom: '20px' }}>
              <h2 style={{ marginBottom: '15px' }}>A Little bit about me</h2>
              <p>
                {' '}
                <span role="img" aria-label="poning right">
                  👉
                </span>{' '}
                Who am i ?
              </p>
              <p>
                Sairaj Chouhan, Hyderabad, India. Algorithamist. Do what you
                love, love what you do #myMotto{' '}
                <span role="img" aria-label="fire">
                  🔥
                </span>
                . I’m 18 and coding flows through my viens{' '}
                <span role="img" aria-label="laptop">
                  👨‍💻
                </span>
                , currently into web development aspiring to be a killer
                freelancer.
              </p>
            </div>
            {/* what defines me */}
            <div className="aboutMe__qna" style={{ marginBottom: '20px' }}>
              <p style={{ marginBottom: '7px' }}>
                {' '}
                <span role="img" aria-label="poning right">
                  👉
                </span>{' '}
                What defines me ?
              </p>
              <div className="aboutMe__qna-uls">
                <ul className="aboutMe__qna-ul">
                  <li className="aboutMe__qna-li"># Perseverence</li>
                  <li className="aboutMe__qna-li"># Limitless Attitude</li>
                </ul>
                <ul className="aboutMe__qna-ul">
                  <li className="aboutMe__qna-li"># Balance</li>
                  <li className="aboutMe__qna-li"># Exponiential Growth</li>
                </ul>
              </div>
            </div>
            {/* why me */}
            <div className="aboutMe__qna">
              <p style={{ marginBottom: '7px' }}>
                {' '}
                <span role="img" aria-label="poning right">
                  👉
                </span>{' '}
                But why me ?
              </p>
              <div style={{ display: 'flex' }}>
                <ul className="aboutMe__qna-ul">
                  <li className="aboutMe__qna-li">
                    # Not only doing what is said to do but i constantly
                    introduce new ideas and take initiatives
                  </li>
                  <li className="aboutMe__qna-li"># I am a problem solver</li>
                  <li className="aboutMe__qna-li"># I communicate very well</li>
                  <li className="aboutMe__qna-li">
                    # Open to new ideas and tecnologies
                  </li>
                  <li className="aboutMe__qna-li">
                    # I provide constructive critisim
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
