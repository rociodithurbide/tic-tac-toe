import './square.css';

const Square = ({ children, index, updateBoard }) => {
  return (
    <div className='square' onClick={() => updateBoard(index)}>
      {children}
    </div>
  );
};

export default Square;
