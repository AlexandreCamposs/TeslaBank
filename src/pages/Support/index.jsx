import useImageSupport from '../../hooks/useImageSupport';

import './styles.scss';

const Support = () => {
  const imageSupport = useImageSupport();
  console.log(imageSupport);
  return (
    <div className="container-support">
      <div className="support">
        <span>#AJUDA</span>
        <h1>Ficou alguma dúvida? </h1>
        <p>Confira nossa lista de perguntas frequentes que recebemos</p>
      </div>
      <div className="box">
        <img src={imageSupport.smartphone} alt="" />
        <p>Como posso abrir uma conta bancária?</p>
        <img src={imageSupport.vect} alt="" />
      </div>
      <div className="box">
        <img src={imageSupport.smartphone} alt="" />
        <p>Qual é o meu saldo atual?</p>
        <img src={imageSupport.vect} alt="" />
      </div>
      <div className="box">
        <img src={imageSupport.smartphone} alt="" />
        <p>Como faço para transferir dinheiro para outra conta?</p>
        <img src={imageSupport.vect} alt="" />
      </div>
    </div>
  );
};

export default Support;
