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
		<h1>{props.course.name}</h1>
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
			<Part part={props.course.parts[0].name} number={props.course.parts[0].exercises} />
			<Part part={props.course.parts[1].name} number={props.course.parts[1].exercises} />
			<Part part={props.course.parts[2].name} number={props.course.parts[2].exercises} />
		</div>
	)
}

const Total = (props) => {
	log("Total", "execution")
	return (
		<p>Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
	)
}


const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
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
	}

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))