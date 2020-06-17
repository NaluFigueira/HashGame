/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FiCircle } from 'react-icons/fi';
import { FaUndo } from 'react-icons/fa';

import { Container, HashGrid, HashCell, GameMenu, Restart } from './styles';
import { CellContentType, GameMode } from './types';
import Dialog from '../Dialog';

const { EMPTY, CIRCLE, X } = CellContentType;
const { HumanoVSHumano, ComputadorVSHumano, HumanoVSComputador } = GameMode;
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

const GameSection: React.FC = () => {
  const [mode, setMode] = useState<GameMode>(HumanoVSHumano);
  const [roundResult, setRoundResult] = useState<string>('');
  const [currentPlayer, setCurrentPlayer] = useState<number>(CIRCLE);
  const [cells, setCells] = useState<Array<CellContentType>>(
    new Array(9).fill(EMPTY),
  );

  const restart = () => {
    setCurrentPlayer(CIRCLE);
    setCells(new Array(9).fill(EMPTY));
  };

  const checkIfPlayerWon = (): boolean => {
    let playerWon = true;
    possibleCombinations.some((combination) => {
      playerWon = true;
      combination.forEach((cellIndex) => {
        if (cells[cellIndex] !== currentPlayer) playerWon = false;
      });

      return playerWon;
    });
    return playerWon;
  };

  const generateResultMessage = (isTie = false): string => {
    if (isTie) return 'EMPATE!';
    if (mode === HumanoVSHumano) return `PLAYER ${currentPlayer} GANHOU!`;
    return currentPlayer === mode ? 'VOCÊ PERDEU!' : 'VOCÊ GANHOU!';
  };

  useEffect(() => {
    if (cells.includes(CIRCLE) || cells.includes(X)) {
      if (checkIfPlayerWon()) {
        setRoundResult(generateResultMessage());
        setCurrentPlayer(EMPTY);
      } else if (!cells.includes(EMPTY)) {
        setRoundResult(generateResultMessage(true));
        setCurrentPlayer(EMPTY);
      } else setCurrentPlayer(currentPlayer === CIRCLE ? X : CIRCLE);
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
    if (currentPlayer === EMPTY) {
      restart();
    }
    if (mode !== HumanoVSHumano && currentPlayer === mode) {
      handleSelectCell(chooseRandomCell());
    }
  }, [currentPlayer]);

  const handleChangeMode = (selectedMode: number) => {
    setCurrentPlayer(EMPTY);
    setMode(selectedMode);
  };

  return (
    <>
      <Dialog
        open={roundResult !== ''}
        message={roundResult}
        onClose={() => setRoundResult('')}
      />
      <Container>
        <GameMenu>
          <div>
            <select
              defaultValue={HumanoVSHumano}
              onChange={(event) => handleChangeMode(Number(event.target.value))}
            >
              <option value={HumanoVSHumano}>HUMANO VS HUMANO</option>
              <option value={ComputadorVSHumano}>COMPUTADOR VS HUMANO</option>
              <option value={HumanoVSComputador}>HUMANO VS COMPUTADOR</option>
            </select>

            <Restart onClick={() => restart()}>
              <FaUndo size={16} color="white" />
              <strong>REINICIAR</strong>
            </Restart>
          </div>
        </GameMenu>
        <HashGrid>
          {cells.map((cell, index) => (
            <HashCell key={index} onClick={() => handleSelectCell(index)}>
              {cell === CIRCLE && <FiCircle size={64} color="white" />}
              {cell === X && <IoMdClose size={80} color="white" />}
            </HashCell>
          ))}
        </HashGrid>
      </Container>
    </>
  );
};

export default GameSection;
