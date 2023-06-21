import './statistics.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  totalFeedback,
}) => {
  return (
    <div className="statistics">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Total: {positivePercentage}%</p>
    </div>
  );
};
