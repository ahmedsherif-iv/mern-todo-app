import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our great services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/sync.png'
              text='Sync between all your connected devices'
            />
            <CardItem
              src='images/share.png'
              text='Share Lists and tasks between you and your colleagues'
            />
            <CardItem
              src='images/realtime.png'
              text='Real-time data change on all shared lists'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
