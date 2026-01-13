import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = ((good * 100) / all) + " %"

  return (
    <>
      <Header title={"give feedback"} />
      <Button onClick={handleGoodClick} text={"good"} />
      <Button onClick={handleNeutralClick} text={"neutral"} />
      <Button onClick={handleBadClick} text={"bad"} />

      <Header title={"statistics"} />
      <Content feedback={"good"} value={good}/>
      <Content feedback={"neutral"} value={neutral}/>
      <Content feedback={"bad"} value={bad}/>
      <Content feedback={"all"} value={all}/>
      <Content feedback={"average"} value={average}/>
      <Content feedback={"positive"} value={positive}/>
    </>
  )
}

export const Header = ({ title }) => <h1>{title}</h1>

export const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

export const Content = ({ feedback, value }) => <p>{feedback} {value}</p>

export default App