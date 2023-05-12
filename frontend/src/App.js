import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessBanner from './components/BusinesBanner';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-primary'>
      <Navbar />
      <div className=' flex justify-center items-star'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>
      <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <BusinessBanner />
          <Services />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
