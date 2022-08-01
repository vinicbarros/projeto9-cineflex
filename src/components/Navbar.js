import styled from "styled-components";

export default function Navbar() {
  return (
    <NavBarBox>
      <h1>CINEFLEX</h1>
    </NavBarBox>
  );
}

const NavBarBox = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 67px;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;

  h1 {
    color: #e8833a;
    font-size: 34px;
    font-weight: 400;
    text-align: center;
  }
`;
