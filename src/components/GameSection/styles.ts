import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GameMenu = styled.div`
  width: 100%;
  margin-bottom: 15px;

  div {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    select {
      padding: 10px;
      background: transparent;
      border: 2px solid #e8e3f4;
      color: #fff;

      option {
        background-color: #8162cc;
        color: #fff;
      }
    }
  }
`;

export const Restart = styled.div`
  padding: 12px;
  transition: background-color 0.2s;
  text-align: center;
  flex-direction: row !important;

  strong {
    margin-left: 5px;
    text-transform: uppercase;
  }

  &:hover {
    cursor: pointer;
    background-color: ${darken(0.3, '#e8e3f4')};
  }
`;

export const HashGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-self: center;
  width: 90vw;
  > div:nth-child(1) {
    border-top-width: 0px;
    border-left-width: 0px;
  }

  > div:nth-child(2) {
    border-top-width: 0px;
  }

  > div:nth-child(3) {
    border-top-width: 0px;
    border-right-width: 0px;
  }

  > div:nth-child(4) {
    border-left-width: 0px;
  }

  > div:nth-child(6) {
    border-right-width: 0px;
  }

  > div:nth-child(7) {
    border-bottom-width: 0px;
    border-left-width: 0px;
  }

  > div:nth-child(8) {
    border-bottom-width: 0px;
  }

  > div:nth-child(9) {
    border-bottom-width: 0px;
    border-right-width: 0px;
  }
`;

export const HashCell = styled.div`
  height: 20vh;
  width: 30vw;
  border: 2px solid #e8e3f4;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${darken(0.3, '#e8e3f4')};
  }

  svg {
    opacity: 0;
    animation: fadeIn 0.3s forwards;

    @keyframes fadeIn {
      100% {
        opacity: 1;
      }
    }
  }
`;
