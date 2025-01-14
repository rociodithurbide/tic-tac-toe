import { useState } from 'react';
import Modal from '../Modal/Modal';
import Square from '../Square/Square';
import Turn from '../Turn/Turn';
import { TURNS, WINNER_COMBOS } from '../../constants';

const TicTacToeBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const checkWinner = (board) => {
    // checkea si hay X o O
    // en las posiciones ganadoras
    const check = WINNER_COMBOS.reduce((winner, [a, b, c]) => {
      if (winner) return winner; // Si ya hay ganador, no seguir
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Retorna el ganador
      }
    }, null);
    // checkea si hay empate
    if (check === null) {
      const tie = board.every((square) => square !== null);
      if (tie === true) return false;
    }
    return check;
  };

  const updateBoard = (index) => {
    // no actualizamos esta posición
    // si ya tiene algo
    if (board[index] || winner !== null) return;

    // si no hay nada,
    // actualizamos el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //checkea si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }

    // cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    return;
  };
  return (
    <>
      {winner !== null && <Modal winner={winner} resetGame={resetGame} />}
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>RESET GAME</button>
      <div className='tic-tac-toe-board'>
        {board.map((square, index) => (
          <Square key={index} updateBoard={updateBoard} index={index}>
            {square}
          </Square>
        ))}
      </div>
      <Turn>{turn}</Turn>
    </>
  );
};
export default TicTacToeBoard;
