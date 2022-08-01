import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Session from "./Sessions";
import Loading from "./Loading/Loading";
import styled from "styled-components";
import Footer from "./Footer";
import BackButton from "./BackButton";

export default function Sessions() {
  const [sessionMovie, setSessionMovie] = useState([]);
  const { idFilme } = useParams();
  
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((session) => {
      setSessionMovie(session.data);
    });
  }, [idFilme]);

  return (
    <>
      {sessionMovie.length === 0 ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <BackButton urlBack="/"/>
          <SessionsContent>
            <h1>Selecione o horário</h1>
            {sessionMovie.days.map((day, index) => (
              <Session
                weekDay={day.weekday}
                date={day.date}
                time={day.showtimes}
                key={index}
              />
            ))}
          </SessionsContent>
        </>
      )}
      <Footer posterUrl={sessionMovie.posterURL} title={sessionMovie.title} />
    </>
  );
}

const SessionsContent = styled.section`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-bottom: 250px;

  h1 {
    color: #293845;
    font-size: 24px;
    font-weight: 400;
    margin-block: 35px;
    text-align: center;
  }
`;
