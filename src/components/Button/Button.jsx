import './button.css';

export const Button = ({ text, type, handleClick }) => {
  let btnId = '';

  //type should be good, neutral or bad
  switch (type) {
    case 'good':
      btnId = 'good';
      break;
    case 'neutral':
      btnId = 'neutral';
      break;
    case 'bad':
      btnId = 'bad';
      break;
    default:
      break;
  }

  return (
    <button type="button" className="btn" id={btnId} onClick={handleClick}>
      {text}
    </button>
  );
};
