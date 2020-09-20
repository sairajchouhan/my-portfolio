import React, { useEffect, useState } from 'react';
import './App.css';
// component imports
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (!isLoading) {
    return (
      <div className="app">
        <Hero />
        <Contact id="contact" />
        <Footer />
      </div>
    );
  } else {
    return <h1>isLoading</h1>;
  }
}

export default App;
