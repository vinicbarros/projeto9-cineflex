import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./MainPage.css";

import Movie from "../MainMovies/Movies.js";
import Loading from "../Loading/Loading";

export default function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((data) => {
      setMovies(data.data);
    });
  }, []);

  return (
    <section className="mainPage">
      <h1>Selecione o filme</h1>
      {movies.length === 0 ? (
        <>
        <Loading />
        <h2>Loading...</h2>
        </>
      ) : (
        <div className="wrap">
          {movies.map((movie, index) => (
            <Link to={`/sessoes/${movie.id}`}>
                <Movie key={index} movieURL={movie.posterURL} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
