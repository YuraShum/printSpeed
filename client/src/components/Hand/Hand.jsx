import React from 'react'
import './Hand.scss'
import { leftHand, rightHand } from '../../data/handColorConfig';
import Finger from './Finger/Finger';

const Hand = ({ isLeft }) => {
  console.log(isLeft)
  return (
    <div className={`hand`}>
      {isLeft ?
        leftHand.map(finger => (
          <Finger name={finger.name} color={finger.color} rotate='left' />
        )) :
        rightHand.map(finger => (
          <Finger name={finger.name} color={finger.color} rotate='right' />
        ))
      }
    </div>
  );
}

export default Hand