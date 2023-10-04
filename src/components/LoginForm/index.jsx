import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import './styles.scss';

const LoginForm = () => {
  const [userState, setUserState] = useState({
    name: '',
    password: '',
  });

  const handleChangeLogin = (e, key) => {
    setUserState({ ...userState, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLogin = { name: userState.name, password: userState.password };
    console.log(userLogin);
  };

  return (
    <div className="loginForm">
      <h1>Entrar na conta</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu usuário"
            onChange={(e) => handleChangeLogin(e, 'name')}
            value={userState.name}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(e) => handleChangeLogin(e, 'password')}
            value={userState.password}
          />
        </label>
        <input type="submit" name="confirmPassword" className="submit" />
      </form>
      <NavLink to="/register">Criar uma conta</NavLink>
    </div>
  );
};

export default LoginForm;
