import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 2px #fff;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    & + li {
      margin-right: 8px;
    }

    li {
      padding: 24px;
      transition: background-color 0.2s;

      strong {
        text-transform: uppercase;
      }
    }

    li:hover {
      cursor: pointer;
      background-color: ${darken(0.3, '#e8e3f4')};
    }
  }
`;
