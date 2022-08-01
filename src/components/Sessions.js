import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Session({ weekDay, date, time }) {
  let [hourOne, hourTwo] = time;

  return (
    <SessionBox>
      <Wrapper>
        <h5>
          {weekDay} - {date}
        </h5>
        <div>
          <Link to={`/assentos/${hourOne.id}`}>
            <button>{hourOne.name}</button>
          </Link>
          <Link to={`/assentos/${hourTwo.id}`}>
            <button>{hourTwo.name}</button>
          </Link>
        </div>
      </Wrapper>
    </SessionBox>
  );
}

const SessionBox = styled.section`
  margin-left: 24px;

  h5 {
    font-weight: 400;
    font-size: 20px;
    color: #293845;
  }

  & + & {
    margin-top: 24px;
  }
`;

const Wrapper = styled.div`
  div {
    margin-top: 22px;
  }

  button {
    width: 83px;
    height: 43px;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
  }

  button:first-child {
    margin-right: 10px;
  }
`;
