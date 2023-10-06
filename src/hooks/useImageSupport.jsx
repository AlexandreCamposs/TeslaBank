import { useState } from 'react';

import Vect from '../assets/img/support/Vector (2).png';
import Smartphone from '../assets/img/support/smartphone.png';

const useImageSupport = () => {
  const [imageSupport, setImageSupport] = useState({
    vect: Vect,
    smartphone: Smartphone,
  });
  return imageSupport;
};

export default useImageSupport;
