import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HashGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-self: center;
  width: 45vw;
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
  border: 2px solid #e8e3f4;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: ${darken(0.3, '#e8e3f4')};
  }
`;
