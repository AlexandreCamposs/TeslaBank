import { useState } from 'react';

import iconClose from '../assets/img/support//iconClose.png';
import iconOpen from '../assets/img/support//iconOpen.png';
import Smartphone from '../assets/img/support/smartphone.png';
import Menu from '../assets/img/support/menu.png';

const useImageSupport = () => {
  const [imageSupport, setImageSupport] = useState({
    iconClose: iconClose,
    iconOpen: iconOpen,
    smartphone: Smartphone,
    menu: Menu,
  });
  return imageSupport;
};

export default useImageSupport;
