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

    const validationErrors = validate();

    // Se houver erros de validação, interrompa a execução da função
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const newUser = {
      name: userState.name,
      email: userState.email,
      password: userState.password,
      confirmPassword: userState.confirmPassword,
    };

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
      if (response.status === 201) {
        setMessage('Usuário criado com sucesso.');
        resetMessage();
      } else {
        setMessage('Erro ao cadastrar usuário.');
        resetMessage();
      }
      console.log(result);
      console.log('Success:', result);
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        setMessage('Erro ao cadastrar usuário. Tente mais tarde.');
        resetMessage();
      } else {
        setMessage('Erro ao cadastrar usuário.');
        resetMessage();
      }
      console.log(error);
      console.error('Error:', error);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (userState.name.trim() === '') {
      newErrors.name = 'Campo nome obrigatório.';
    }
    if (!/^\S+@\S+\.\S+$/.test(userState.email.trim())) {
      newErrors.email = 'Digite um e-mail válido.';
    }
    if (userState.password.trim() === '') {
      newErrors.password = 'Campo senha obrigatório.';
    }
    if (userState.password.trim().length < 6) {
      newErrors.password = 'Senha deve conter 6 digitos no mínimo.';
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
    console.log(newErrors);
  };
  const resetMessage = () => {
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

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
      {message && (
        <div className="messageSuccess">
          <p>{message}</p>
        </div>
      )}
      <NavLink to="/login">Já tenho uma conta</NavLink>
    </div>
  );
};

export default RegisterForm;
