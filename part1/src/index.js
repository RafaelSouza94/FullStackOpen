import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
	const bornYear = () => new Date().getFullYear() - age

	return (
		<div>
			<p>Hello {name}, you are {age} years old.</p>
			<p>So you were probably born in {bornYear()}</p>
		</div>
	)
}

/*
const App = () => {
	const name = "Joe"
	const age = 250

	return (
		<div>
			<h1> Greetings </h1>
			<Hello name='Tretas' age={26 + 10}/>
			<br />
			<Hello name={name} age={age}/>
		</div>
	)
}
*/

const App = (props) => {
	const [value, setValue] = useState(10)

	const setToValue = (newValue) => () => {
		setValue(newValue)
	}

	return (
		<div>
			{value}
			<button onClick={setToValue(1000)}>thousand</button>
			<button onClick={setToValue(0)}>zero</button>
			<button onClick={setToValue(value + 1)}>increment</button>
		</div>
	)
}

/*
const Display = ({ counter }) => {
	return (
		<p>{counter}</p>
	)
}

const Button = (props) => {
	return (
		<button onClick={props.handleClick}>
			{props.text}
		</button>
	)
}

const History = (props) => {
	if (props.allClicks.length === 0) {
		return (
			<div>
				the app is used by pressing the buttons
			</div>
		)
	}

	return (
		<div>
			button press history: {props.allClicks.join(' ')}
		</div>	
	)
}


const App = (props) => {
	const [ counter, setCounter ]  = useState(0)
	const [left, setLeft] = useState(0)
	const [right, setRight] = useState(0)
	const [allClicks, setAll] = useState([])

	const handleLeftClick = () => {
		setAll(allClicks.concat('L'))
		setLeft(left + 1)
	}

	const handleRightClick = () => {
		setAll(allClicks.concat('R'))
		setRight(right + 1)
	}
		
	const increaseByOne = () => setCounter(counter + 1)
	const decreaseByOne = () => setCounter(counter - 1)
	const setToZero = () => setCounter(0)

	return (
		<div>
			{left}
			<Button 
				handleClick={handleLeftClick}
				text='left'
			/>
			<Button 
				handleClick={handleRightClick}
				text='right'
			/>
			{right}
			<br />
			<History allClicks={allClicks} />
		</div>
	)	
}

let counter = 1*/

ReactDOM.render(<App />, document.getElementById('root'))
