import { useState } from 'react'


const App = () => {
  const Header = (props) => {
    return(
      <h1>{props.title}</h1>
    )
  }

  const title1="give feedback"
  const title2="statistics"
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const StatisticLine = (props) => {
    return(
      // <p>{props.text} {props.value}</p>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )
  }
  const Button = () => {
    return(
      <div>
      <button onClick={()=>{setGood(good+1);setAll(all+1)}}>
        good
      </button>
      <button onClick={()=>{setNeutral(neutral+1);setAll(all+1)}}>
        neutral
      </button>
      <button onClick={()=>{setBad(bad+1);setAll(all+1)}}>
        bad
      </button>
      </div>
    )
  }
    
  const Statistics = () => {
    if (all)
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={all} />
          <StatisticLine text="average" value={good/all-bad/all}/>
          <StatisticLine text="positive" value={good/all*100+" %"}/>
        </tbody>
      </table>
    )
    else return(
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <Header title={title1}/>
      <Button/>
      <Header title={title2}/>
      <Statistics/>
    </div>
  )
}

export default App