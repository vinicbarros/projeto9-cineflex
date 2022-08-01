import styled from "styled-components";

export default function Movies({ movieURL }) {
  return (
    <Movie>
      <img src={movieURL} alt="Poster" />
    </Movie>
  );
}

const Movie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 145px;
  height: 209px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  img {
    width: 129px;
    height: 193px;
  }
`;
