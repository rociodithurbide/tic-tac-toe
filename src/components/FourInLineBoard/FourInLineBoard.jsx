import { useState } from 'react';
import Modal from '../Modal/Modal';
import Circle from '../Circle/Circle';
import Turn from '../Turn/Turn';
import { TURNS } from '../../constants';

const FourInLineBoard = () => {
  const [board, setBoard] = useState(
    Array(7)
      .fill(null)
      .map((index) => Array(6).fill(index))
  );
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(
      Array(7)
        .fill(null)
        .map((index) => Array(6).fill(index))
    );
    setTurn(TURNS.X);
    setWinner(null);
  };

  const checkWinner = (board, columnIndex, rowIndex) => {
    console.log('columnIndex ', columnIndex, 'rowIndex ', rowIndex);
    // Verificar si hay un ganador en la columna
    const column = board[columnIndex];
    const row = column[rowIndex];

    // Verificar si hay un ganador en la fila
    let count = 1;
    for (let i = columnIndex - 1; i >= 0; i--) {
      if (board[i][rowIndex] === row) {
        count++;
      } else {
        break;
      }
    }
    for (let i = columnIndex + 1; i < board.length; i++) {
      if (board[i][rowIndex] === row) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) {
      setWinner(row);
      return;
    }

    // Verificar si hay un ganador en la columna
    count = 1;
    for (let i = rowIndex - 1; i >= 0; i--) {
      if (column[i] === row) {
        count++;
      } else {
        break;
      }
    }
    for (let i = rowIndex + 1; i < column.length; i++) {
      if (column[i] === row) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) {
      setWinner(row);
      return;
    }

    // Verificar si hay un ganador en la diagonal
    count = 1;
    for (let i = 1; i < 4; i++) {
      if (
        columnIndex - i >= 0 &&
        rowIndex - i >= 0 &&
        board[columnIndex - i][rowIndex - i] === row
      ) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 4; i++) {
      if (
        columnIndex + i < board.length &&
        rowIndex + i < column.length &&
        board[columnIndex + i][rowIndex + i] === row
      ) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) {
      setWinner(row);
      return;
    }

    // Verificar si hay un ganador en la diagonal inversa
    count = 1;
    for (let i = 1; i < 4; i++) {
      if (
        columnIndex - i >= 0 &&
        rowIndex + i < column.length &&
        board[columnIndex - i][rowIndex + i] === row
      ) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 4; i++) {
      if (
        columnIndex + i < board.length &&
        rowIndex - i >= 0 &&
        board[columnIndex + i][rowIndex - i] === row
      ) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) {
      setWinner(row);
      return;
    }

    // Verificar si hay un empate
    let tie = true;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < column.length; j++) {
        if (board[i][j] === null) {
          tie = false;
          break;
        }
      }
    }
    if (tie) {
      setWinner(false);
    }

    return;
  };

  const updateBoard = (columnIndex) => {
    if (winner) return;
    // Hacer una copia profunda del tablero
    const newBoard = board.map((column) => {
      return [...column];
    });

    // Encontrar la primera fila vacía en la columna seleccionada
    const rowIndex = newBoard[columnIndex].lastIndexOf(null); // Buscar desde abajo hacia arriba

    if (rowIndex === -1) {
      return; // Salir si la columna está llena
    }

    // Colocar la ficha del jugador en la primera fila vacía
    newBoard[columnIndex][rowIndex] = turn;

    // Actualizar el estado del tablero
    setBoard(newBoard);

    // Verificar si hay un ganador
    checkWinner(newBoard, columnIndex, rowIndex);

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  return (
    <>
      {winner !== null && <Modal winner={winner} resetGame={resetGame} />}
      <h1>Four In Line</h1>
      <button onClick={resetGame}>RESET GAME</button>
      <div className='four-in-line-board'>
        {board.map((column, columnIndex) => (
          <div key={columnIndex} className='column'>
            {column.map((circle, rowIndex) => (
              <Circle
                key={rowIndex}
                updateBoard={() => updateBoard(columnIndex)}
                index={columnIndex}
              >
                {circle}
              </Circle>
            ))}
          </div>
        ))}
      </div>
      <Turn>{turn}</Turn>
    </>
  );
};
export default FourInLineBoard;
