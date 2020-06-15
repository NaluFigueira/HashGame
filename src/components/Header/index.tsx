import React from 'react';

import { Container, SelectedSection } from './styles';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({
  selectedSection,
  onSelectSection,
}) => {
  return (
    <Container>
      <ul>
        <SelectedSection
          selected={selectedSection === 'JOGO'}
          onClick={() => onSelectSection('JOGO')}
        >
          <strong>Jogo</strong>
        </SelectedSection>
        <SelectedSection
          selected={selectedSection === 'HISTÓRICO'}
          onClick={() => onSelectSection('HISTÓRICO')}
        >
          <strong>Histórico</strong>
        </SelectedSection>
      </ul>
    </Container>
  );
};

export default Header;
