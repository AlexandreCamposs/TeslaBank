import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useImageSupport from '../../hooks/useImageSupport';
import './styles.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const imageMenu = useImageSupport();

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <nav className="navBar">
      <NavLink to="/">
        <span>teslabank.</span>
      </NavLink>
      <div className="menu-mobile" onClick={toggleMenu}>
        <img src={imageMenu.menu} alt="" />
      </div>
      <div className="navigate">
        <ul className={` menu${isOpen ? '-open' : ''}`}>
          <li>
            <NavLink to="/benefit">Beneficios </NavLink>
          </li>
          <li>
            <NavLink to="/error">Conta digital</NavLink>
          </li>
          <li>
            <NavLink to="support">Suporte</NavLink>
          </li>
        </ul>
        <div className={`userAuthenticate enter${isOpen ? '-open' : ''}`}>
          <NavLink to="/login">Entrar</NavLink>
          <NavLink to="/register" className="register">
            Abrir conta
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
