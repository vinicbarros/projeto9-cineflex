import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Movie from "./Movies.js";
import Loading from "./Loading/Loading";
import styled from "styled-components";

export default function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );

    promise.then((data) => {
      setMovies(data.data);
    });
  }, []);

  return (
    <>
      {movies.length === 0 ? (
        <>
          <Loading />
        </>
      ) : (
        <MoviesContent>
          <h1>Selecione o filme</h1>
          <div className="wrap">
            {movies.map((movie, index) => (
              <Link to={`/sessoes/${movie.id}`}>
                <Movie key={index} movieURL={movie.posterURL} />
              </Link>
            ))}
          </div>
        </MoviesContent>
      )}
    </>
  );
}

const MoviesContent = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
    color: #293845;
    font-size: 24px;
    font-weight: 400;
    margin-block: 35px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
  }
`;
