import React from 'react';
import './assets/css/styles.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { CallToAction } from './components/call-to-action/call-to-action';

function Home() {
  return (
   <>
   <Header/>
    <Hero/>
    <Services />
    
    <CallToAction />
      <Footer />
   </>
  );
}

export default Home;
