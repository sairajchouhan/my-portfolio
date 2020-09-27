import React, { useState, useRef } from 'react';
import '../styles/Contact.css';
import chatSvg from '../images/love.svg';
import Slide from 'react-reveal/Slide';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { postURL } from '../postURL.js';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const errMsgRef = useRef();
  const [sending, setSending] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');

  const handleClose = () => {
    const errDiv = errMsgRef.current;
    setShow(false);
    errDiv.style.transform = 'translateX(-100%)';
  };

  const handleDisplayMessage = (errMsg, type) => {
    const errDiv = errMsgRef.current;
    setDisplayMessage(errMsg);
    setShow(true);
    let color = '';
    switch (type) {
      case 'failure':
        color = 'rgb(255, 90, 90)';
        break;
      case 'success':
        color = 'rgb(154, 255, 154)';
        break;
      default:
        color = '';
    }
    errDiv.style.transform = 'translateX(0%)';
    errDiv.style.background = color;
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
      handleDisplayMessage('Fill all the fields', 'failure');
    } else if (!nameIsCorrect && !emailIsCorrect) {
      handleDisplayMessage('Damm..neither name nor email is valid', 'failure');
    } else if (!nameIsCorrect) {
      handleDisplayMessage(
        "Man...that can't be a name unless you are Elon",
        'failure'
      );
    } else if (!emailIsCorrect) {
      handleDisplayMessage(
        "Dude..check you email it's probably invalid",
        'failure'
      );
    } else {
      try {
        setSending(true);
        await axios.post(postURL, { name, email, message });
        setSending(false);
        handleDisplayMessage('Message sent successfully', 'success');
        setName('');
        setEmail('');
        setMessage('');
      } catch (err) {
        handleDisplayMessage(
          'Server Error contact me through social media',
          'failure'
        );
        setSending(false);
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
        <Fade left delay={500} duration={1000}>
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
              <button>{sending ? 'sending' : 'send'}</button>
            </form>
          </div>
        </Fade>

        <div className="contact__svg">
          <Fade right delay={500} duration={1000}>
            <div>
              <img src={chatSvg} className="contact__chatSvg" alt="chatSVG" />
            </div>
            <div className="contact__letsChat">
              <p>Let's Chat</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
