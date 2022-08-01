import styled from "styled-components";

export default function Footer({ posterUrl, title, children }) {
  return (
    <>
      <FooterContent>
        <div>
          <img src={posterUrl} alt="" />
        </div>
        <div>
          <h3>{title}</h3>
          <h3>{children}</h3>
        </div>
      </FooterContent>
    </>
  );
}

const FooterContent = styled.footer`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 117px;
  background: #dfe6ed;
  border: 1px solid #9eadba;

  div:first-child {
    margin-left: 20px;
    margin-right: 20px;
    width: 64px;
    height: 89px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }

  div:first-child img {
    width: 48px;
    height: 72px;
  }

  h3 {
    color: #293845;
    font-weight: 400;
    font-size: 26px;
  }
`;
