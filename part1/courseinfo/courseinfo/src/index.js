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
		<p>Number of exercises: {props.number[0].exercises + props.number[1].exercises + props.number[2].exercises}</p>
	)
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
	  {
	  	name: 'Fundamentals of React',
	  	exercises: 10
	  },
	  {
	  	name: 'Using props to pass data',
	  	exercises: 7
	  },
	  {
	  	name: 'State of a component',
	  	exercises: 14
	  }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts_array={parts} />
      <Total number={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))