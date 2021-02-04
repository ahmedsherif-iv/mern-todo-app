import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {

  return (
    <div className='hero-container'>
      <div className="gradient-animation"></div>

      {/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> */}
      <img src="/images/laptop-phone-mock.png" class="mock-img" />
      <p>Manage your Todo lists and tasks<br /> on your web browser or your mobile phone.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GOOGLE PLAY STORE <i class="fab fa-google-play"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i class="fab fa-app-store-ios"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
