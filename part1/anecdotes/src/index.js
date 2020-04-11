import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => {
	return (
		<button onClick={handleClick}>
			{text}
		</button>
	)
}

const HeaderDisplay = ({text}) => {
	return(
		<h1>{text}</h1>
	)
}

const MostVotes = ({points}) => {import React from 'react'
import ReactDOM from 'react-dom'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
	const mostVotes = Math.max(...points)
	if (mostVotes === 0){
		return(
			<p>No votes have been casted yet</p>
		)
	}
	else{
		return(
			<p>{anecdotes[points.indexOf(mostVotes)]} <br /><b>With {mostVotes} votes!</b></p>
		)
	}

}

const App = (props) => {
	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState([])

	if (firstRun){
		firstRun = false
		const initiate = new Array(10+1).join('0').split('').map(parseFloat)
		setPoints(initiate)
	}

	const getRandom = () => {
		setSelected(Math.floor(Math.random() * (anecdotes.length)))
	}

	const updatePoints = () => {
		const copy = [...points]
		copy[selected] += 1
		setPoints(copy)
	}

	return (
		<div>
		<HeaderDisplay text={"Anecdote of the Day"} />
		{props.anecdotes[selected]}
		<br />
		<b>Has {points[selected]} votes</b>
		<br />
		<Button handleClick={updatePoints} text={"Vote!"} />
		<Button handleClick={getRandom} text={"Another!"} />
		<HeaderDisplay text={"Anecdote With Most Votes"} />
		<MostVotes points={points} />
		</div>
	)
}




let firstRun = true
const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
	<App anecdotes={anecdotes} />,
	document.getElementById('root')
)