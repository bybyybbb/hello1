import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import MemeGallery from './components/MemeGallery';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <HowToBuy />
      <Roadmap />
      <Community />
      <MemeGallery />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;