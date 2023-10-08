import { useState } from 'react';
import useImageSupport from '../../hooks/useImageSupport';

import './styles.scss';

const Support = () => {
  const [questions, setQuestions] = useState([
    {
      title: 'Como posso abrir uma conta bancária?',
      description:
        'Para efetuar a abertura da conta, será necessário apresentar alguns documentos ao banco, tais como: CPF,RG, comprovante de residência.',
      showQuestion: false,
    },
    {
      title: 'Qual é o meu saldo atual?',
      description:
        'Entre em sua conta pelo app ou site, vá em perfil, conta, saldo, exibir saldo.',
      showQuestion: false,
    },
    {
      title: 'Como faço para transferir dinheiro para outra conta?',
      description:
        'Para fazer DOC ou TED, quem envia o dinheiro precisa do nome completo do beneficiário, CPF ou CNPJ.',
      showQuestion: false,
    },
  ]);
  const imageSupport = useImageSupport();

  const handleClick = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, i) =>
        i === index
          ? { ...question, showQuestion: !question.showQuestion }
          : question,
      ),
    );
  };
  return (
    <div className="container-support">
      <div className="support">
        <span>#AJUDA</span>
        <h1>Ficou alguma dúvida? </h1>
        <p>Confira nossa lista de perguntas frequentes que recebemos</p>
      </div>

      {questions.map((item, index) => (
        <div className="box" key={index}>
          <div>
            <div>
              <img src={imageSupport.smartphone} alt="" />
              <h4>{item.title}</h4>
            </div>
            <div onClick={() => handleClick(index)}>
              {item.showQuestion ? (
                <img src={imageSupport.iconClose} alt="" />
              ) : (
                <img src={imageSupport.iconOpen} alt="" />
              )}
            </div>
          </div>
          {item.showQuestion && <p>{item.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default Support;
