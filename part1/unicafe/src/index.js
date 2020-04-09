import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {
	return(
		<h1>{text}</h1>
	)
}

const Button = ({handleClick, text}) => {
	return(
		<button onClick={handleClick}>
			{text}
		</button>
	)
}

const Display = ({feedback, value}) => {
	return(
		<p><b>Feedback:</b> {feedback} <b>Value:</b> {value}</p>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const feedback_text = "Give Feedback"
	const stats_text = "Statistics"
	const good_name = "Good"
	const neutral_name = "Neutral"
	const bad_name = "Bad"

	const handleGood = () => {
		setGood(good + 1)
	}

	const handleNeutral = () => {
		setNeutral(neutral + 1)
	}

	const handleBad = () => {
		setBad(bad + 1)
	}

	return (
		<div>
			<Header text={feedback_text} />
			<Button handleClick={handleGood} text={good_name} />
			<Button handleClick={handleNeutral} text={neutral_name} />
			<Button handleClick={handleBad} text={bad_name} />
			<Header text={stats_text} />
			<Display feedback={good_name} value={good} />
			<Display feedback={neutral_name} value={neutral} />
			<Display feedback={bad_name} value={bad} />
		</div>
	)
	}

ReactDOM.render(<App />, 
  document.getElementById('root')
)