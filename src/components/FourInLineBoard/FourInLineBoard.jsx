import { useState } from 'react';
import Modal from '../Modal/Modal';
import Circle from '../Circle/Circle';
import Turn from '../Turn/Turn';
import { TURNS } from '../../constants';

const FourInLineBoard = () => {
  const [board, setBoard] = useState(
    Array(7)
      .fill(null)
      .map(() => Array(6).fill(null))
  );
  const [turn, setTurn] = useState(TURNS.X);

  const resetGame = () => {
    return;
  };

  const updateBoard = (newboard) => {
    console.log(newboard);

    //cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  return (
    <>
      <h1>Four In Line</h1>
      <button onClick={resetGame}>RESET GAME</button>
      <div className='four-in-line-board'>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className='row'>
            {row.map((circle, circleIndex) => (
              <Circle
                key={circleIndex}
                updateBoard={updateBoard}
                index={rowIndex}
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
