
import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Amenities } from './components/Amenities';
import { Location } from './components/Location';
import { Inquiry } from './components/Inquiry';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main>
        <About />
        <Gallery />
        <Amenities />
        <Location />
        <Inquiry />
      </main>
      <Footer />
    </div>
  );
};

export default App;
