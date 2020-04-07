import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
	return (
		<p>Hello {props.name}, you are {props.age} years old.</p>
	)
}

const App = () => {
	const name = "Joe"
	const age = 250

	return (
		<div>
			<h1> Greetings </h1>
			<Hello name='Tretas' age={26 + 10}/>
			<Hello name={name} age={age}/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
