import styled from "styled-components/macro";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-family: Calibri;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 12px;
  color: #fff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #fff,
      0 0 82px #fff,
      0 0 92px #14c0dc,
      0 0 102px #14c0dc,
      0 0 151px #14c0dc;
  animation: flicker 1.5s infinite alternate;     
  margin-top: 20px;
  text-align: center;
  font-size: 28px;
  white-space: pre-line;

  @media (min-width: 667px) {
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    text-align: center;
    color: white;
    font-size: 44px;
  }

  @keyframes flicker {
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #fff,
        0 0 80px #fff,
        0 0 90px #14c0dc,
        0 0 100px #14c0dc,
        0 0 150px #14c0dc;
    }
    20%, 24%, 55% {        
        text-shadow: none;
    }    
  }
`;

export const Title = styled.h2`
  margin-top: 20px;
  text-align: center;
  color: white;
  font-size: 20px;
  white-space: pre-line;

  @media (min-width: 667px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 28px;
  }

  p {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  width: 325px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 667px) {
    width: 600px;
  }

  @media (min-width: 1024px) {
    width: 950px;
    gap: 100px;
  }
`;

export const ButtonContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  margin: 5rem 0 2rem 0;
  gap: 20px;
  justify-items: center;

  @media (min-width: 667px) {
    align-items: center;
    margin: 8rem 0 3rem 0;
    gap: 70px;
  }

  @media (min-width: 1024px) {
    width: 850px;
    margin: 0 auto;
    display: flex;
    gap: 15px;
  }
`;

export const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  width: 130px;
  align-self: stretch;
  padding: 20px 18px;
  font-size: 18px;
  background-color: ${(props) => props.BgColor};
  color: white;
  font-weight: bold;
  border-radius: 0%;
  border: 1px solid white;

  &:hover:not([disabled]) {
    background-color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease;
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    width: 260px;
    font-size: 22px;
    min-height: 100px;
  }

  @media (min-width: 1024px) {
    width: 360px;
    min-height: 90px;
  }
`;

export const Nextbutton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 5rem;
  min-height: 0;
  width: fit-content;
`

export const NextbuttonContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
`;

export const NavButtonIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 4px;
`;

export const SummaryDiv = styled.div`
  color: white;
  width: 100%;
  margin: 3vh 0;

  h1 {
    text-align: center;
  }
`;

export const QADiv = styled.div`
  width: 100%;
  margin: 1rem 0;
  white-space: pre-line;

  h1 {
    font-size: 1.75rem;
    text-align: center;
  }
  h2 {
    font-size: 1.5rem;
    text-align: left;
    padding-bottom: 0.313rem;
  }
  h3 {
    text-align: center;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;
