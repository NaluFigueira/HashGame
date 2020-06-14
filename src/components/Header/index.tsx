import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <strong>Jogo</strong>
        </li>
        <li>
          <strong>Histórico</strong>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
