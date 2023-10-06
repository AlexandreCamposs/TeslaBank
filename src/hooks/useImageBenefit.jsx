import { useState } from 'react';

import Clock from '../assets/img/benefit/clock.png';
import Credit from '../assets/img/benefit/credit-card.png';
import Gift from '../assets/img/benefit/gift.png';
import Percent from '../assets/img/benefit/percent.png';
import Shield from '../assets/img/benefit/shield.png';
import Shopping from '../assets/img/benefit/shopping-cart.png';
import Cards from '../assets/img/benefit/cards.png';
import App from '../assets/img/benefit/Group 311.png';
import Android from '../assets/img/benefit/Group 315.png';
import Union from '../assets/img/benefit/Union.png';

const useImageBenefit = () => {
  const [imageBenefit, setImageBenefit] = useState({
    clock: Clock,
    credit: Credit,
    gift: Gift,
    percent: Percent,
    shield: Shield,
    shopping: Shopping,
    cards: Cards,
    app: App,
    android: Android,
    union: Union,
  });
  return imageBenefit;
};

export default useImageBenefit;
