import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './images/logo.png';
// component importss
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Works from './components/Works';
import Views from './components/Views';
import About from './components/About';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
  }, []);
  setTimeout(() => {
    setIsLoading(false);
  }, 1300);

  if (!isLoading) {
    return (
      <div className="app">
        <Hero />
        <Views />
        <Works />
        <About />
        <div style={{ display: 'block' }}>
          <Contact />
          <Footer />
        </div>
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
