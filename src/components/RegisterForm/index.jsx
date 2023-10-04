import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const RegisterForm = () => {
  const [userState, setUserState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChangeUser = (e, key) => {
    setUserState({ ...userState, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: userState.name,
      email: userState.email,
      password: userState.password,
      confirmPassword: userState.confirmPassword,
    };
    console.log(newUser);
  };

  return (
    <div className="registerForm">
      <h1>Faça uma conta </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="user"
            placeholder="Digite seu usuário"
            value={userState.name}
            onChange={(e) => handleChangeUser(e, 'name')}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={userState.email}
            onChange={(e) => handleChangeUser(e, 'email')}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Digite uma senha"
            value={userState.password}
            onChange={(e) => handleChangeUser(e, 'password')}
          />
        </label>
        <label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme novamente a senha"
            value={userState.confirmPassword}
            onChange={(e) => handleChangeUser(e, 'confirmPassword')}
          />
        </label>
        <input type="submit" className="submit" />
      </form>
      <NavLink to="/login">Já tenho uma conta</NavLink>
    </div>
  );
};

export default RegisterForm;
