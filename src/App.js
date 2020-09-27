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
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
  }, []);
  setTimeout(() => {
    setIsLoading(false);
  }, 1200);

  if (!isLoading) {
    return (
      <div className="app">
        <Hero />
        <Views />
        <Works />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  } else {
    return (
      <AnimatePresence>
        <motion.div
          className="app__preloading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img src={logo} alt="A logo that is used while preloading" />
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default App;
