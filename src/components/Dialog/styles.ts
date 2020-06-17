import styled, { css } from 'styled-components';

export const Container = styled.div`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `};
`;

export const DialogContainer = styled.div`
  height: 20vh;
  z-index: 2;
  width: 50vw;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 0;
  -webkit-animation: slideIn 0.2s forwards;
  animation: slideIn 0.2s forwards;
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `};

  @-webkit-keyframes slideIn {
    100% {
      left: 25%;
    }
  }

  @keyframes slideIn {
    100% {
      left: 25%;
    }
  }
`;
