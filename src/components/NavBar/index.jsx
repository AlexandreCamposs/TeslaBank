import { NavLink } from 'react-router-dom';

import './styles.scss';

const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLink to="/">
        <span>teslabank.</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/benefit">Beneficios </NavLink>
        </li>
        <li>
          <NavLink to="/accountDigital">Conta digital</NavLink>
        </li>
        <li>
          <NavLink to="support">Suporte</NavLink>
        </li>
      </ul>
      <div className="userAuthenticate">
        <NavLink to="/login">Entrar</NavLink>
        <NavLink to="/register" className="register">
          Abrir conta
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
