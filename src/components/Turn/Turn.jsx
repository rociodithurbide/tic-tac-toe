import './turn.css';
const Turn = ({ children }) => {
  return (
    <>
      <span className='turn-text'>Turn</span>
      <div className='turn'>{children}</div>
    </>
  );
};
export default Turn;
