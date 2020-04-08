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
	const [ counter, setCounter ]  = useState(0)
		
	const increaseByOne = () => setCounter(counter + 1)
	const setToZero = () => setCounter(0)

	return (
		<div>
			{counter}
			<br />
			<button onClick={increaseByOne} >
				plus
			</button>
			<button onClick={setToZero}>
				zero
			</button>
		</div>
	)	
}

let counter = 1

ReactDOM.render(<App counter={counter}/>, document.getElementById('root'))
