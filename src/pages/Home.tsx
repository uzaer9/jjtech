import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Stats from '../components/Stats';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <TechStack />
      <Stats />
      <Contact />
    </>
  );
};

export default Home;