import styled from "styled-components/macro";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
  color: white;
  font-size: 25px;
  white-space: pre-line;

  @media (min-width: 667px) {
    font-size: 37px;
  }

  @media (min-width: 1024px) {
    text-align: center;
    color: white;
    font-size: 37px;
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

export const NavButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`;

export const NavButtonIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 4px;
`;

export const NextButton = styled.button`
  border-radius: 50%;
  border: none;
  background-color: rgba(206, 212, 218, 0.6);
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

export const ProgressContainer = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(206, 212, 218, 0.6);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
`;

export const ProgressStatus = styled.div`
  width: ${(props) => props.width};
  background: linear-gradient(
    90deg,
    rgba(202, 240, 248, 0.6) 0%,
    rgba(144, 224, 239, 0.6) 100%
  );
  transition: width 1s ease-in-out;
  height: 100%;
  position: absolute;
  top: 0;
`;
