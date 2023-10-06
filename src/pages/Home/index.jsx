import useImageHome from '../../hooks/useImageHome';

import { NavLink } from 'react-router-dom';

import './style.scss';

const Home = () => {
  const imageHome = useImageHome();

  return (
    <div className="container">
      <div className="home">
        <div className="description">
          <h1>
            TeslaBank <br />
            seu banco digital
          </h1>
          <p>
            Com TeslaBank, você pode realizar transferências bancárias com zero
            taxa e pagar suas contas.
          </p>
          <ul>
            <li>
              <img src={imageHome.check2} alt="" />
              Transferência instantânea
            </li>
            <li>
              <img src={imageHome.check2} alt="" />
              Sem taxas absurdas
            </li>
            <li>
              <img src={imageHome.check2} alt="" />
              Pagamentos em todo o mundo
            </li>
            <li>
              <img src={imageHome.check2} alt="" />
              100% pensando em você
            </li>
          </ul>
          <div className="open-Account">
            <NavLink to="/register">Abrir uma conta</NavLink>
            <div>
              <img src={imageHome.vect} alt="" />
              <img src={imageHome.subtract} alt="" />
            </div>
          </div>
        </div>
        <div className="image-card">
          <img src={imageHome.card} alt="" />
        </div>
      </div>
      <div className="home-app">
        <div className="smartphone">
          <img src={imageHome.check} alt="" className="check" />
          <img src={imageHome.heart} alt="" className="heart" />
          <img src={imageHome.mouse} alt="" className="mouse" />
          <img src={imageHome.app} alt="" className="smart" />
        </div>
        <div className="container-description">
          <h2>
            Abra sua conta <span>gratuita</span>!
          </h2>
          <span>
            Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,
            TEDs e transferências para todos os bancos sem pagar nada.
          </span>

          <div>
            <div className="box">
              <img src={imageHome.dollar} alt="" />
              <div>
                <h4>Seu dinheiro rendendo mais</h4>
                <p>Rendem mais que a poupança e você resgata quando quiser</p>
              </div>
            </div>{' '}
            <div className="box">
              <img src={imageHome.smartphone} alt="" />
              <div>
                <h4>Seu dinheiro rendendo mais</h4>
                <p>Rendem mais que a poupança e você resgata quando quiser</p>
              </div>
            </div>{' '}
            <div className="box">
              <img src={imageHome.smile} alt="" />
              <div>
                <h4>Seu dinheiro rendendo mais</h4>
                <p>Rendem mais que a poupança e você resgata quando quiser</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
