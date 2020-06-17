import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 5vh 5vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    font-weight: bold;
  }

  table {
    overflow: scroll;
    width: 100%;
    border-collapse: collapse;
  }

  table,
  th,
  td {
    border: 1px solid ${darken(0.1, '#e8e3f4')};
  }

  th,
  td {
    padding: 15px 0px;
  }

  td {
    text-align: center;
  }
`;

export const ModeLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
