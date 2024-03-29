import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const len=anecdotes.length
  const [points, setPoints] = useState(new Uint8Array(len))
  const [selected, setSelected] = useState(0)
  const updatepoints = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }
  const Header = (props) => {
    return(
      <h1> {props.title}</h1>
    )
  }
  return (
    <div>
      <Header title="Anecdote of the day"/>
      {anecdotes[selected]}<br/>
      <p>has {points[selected]} votes</p>
      <button onClick={(updatepoints)}>
            vote
      </button>
      <button onClick={()=>{setSelected(Math.floor(Math.random()*7))}}>
            next anecdote
      </button>
      <Header title="Anecdote with most votes"/>
      {anecdotes[points.indexOf(Math.max(...points))]}
      <p>has {Math.max(...points)} votes</p>
    </div>
  )
}

export default App