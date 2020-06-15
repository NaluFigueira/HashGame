import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import GameSection from './components/GameSection';
import { GameMode } from './components/GameSection/types';

const App: React.FC = () => (
  <>
    <Header />
    <GameSection mode={GameMode.HumanoVSComputador} />
    <GlobalStyle />
  </>
);

export default App;
