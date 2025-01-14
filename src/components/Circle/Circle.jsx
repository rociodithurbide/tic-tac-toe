import './circle.css';

const Circle = ({ children, index, updateBoard }) => {
  return (
    <div className='circle' onClick={() => updateBoard(index)}>
      {children}
    </div>
  );
};
export default Circle;
