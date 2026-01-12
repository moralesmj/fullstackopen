import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <>
      <Header title={"give feedback"} />
      <Button onClick={handleGoodClick} text={"good"} />
      <Button onClick={handleNeutralClick} text={"neutral"} />
      <Button onClick={handleBadClick} text={"bad"} />

      <Header title={"statistics"} />
      <Statistics feedback={"good"} value={good}/>
      <Statistics feedback={"neutral"} value={neutral}/>
      <Statistics feedback={"bad"} value={bad}/>
    </>
  )
}

export const Header = ({ title }) => {
  return <h1>{title}</h1>
}

export const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

export const Statistics = ({ feedback, value }) => {
  return <p>{feedback} {value}</p>
}

export default App