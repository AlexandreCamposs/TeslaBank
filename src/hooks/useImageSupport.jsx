import { useState } from 'react';

import iconClose from '../assets/img/support//iconClose.png';
import iconOpen from '../assets/img/support//iconOpen.png';
import Smartphone from '../assets/img/support/smartphone.png';

const useImageSupport = () => {
  const [imageSupport, setImageSupport] = useState({
    iconClose: iconClose,
    iconOpen: iconOpen,
    smartphone: Smartphone,
  });
  return imageSupport;
};

export default useImageSupport;
