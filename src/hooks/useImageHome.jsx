import React, { useState } from 'react';

import Check from '../assets/img/home/check-circle.png';
import Check2 from '../assets/img/home/ri_check-fill.png';
import Dollar from '../assets/img/home/dollar-sign.png';
import Card from '../assets/img/home/Group 319.png';
import Heart from '../assets/img/home/heart.png';
import Mouse from '../assets/img/home/mouse-pointer.png';
import Smartphone from '../assets/img/home/smartphone.png';
import Smile from '../assets/img/home/smile.png';
import Subtract from '../assets/img/home/Subtract.svg';
import Vect from '../assets/img/home/Vector 78.svg';
import App from '../assets/img/home/app.png';

const useImageHome = () => {
  const [imageHome, setImageHome] = useState({
    check: Check,
    check2: Check2,
    dollar: Dollar,
    card: Card,
    heart: Heart,
    mouse: Mouse,
    smartphone: Smartphone,
    smile: Smile,
    subtract: Subtract,
    vect: Vect,
    app: App,
  });
  console.log(imageHome);
  return imageHome;
};

export default useImageHome;
