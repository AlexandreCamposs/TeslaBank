import useImageBenefit from '../../hooks/useImageBenefit';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Benefit = () => {
  const imageBenefit = useImageBenefit();

  const [benefit, setBenefit] = useState([
    {
      img: imageBenefit.credit,
      title: 'Cartão TeslaBank',
      description:
        ' O Cartão TeslaBank é um cartão de crédito exclusivo para clientes da TeslaBank, uma instituição financeira líder em inovação e tecnologia.',
      Navigate: 'VEJA OPÇÕES',
    },
    {
      img: imageBenefit.shopping,
      title: 'Investimentos',
      description:
        ' O cartão também oferece diversos benefícios, como descontos em taxas de corretagem, acesso a fundos de investimento exclusivos e cashback em investimentos.',
      Navigate: 'CONHEÇA OS INVESTIMENTOS',
    },
    {
      img: imageBenefit.clock,
      title: 'Atendimento 24h',
      description:
        ' No TeslaBank, os usuários têm acesso a um atendimento ao cliente sempre disponível, 24 horas por dia, 7 dias por semana. ',
      Navigate: 'VEJA AS OPÇÕES',
    },
    {
      img: '',
      title: ' ',
      description: '  ',
    },

    {
      img: '',
      title: ' ',
      description: '',
    },
    {
      img: imageBenefit.shield,
      title: 'Segurança',
      description:
        ' Os usuários contam com sistemas avançados de segurança, como verificação de identidade, monitoramento de transações e notificações de uso não autorizado.',
      Navigate: 'CONHEÇA AS SEGURANÇAS',
    },
    {
      img: imageBenefit.percent,
      title: 'Sem taxas',
      description:
        ' Com o cartão TeslaBank, os usuários podem aproveitar ao máximo seus recursos financeiros, sem se preocupar com custos adicionais ou taxas escondidas.',
      Navigate: 'COMO FUNCIONA',
    },
    {
      img: imageBenefit.gift,
      title: 'Receba prêmios',
      description:
        ' Os usuários têm acesso a um programa de recompensas que oferece pontos a cada transação realizada com o cartão, que podem ser trocados por diversos prêmios.',
      Navigate: 'VEJA COMO',
    },
  ]);
  const [depositions, setDepositions] = useState([
    {
      title: 'NIKOLA TESLA',
      description:
        'Estou realmente impressionado com a qualidade do serviço do TeslaBank. Desde que comecei a usá-lo, todas as minhas transações financeiras ficaram mais fáceis e ágeis.',
    },
    {
      title: 'STEVE JOBS',
      description:
        'O TeslaBank é uma verdadeira revolução no mundo financeiro. Eu não preciso mais enfrentar filas em agências bancárias ou lidar com taxas e tarifas absurdas.',
    },
    {
      title: 'ALAN TURING',
      description:
        'Eu era bastante cético em relação ao banco digital, mas decidi experimentar por curiosidade. Fiquei surpreso com a facilidade e segurança das transações, além de todas as funcionalidades exclusivas oferecidas.',
    },
  ]);
  return (
    <>
      <div className="container-inovation">
        <div>
          <span className="inovation">#INOVAÇÃO</span>
          <h1>
            Quais as vantagens <br /> de usar <span>TeslaBank</span>?
          </h1>
          <div className="container-benefit">
            {benefit.map((item) => (
              <div className="box">
                <div>
                  <img src={item.img} alt="" />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <NavLink to="/error">{item.Navigate}</NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-depositions">
        <span>#Depoimentos</span>
        <h2>TeslaBank fora das telinhas:</h2>
        <p className="text">Veja o que estão falando sobre nós.</p>
        <div className="depositions">
          {depositions.map((item) => (
            <div className="box">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
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
          <NavLink to="/error">Comparar cartões</NavLink>
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
    </>
  );
};

export default Benefit;
