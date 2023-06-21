import { Button } from 'components/Button/Button';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <div>
        {options.map(option => (
          <Button
            key={option}
            text={option}
            type={option}
            handleClick={onLeaveFeedback}
          />
        ))}
      </div>
    </div>
  );
};
