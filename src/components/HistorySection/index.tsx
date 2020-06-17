import React, { useEffect, useState } from 'react';

import { IoMdPerson, IoMdClose } from 'react-icons/io';
import { MdComputer } from 'react-icons/md';
import { Container, ModeLabelContainer } from './styles';
import { Round, GameMode } from '../GameSection/types';

const HistorySection: React.FC = () => {
  const [rounds, setRounds] = useState<Array<Round>>([]);

  useEffect(() => {
    const storageRounds = localStorage.getItem('@HashGame:rounds');
    if (storageRounds) {
      setRounds(JSON.parse(storageRounds));
    }
  }, []);

  function getModeLabel(mode: GameMode) {
    switch (mode) {
      case GameMode.HumanoVSHumano:
        return (
          <ModeLabelContainer>
            <IoMdPerson />
            <IoMdClose />
            <IoMdPerson />
          </ModeLabelContainer>
        );
      case GameMode.ComputadorVSHumano:
        return (
          <ModeLabelContainer>
            <MdComputer size={18} style={{ marginRight: 3 }} />
            <IoMdClose />
            <IoMdPerson />
          </ModeLabelContainer>
        );
      default:
        return (
          <ModeLabelContainer>
            <IoMdPerson />
            <IoMdClose />
            <MdComputer size={18} style={{ marginLeft: 3 }} />
          </ModeLabelContainer>
        );
    }
  }

  return (
    <Container>
      {rounds.length === 0 && <h2>Não foram registradas partidas ainda!</h2>}
      {rounds.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Horário</th>
              <th>Modo</th>
              <th>Vencedor</th>
            </tr>
          </thead>
          <tbody>
            {rounds.map((round: Round) => (
              <tr key={round.date}>
                <td>{round.date}</td>
                <td>{getModeLabel(round.gameMode)}</td>
                <td>{round.winner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
};

export default HistorySection;
