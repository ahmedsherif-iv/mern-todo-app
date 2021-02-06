// import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {

  return (
    <div className='hero-container'>
      <div className="gradient-animation"></div>

      {/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> */}
      <img src="/images/laptop-phone-mock.png" className="mock-img" alt="" />
      <p>Manage your to do lists and tasks<br /> on your web browser or your mobile phone.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GOOGLE PLAY STORE <i className="fab fa-google-play"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          APPLE APP STORE <i className="fab fa-app-store-ios"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
