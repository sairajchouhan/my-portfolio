import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './images/logo.png';
// component importss
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Works from './components/Works';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
  }, []);
  setTimeout(() => {
    setIsLoading(false);
  }, 400);

  if (!isLoading) {
    return (
      <div className="app">
        <Hero />
        <Works />
        <Contact />
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
