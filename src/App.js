import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = ((good - bad) / all).toFixed(2);
  const positive = `${((good * 100) / all).toFixed(2)}%`;

  if (all) {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <strong>good</strong>
            </td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>
              <strong>neutral</strong>
            </td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>
              <strong>bad</strong>
            </td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>
              <strong>all</strong>
            </td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>
              <strong>average</strong>
            </td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>
              <strong>positive</strong>
            </td>
            <td>{positive}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return <div>no feedback given</div>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <br />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};
export default App;
