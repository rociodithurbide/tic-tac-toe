import { useState } from 'react';
import './App.css';
import TicTacToeBoard from './components/TicTacToeBoard/TicTacToeBoard';
import FourInLineBoard from './components/FourInLineBoard/fourinlineboard';

function App() {
  const [navSelected, setNavSelected] = useState('Tic Tac Toe');

  const handleSelectNav = (select) => {
    setNavSelected(select.target.innerText);
  };

  return (
    <main>
      <nav>
        <ul>
          <li>
            <button onClick={handleSelectNav}>Tic Tac Toe</button>
          </li>
          <li>
            <button onClick={handleSelectNav}>Four InLine</button>
          </li>
          <li>
            <button onClick={handleSelectNav}>Battleship</button>
          </li>
        </ul>
      </nav>
      <section>
        {(navSelected === 'Tic Tac Toe' && <TicTacToeBoard />) ||
          (navSelected === 'Four InLine' && <FourInLineBoard />)}
      </section>
    </main>
  );
}

export default App;
