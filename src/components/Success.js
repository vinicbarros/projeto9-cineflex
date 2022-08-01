import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

export default function Success() {
  const { state } = useLocation();

  return (
    <SuccessBox>
      <h4>Pedido feito com sucesso!</h4>
      <div>
        <h3>Filme e sessão</h3>
        <p>{state.title}</p>
        <p>
          {state.date} {state.time}
        </p>
      </div>
      <div>
        <h3>Ingressos</h3>
        {state.ids.map((id) => (
          <p>Assentos {id}</p>
        ))}
      </div>
      <div>
        <h3>Comprador</h3>
        <p>Nome: {state.name}</p>
        <p>CPF: {state.cpf}</p>
      </div>
      <Link to="/">
      <button>Voltar pra home</button>
      </Link>
    </SuccessBox>
  );
}

const SuccessBox = styled.section`
  margin-top: 70px;
  display: flex;
  flex-direction: column;

  h4 {
    color: #247a6b;
    text-align: center;
    font-size: 24px;
    margin-block: 40px;
    font-weight: bold;
  }

  div {
    margin-left: 35px;
    margin-bottom: 35px;
  }

  h3 {
    margin-bottom: 10px;
    color: #293845;
    font-weight: 700;
    font-size: 24px;
  }

  p {
    color: #293845;
    font-weight: 400;
    font-size: 22px;
    margin-bottom: 5px
  }

  a{
    align-self: center;
  }

  button {
    margin-top: 40px;
    align-self: center;
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #FFFFFF;
  }
`;
