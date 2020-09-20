import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './images/logo.png';
// component imports
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
  }, []);
  setTimeout(() => {
    setIsLoading(false);
  }, 800);

  if (!isLoading) {
    return (
      <div className="app">
        <Hero />
        <Contact id="contact" />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="app__preloading">
        <img src={logo} alt="A logo that is used while preloading" />
        <p>Website Designed and Developed by Chouhan Sairaj</p>
      </div>
    );
  }
}

export default App;
