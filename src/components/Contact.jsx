import React, { useState, useRef } from 'react';
import '../styles/Contact.css';
import chatSvg from '../images/love.svg';
import Slide from 'react-reveal/Slide';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const errMsgRef = useRef();
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');

  const handleClose = () => {
    const errDiv = errMsgRef.current;
    setShow(false);
    errDiv.style.transform = 'translateX(-730px)';
  };

  const handleDisplayMessage = (errMsg) => {
    const errDiv = errMsgRef.current;
    setDisplayMessage(errMsg);
    setShow(true);
    errDiv.style.transform = 'translateX(0px)';
    setTimeout(() => {
      handleClose();
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let regexName = /^[a-zA-Z ]*$/;
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const nameIsCorrect = regexName.test(name);
    const emailIsCorrect = regexEmail.test(email);
    if (name === '' || email === '' || message === '') {
      handleDisplayMessage('Fill all the fields');
    } else if (!nameIsCorrect && !emailIsCorrect) {
      handleDisplayMessage('Damm..neither name nor email is valid');
    } else if (!nameIsCorrect) {
      handleDisplayMessage("Man...that can't be a name unless you are Elon");
    } else if (!emailIsCorrect) {
      handleDisplayMessage("Dude..check you email it's probably invalid ");
    } else {
      try {
        const response = await axios.post(
          'https://us-central1-portfolio-e0fa5.cloudfunctions.net/api/',
          { name, email, message }
        );
        console.log('message sent', response.data);
        handleDisplayMessage('Message sent successfully');
      } catch (err) {
        handleDisplayMessage('Server Error');
      }
    }
  };
  return (
    <div className="contact" id="contact">
      <div ref={errMsgRef} id="contact__ERRmessage">
        <Slide duration={500} left when={show}>
          <div className="contact__msgContainer">
            <p>{displayMessage}</p>
            <div onClick={() => handleClose()} className="contact__msgClose">
              <FaTimes className="contact__closeIcon" />
            </div>
          </div>
        </Slide>
      </div>
      <div className="contact__container">
        <div className="contact__form">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="contact__inputs">
              <div className="contact__input">
                <label htmlFor="name">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  className="contact__name"
                />
              </div>
              <div className="contact__input">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="email"
                  className="contact__email"
                />
              </div>
            </div>
            <div className="contact__input">
              <label htmlFor="message">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
              />
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
