import { useState } from "react";
import styled from "styled-components";

export default function Seat({
  seatId,
  seatNumber,
  seatAvailable,
  setSelectSeats,
  selectSeats,
  seatsName,
  setSeatsName,
}) {
  const [seat, setSeat] = useState(true);

  switch (seatAvailable) {
    case true:
      if (seat) {
        return (
          <SeatAvailable
            available={seat}
            border={seat}
            onClick={() => {
              setSeat(!seat);
              setSelectSeats([...selectSeats, seatId]);
              setSeatsName([...seatsName, seatNumber]);
            }}
          >
            {seatNumber}
          </SeatAvailable>
        );
      } else if (!seat) {
        return (
          <SeatAvailable
            available={seat}
            border={seat}
            onClick={() => {
              setSeat(!seat);
              setSelectSeats((e) =>
                e.filter((seat) => {
                  return seat !== seatId;
                })
              );
              setSeatsName((e) =>
                e.filter((seat) => {
                  return seat !== seatNumber;
                })
              );
            }}
          >
            {seatNumber}
          </SeatAvailable>
        );
      }
      break;
    case false:
      return <SeatUnavailable onClick={ () => {alert("Esse assento não está disponível")}}>{seatNumber}</SeatUnavailable>;
    default:
      return null;
  }
}

const SeatAvailable = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 12px;
  color: black;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => (props.available ? "#C3CFD9" : "#8DD7CF")};
  border: ${(props) =>
    props.border ? "1px solid #808F9D" : "1px solid #45BDB0"};
`;

const SeatUnavailable = styled(SeatAvailable)`
  background: #fbe192;
  border: 1px solid #f7c52b;
`;
