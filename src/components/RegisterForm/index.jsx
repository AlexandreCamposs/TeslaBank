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
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState();

  const handleChangeUser = (e, key) => {
    setUserState({ ...userState, [key]: e.target.value });
    setErrors({ ...errors, [key]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: userState.name,
      email: userState.email,
      password: userState.password,
      confirmPassword: userState.confirmPassword,
    };

    validate();

    console.log(newUser);
    regirterUser(newUser);
  };

  const regirterUser = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/registros/', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      console.log('Success:', result);
    } catch (error) {
      console.log(error);
      console.error('Error:', error);
    }
  };

  const validate = () => {
    const newErrors = {
      name: errors.name,
      email: errors.email,
      password: errors.password,
      confirmPassword: errors.confirmPassword,
    };
    if (userState.name.trim() === '') {
      newErrors.name = 'Campo nome obrigatório.';
    }
    if (!/^\S+@\S+\.\S+$/.test(userState.email.trim())) {
      newErrors.email = 'Digite um e-mail válido.';
    }
    if (userState.password.trim() === '') {
      newErrors.password = 'Campo senha obrigatório.';
    }
    if (userState.confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Campo confirme a senha obrigatório.';
    }
    if (
      userState.password.trim() !== '' &&
      userState.confirmPassword.trim() !== '' &&
      userState.password.trim() !== userState.confirmPassword.trim()
    ) {
      newErrors.password = 'As senhas devem ser iguais';
      newErrors.confirmPassword = 'As senhas devem ser iguais';
    }

    setErrors(newErrors);
  };
  console.log(errors);

  return (
    <div className="registerForm">
      <h1>Faça uma conta </h1>
      <form onSubmit={handleSubmit}>
        {errors.name && (
          <div>
            <p>{errors.name}</p>
          </div>
        )}
        <label>
          <input
            type="text"
            name="user"
            placeholder="Digite seu usuário"
            value={userState.name}
            onChange={(e) => handleChangeUser(e, 'name')}
          />
        </label>
        {errors.email && (
          <div>
            <p>{errors.email}</p>
          </div>
        )}
        <label>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            value={userState.email}
            onChange={(e) => handleChangeUser(e, 'email')}
          />
        </label>
        {errors.password && (
          <div>
            <p>{errors.password}</p>
          </div>
        )}
        <label>
          <input
            type="password"
            name="password"
            placeholder="Digite uma senha"
            value={userState.password}
            onChange={(e) => handleChangeUser(e, 'password')}
          />
        </label>
        {errors.confirmPassword && (
          <div>
            <p>{errors.confirmPassword}</p>
          </div>
        )}
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
      {message && <div>{message}</div>}
      <NavLink to="/login">Já tenho uma conta</NavLink>
    </div>
  );
};

export default RegisterForm;
