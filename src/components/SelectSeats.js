import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading/Loading";
import Seat from "./Seat";
import styled from "styled-components";
import Footer from "./Footer";
import BackButton from "./BackButton";

export default function SelectSeats() {
  const [sessionSeats, setSessionSeats] = useState([]);
  const [selectSeats, setSelectSeats] = useState([]);
  const [seatsName, setSeatsName] = useState([]);
  const { idSessao } = useParams();

  let { seats } = sessionSeats;

  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  let navigate = useNavigate();

  function doReserve(e) {
    e.preventDefault();
    if (selectSeats.length === 0) {
      return alert("escolha um assento!");
    }

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      {
        ids: selectSeats,
        name: name,
        cpf: document,
      }
    );
    promise.then(() => {
      navigate("/sucesso", {
        replace: false,
        state: {
          ids: seatsName,
          name: name,
          cpf: document,
          title: sessionSeats.movie.title,
          time: sessionSeats.name,
          date: sessionSeats.day.date,
        },
      });
      resetForm();
    });
  }

  function resetForm() {
    setName("");
    setDocument("");
  }

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((seatsData) => {
      setSessionSeats(seatsData.data);
    });
  }, [idSessao]);

  return (
    <>
      {sessionSeats.length === 0 ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <BackButton urlBack={`/sessoes/${sessionSeats.movie.id}`}/>
          <SeatsBox>
            <h1>Selecione o(s) assento(s)</h1>
            <SeatsContent>
              {seats.map((seat, index) => (
                <Seat
                  seatId={seat.id}
                  seatNumber={seat.name}
                  seatAvailable={seat.isAvailable}
                  key={index}
                  setSelectSeats={setSelectSeats}
                  selectSeats={selectSeats}
                  seatsName={seatsName}
                  setSeatsName={setSeatsName}
                />
              ))}
            </SeatsContent>
            <Instructions>
              <div className="circle">
                <div></div>
                <p>Selecionado</p>
              </div>
              <div className="circle">
                <div></div>
                <p>Disponível</p>
              </div>
              <div className="circle">
                <div></div>
                <p>Indisponível</p>
              </div>
            </Instructions>
          </SeatsBox>
          <BuyerInfo>
            <form onSubmit={doReserve}>
              <label htmlFor="nameBuyer">Nome do comprador:</label>
              <input
                required
                id="nameBuyer"
                type="text"
                value={name}
                placeholder="Digite seu nome..."
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="cpfBuyer" type="text">
                CPF do comprador:
              </label>
              <input
                required
                id="cpfBuyer"
                value={document}
                placeholder="Digite seu CPF... Ex: 123.456.789-10"
                onChange={(e) => setDocument(e.target.value)}
                pattern="^([0-9]){3}.([0-9]){3}.([0-9]){3}-([0-9]){2}$"
              />
              <button type="submit">Reservar assento(s)</button>
            </form>
          </BuyerInfo>
          <Footer posterUrl={sessionSeats.movie.posterURL} title={sessionSeats.movie.title}>
          {<h3>{sessionSeats.day.weekday} - {sessionSeats.name}</h3>}
          </Footer>
        </>
      )}
    </>
  );
}

const SeatsBox = styled.section`
  margin-top: 70px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    color: #293845;
    font-size: 24px;
    font-weight: 400;
    margin-block: 35px;
  }
`;

const SeatsContent = styled.div`
  width: 92vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const Instructions = styled.div`
  display: flex;
  margin-top: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div + div {
    margin-left: 40px;
  }

  div > div {
    width: 25px;
    height: 25px;
    border-radius: 17px;
  }

  div p {
    margin-top: 10px;
    color: #4e5a65;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    text-align: center;
  }

  div:nth-child(1) div {
    background: #8dd7cf;
    border: 1px solid #1aae9e;
  }
  div:nth-child(2) div {
    background: #c3cfd9;
    border: 1px solid #7b8b99;
  }
  div:nth-child(3) div {
    background: #fbe192;
    border: 1px solid #f7c52b;
  }
`;

const BuyerInfo = styled.section`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 127px;

  form {
    width: 92vw;
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 400;
    font-size: 18px;
    color: #293845;
    margin-block: 10px;
  }

  input {
    height: 51px;
    margin-bottom: 10px;
  }

  input::placeholder {
    padding-left: 6px;
    font-style: italic;
    color: #AFAFAF;
    font-size: 18px;
    font-weight: 400;
  }

  button {
    margin-top:25px;
    align-self: center;
    color: #FFFFFF;
    font-size: 18px;
    width: 225px;
    height: 42px;
    background: #e8833a;
    border-radius: 3px;
    border: none;
  }

`;
