import React from 'react';
import '../styles/Contact.css';
import chatSvg from '../images/love.svg';
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__form">
          <form>
            <div className="contact__inputs">
              <div className="contact__input">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="contact__name" />
              </div>
              <div className="contact__input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="contact__email" />
              </div>
            </div>

            <div className="contact__input">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="contact__message" />
            </div>
            <button>Send</button>
          </form>
        </div>
        <div className="contact__svg">
          <div>
            <img src={chatSvg} className="contact__chatSvg" alt="chatSVG" />
          </div>
          <p>Let's Chat...</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
