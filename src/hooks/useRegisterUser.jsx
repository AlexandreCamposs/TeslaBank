import { useState } from 'react';

const useRegisterUser = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const registerUser = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/registros/', {
        method: 'POST',
        headers: { 'Content-Type': 'applicattion/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setData(result);
      console.log('Success: ', result);
    } catch (error) {
      setError(error);
      console.log('Error: ', error);
    }
  };

  return { registerUser, data, error };
};

export default useRegisterUser;
