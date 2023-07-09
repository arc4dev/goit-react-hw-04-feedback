import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { useState } from 'react';

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(initialFeedback);

  const addFeedback = e => {
    const type = e.target.id;

    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, curr) => acc + curr, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={addFeedback}
      />
      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        positivePercentage={countPositiveFeedbackPercentage()}
        totalFeedback={countTotalFeedback()}
      />
    </div>
  );
}

export default App;
