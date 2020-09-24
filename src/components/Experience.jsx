import React from 'react';
import '../styles/Experience.css';
import punch from '../images/punch.jpg';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';

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
            <div className="exp__heading" style={{ marginBottom: '20px' }}>
              <h2 style={{ marginBottom: '15px' }}>My Experience</h2>
            </div>
            <div className="exp__qna">
              <div className="exp__q">
                <p>
                  {' '}
                  <span role="img" aria-label="poning right">
                    👉
                  </span>{' '}
                  What technologies I know ?
                </p>
              </div>
              <div className="exp__a">
                <FaHtml5 className="exp__icon" />
                <FaCss3 className="exp__icon" />
                <FaJs className="exp__icon" />
                <FaReact className="exp__icon" />
                <FaNode className="exp__icon" />
                <SiMongodb className="exp__icon" />
                <SiRedux className="exp__icon" />
                <SiFirebase className="exp__icon" />
                <p style={{ marginTop: '7px' }}>
                  I absolutely love to build full stack applicatios using React
                  as fontend Node and Firebase as a backend.React it is my super
                  power #ReactRider and make webistes that highly satisfy user
                  needs and make your business grow.
                </p>
              </div>
            </div>
            <div className="exp__qna">
              <div className="exp__q">
                <p>
                  {' '}
                  <span role="img" aria-label="poning right">
                    👉
                  </span>{' '}
                  Position of responsibilities ?
                </p>
              </div>
              <div className="exp__a">
                <p>
                  # Frontend developer for{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://yogavicky.github.io/CS-Club-IIITDM-Website/"
                  >
                    {' '}
                    CS Club official website
                  </a>{' '}
                  of my collage
                </p>
                <p>
                  # Frontend developer at{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://decartem.com/"
                  >
                    Decartem
                  </a>{' '}
                  a digital educational startup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
