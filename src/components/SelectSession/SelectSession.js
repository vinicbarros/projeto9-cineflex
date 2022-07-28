import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./SelectSession.css";
import Session from "../Sessions/Sessions";
import Loading from "../Loading/Loading";

export default function Sessions() {
  const [sessionMovie, setSessionMovie] = useState([]);
  const { idFilme } = useParams();
  console.log(sessionMovie);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((session) => {
      setSessionMovie(session.data);
    });
  }, [idFilme]);

  return (
    <>
    <section className="sessions">
      {sessionMovie.length === 0 ? (
        <>
          <Loading />
          <h2>Loading...</h2>
        </>
      ) : (
        <>{sessionMovie.days.map((day) => <Session weekDay={day.weekday} date={day.date} time={day.showtimes}/>)}</>
      )}
    </section>
    <header>
        <div>
            <img src={sessionMovie.posterURL} alt=""/>
        </div>
        <h3>{sessionMovie.title}</h3>
    </header>
    </>
  );
}
