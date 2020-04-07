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
			<Part part={props.part[0]} number={props.exercises[0]} />
			<Part part={props.part[1]} number={props.exercises[1]} />
			<Part part={props.part[2]} number={props.exercises[2]} />
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
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content part={parts} exercises={exercises} />
      <Total number={exercises[0] + exercises[1] + exercises[2]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))