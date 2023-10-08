import { NavLink } from 'react-router-dom';
import Error from '../../assets/img/support/404.jpeg';

import './styles.scss';

const ErrorPage = () => {
  return (
    <div className="container-error">
      <div className="error">
        <h1>
          Tenho más notícias <br /> para você!
        </h1>
        <p>
          A página que você está procurando pode ter sido <br /> removida ou
          está temporariamente indisponível.
        </p>
        <NavLink to="/">Voltar</NavLink>
      </div>
      <div className="error-logo">
        <img src={Error} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
