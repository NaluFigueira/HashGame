import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FiCircle } from 'react-icons/fi';

import { Container, HashGrid, HashCell } from './styles';
import { CellContentType, GameSectionProps, GameMode } from './types';

const { EMPTY, CIRCLE, X } = CellContentType;
const { HumanoVSHumano, ComputadorVSHumano } = GameMode;
const possibleCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const GameSection: React.FC<GameSectionProps> = ({ mode }) => {
  const [currentPlayer, setCurrentPlayer] = useState<number>(CIRCLE);
  const [cells, setCells] = useState<Array<CellContentType>>(
    new Array(9).fill(EMPTY),
  );

  useEffect(() => {
    if (mode === ComputadorVSHumano) {
      const initialCells = new Array(9).fill(EMPTY);
      const randomIndex = Math.round(Math.random() * 8);
      initialCells[randomIndex] = currentPlayer;
      setCells(initialCells);
    }
  }, []);

  const checkIfPlayerWon = (): boolean => {
    let playerWon = true;
    possibleCombinations.some((combination) => {
      playerWon = true;
      combination.forEach((cellIndex) => {
        if (cells[cellIndex] !== currentPlayer) playerWon = false;
      });
      if (playerWon) return true;
      if (mode !== HumanoVSHumano) {
        playerWon = true;
        combination.forEach((cellIndex) => {
          if (cells[cellIndex] !== (mode as number)) playerWon = false;
        });
      }
      return playerWon;
    });
    return playerWon;
  };

  useEffect(() => {
    if (cells.includes(CIRCLE) || cells.includes(X)) {
      if (checkIfPlayerWon()) alert('GANHOU');
      else setCurrentPlayer(currentPlayer === CIRCLE ? X : CIRCLE);
    }
  }, [cells]);

  const chooseRandomCell = (): number => {
    let randomIndex = Math.round(Math.random() * 8);
    while (cells[randomIndex] !== EMPTY)
      randomIndex = Math.round(Math.random() * 8);
    return randomIndex;
  };

  const handleSelectCell = (selectedCellIndex: number) => {
    const cellsCopy = [...cells];
    if (cellsCopy[selectedCellIndex] === EMPTY) {
      cellsCopy[selectedCellIndex] = currentPlayer;
      setCells(cellsCopy);
    }
  };

  useEffect(() => {
    if (mode !== HumanoVSHumano && currentPlayer === (mode as number)) {
      handleSelectCell(chooseRandomCell());
    }
  }, [currentPlayer]);

  return (
    <Container>
      <HashGrid>
        {cells.map((cell, index) => (
          <HashCell key={index} onClick={() => handleSelectCell(index)}>
            {cell === CIRCLE && <FiCircle size={64} color="white" />}
            {cell === X && <IoMdClose size={80} color="white" />}
          </HashCell>
        ))}
      </HashGrid>
    </Container>
  );
};

export default GameSection;
