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

const DisplayStat = ({feedback, value}) => {
	return(
		<p><b>Feedback:</b> {feedback} <b>Value:</b> {value}</p>
	)
}

const DisplayAvg = ({value}) => {
	return(
		<p><b>Average:</b> {value}</p>
	)
}

const DisplayPct = ({value}) => {
	return(
		<p><b>Positive Pct:</b> {value} % </p>
	)
}




const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [total, setTotal] = useState(0)
	const feedback_text = "Give Feedback"
	const stats_text = "Statistics"
	const good_name = "Good"
	const neutral_name = "Neutral"
	const bad_name = "Bad"
	const total_name = "Total"

	const handleGood = () => {
		setGood(good + 1)
		setTotal(total + 1)
	}

	const handleNeutral = () => {
		setNeutral(neutral + 1)
		setTotal(total + 1)
	}

	const handleBad = () => {
		setBad(bad + 1)
		setTotal(total + 1)
	}

	return (
		<div>
			<Header text={feedback_text} />
			<Button handleClick={handleGood} text={good_name} />
			<Button handleClick={handleNeutral} text={neutral_name} />
			<Button handleClick={handleBad} text={bad_name} />
			<Header text={stats_text} />
			<DisplayStat feedback={good_name} value={good} />
			<DisplayStat feedback={neutral_name} value={neutral} />
			<DisplayStat feedback={bad_name} value={bad} />
			<DisplayStat feedback={total_name} value={total} />
			<DisplayAvg value={(good - bad) / total} />
			<DisplayPct value={(good * 100) / total} />
		</div>
	)
	}

ReactDOM.render(<App />, 
  document.getElementById('root')
)