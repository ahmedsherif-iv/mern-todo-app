import React from 'react';
import './Cards.css';

function Cards({ children }) {
  return (
    <div className='cards'>
      <h1>Our great services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
