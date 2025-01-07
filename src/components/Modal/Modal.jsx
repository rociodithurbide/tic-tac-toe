import './modal.css';

const Modal = ({ winner, resetGame }) => {
  return (
    <div className='modal-container'>
      <span>The winner is </span>
      <span className='winner'>{winner}</span>
      <button onClick={resetGame}>RESET GAME</button>
    </div>
  );
};
export default Modal;
