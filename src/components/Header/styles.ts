import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { SelectedSectionProps } from './types';

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
  }
`;

export const SelectedSection = styled.li<SelectedSectionProps>`
  padding: 24px;
  transition: background-color 0.2s;
  text-align: center;

  ${(props) =>
    props.selected &&
    css`
      background-color: ${darken(0.3, '#e8e3f4')};
    `}

  strong {
    text-transform: uppercase;
  }

  &:hover {
    cursor: pointer;
    background-color: ${darken(0.3, '#e8e3f4')};
  }
`;
