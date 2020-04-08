import React from 'react'
import ReactDOM from 'react-dom'

//TODO: refactor Executing component into a function

const logging = true

function log(message, type) {
	if ((type === "execution") && (logging))
		console.log("Executing " + message + " component");
}

const Header = (props) => {
	log("Header", "execution")
	return (
		<h1>{props.course}</h1>
	)
}

const Part = (props) => {
	log("Part", "execution")
	return (
		<p>Number of exercises {props.number}</p>
	)
}

const Content = (props) => {
	log("Content", "execution")
	return (
		<div>
			<Part part={props.parts_array[0].name} number={props.parts_array[0].exercises} />
			<Part part={props.parts_array[1].name} number={props.parts_array[1].exercises} />
			<Part part={props.parts_array[2].name} number={props.parts_array[2].exercises} />
		</div>
	)
}

const Total = (props) => {
	log("Total", "execution")
	return (
		<p>Number of exercises: {props.number}</p>
	)
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
  	name: 'Fundamentals of React',
  	exercises: 10
  }
  const part2 = {
  	name: 'Using props to pass data',
  	exercises: 7
  }
  const part3 = {
  	name: 'State of a component',
  	exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content parts_array={[part1, part2, part3]} />
      <Total number={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))