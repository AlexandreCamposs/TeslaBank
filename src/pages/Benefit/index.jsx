import useImageBenefit from '../../hooks/useImageBenefit';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Benefit = () => {
  const imageBenefit = useImageBenefit();
  console.log(imageBenefit);
  return (
    <div>
      <div className="container-inovation">
        <span className="inovation">#INOVAÇÃO</span>
        <h1>
          Quais as vantagens <br /> de usar <span>TeslaBank</span>?
        </h1>
        <div className="container-benefit">
          <div>
            <img src={imageBenefit.credit} alt="" />
            <h4>Cartão TeslaBank</h4>
            <p>
              O Cartão TeslaBank é um cartão de crédito exclusivo para clientes
              da TeslaBank, uma instituição financeira líder em inovação e
              tecnologia.
            </p>
            <NavLink to="/error">Veja as opções</NavLink>
          </div>
          <div>
            <img src={imageBenefit.shopping} alt="" />
            <h4>Cartão TeslaBank</h4>
            <p>
              O Cartão TeslaBank é um cartão de crédito exclusivo para clientes
              da TeslaBank, uma instituição financeira líder em inovação e
              tecnologia.
            </p>
            <NavLink to="/error">Conheça os investimentos</NavLink>
          </div>
          <div>
            <img src={imageBenefit.clock} alt="" />
            <h4>Cartão TeslaBank</h4>
            <p>
              O Cartão TeslaBank é um cartão de crédito exclusivo para clientes
              da TeslaBank, uma instituição financeira líder em inovação e
              tecnologia.
            </p>
            <NavLink to="/error">Veja as opções</NavLink>
          </div>
          <div className="empty"></div>
        </div>
        <div className="container-benefit2">
          <div className="empty"></div>
          <div>
            <img src={imageBenefit.shield} alt="" />
            <h4>Cartão TeslaBank</h4>
            <p>
              O Cartão TeslaBank é um cartão de crédito exclusivo para clientes
              da TeslaBank, uma instituição financeira líder em inovação e
              tecnologia.
            </p>
            <NavLink to="/error">Conheça seguranças</NavLink>
          </div>
          <div>
            <img src={imageBenefit.percent} alt="" />
            <h4>Cartão TeslaBank</h4>
            <p>
              O Cartão TeslaBank é um cartão de crédito exclusivo para clientes
              da TeslaBank, uma instituição financeira líder em inovação e
              tecnologia.
            </p>
            <NavLink to="/error">Como funciona</NavLink>
          </div>
          <div>
            <img src={imageBenefit.gift} alt="" />
            <h4>Cartão TeslaBank</h4>
            <p>
              O Cartão TeslaBank é um cartão de crédito exclusivo para clientes
              da TeslaBank, uma instituição financeira líder em inovação e
              tecnologia.
            </p>
            <NavLink to="/error">Veja como</NavLink>
          </div>
        </div>
      </div>
      <div className="container-depositions">
        <span>#Depoimentos</span>
        <h2>TeslaBank fora das telinhas:</h2>
        <p className="text">Veja o que estão falando sobre nós.</p>
        <div className="depositions">
          <div className="box">
            <h4>NIKOLA TESLA</h4>
            <p>
              Estou realmente impressionado com a qualidade do serviço do
              TeslaBank. Desde que comecei a usá-lo, todas as minhas transações
              financeiras ficaram mais fáceis e ágeis.
            </p>
          </div>
          <div className="box">
            <h4>STEVE JOBS</h4>
            <p>
              O TeslaBank é uma verdadeira revolução no mundo financeiro. Eu não
              preciso mais enfrentar filas em agências bancárias ou lidar com
              taxas e tarifas absurdas.
            </p>
          </div>
          <div className="box">
            <h4>ALAN TURING</h4>
            <p>
              Eu era bastante cético em relação ao banco digital, mas decidi
              experimentar por curiosidade. Fiquei surpreso com a facilidade e
              segurança das transações, além de todas as funcionalidades
              exclusivas oferecidas.
            </p>
          </div>
        </div>
      </div>
      <div className="container-cards">
        <span>CARTÕES</span>
        <h2>
          Cartão perfeito <br />
          para suas necessidades.
        </h2>
        <p>
          Encontre o cartão perfeito para suas necessidades financeiras. Seja
          para viagens ou compras do dia a dia, temos uma opção que se adapta a
          você.
        </p>
        <img src={imageBenefit.cards} alt="" />
        <div>
          <NavLink to="/register" className="register">
            Abrir uma conta
          </NavLink>
          <NavLink to="error">Comparar cartões</NavLink>
        </div>
      </div>
      <div className="container-experience">
        <div className="experience">
          <h2>
            Uma nova experiência <br />
            em <span>serviçõs financeiros</span>
          </h2>
          <p>
            Nossa abordagem inovadora e personalizada oferece uma experiência
            única para atender às suas necessidades.
          </p>
          <div className="box">
            <img src={imageBenefit.app} alt="" />
            <img src={imageBenefit.android} alt="" />
          </div>
        </div>
        <div className="logo-union">
          <img src={imageBenefit.union} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
