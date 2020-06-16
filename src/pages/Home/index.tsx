import React, { useState } from 'react';
import Header from '../../components/Header';
import GameSection from '../../components/GameSection';
import HistorySection from '../../components/HistorySection';

const Home: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('JOGO');

  return (
    <>
      <Header
        onSelectSection={setSelectedSection}
        selectedSection={selectedSection}
      />
      {selectedSection === 'JOGO' ? <GameSection /> : <HistorySection />}
    </>
  );
};

export default Home;
