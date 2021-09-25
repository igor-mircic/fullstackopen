import { useState } from "react";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <table>
        <tbody>
          <StatisticsLine text={"good"} value={good} />
          <StatisticsLine text={"neutral"} value={neutral} />
          <StatisticsLine text={"bad"} value={bad} />
          <StatisticsLine text={"all"} value={all} />
          <StatisticsLine text={"average"} value={(good - bad) / all} />
          <StatisticsLine text={"positive"} value={(good / all) * 100} />
        </tbody>
      </table>
    );
  }
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateState = (value, setFunc) => () => setFunc(value + 1);

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <div>
          <Button text="good" onClick={updateState(good, setGood)} />
          <Button text="neutral" onClick={updateState(neutral, setNeutral)} />
          <Button text="bad" onClick={updateState(bad, setBad)} />
        </div>
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
}

export default App;
