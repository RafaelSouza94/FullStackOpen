import React from 'react'
//import log from './Log'

const Header = ({name}) => {
	//log("Header", "execution")
	return (
		<h1>{name}</h1>
	)
}

const Part = ({part, number}) => {
	//log("Part", "execution")
	return (
		<p><b>{part}:</b> {number}</p>
	)
}

const Content = ({course}) => {
	//log("Content", "execution")
	return (
		<div>
			<Part part={course.parts[0].name} number={course.parts[0].exercises} />
			<Part part={course.parts[1].name} number={course.parts[1].exercises} />
			<Part part={course.parts[2].name} number={course.parts[2].exercises} />
		</div>
	)
}

const Total = (props) => {
	//log("Total", "execution")
	return (
		<p>Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
	)
}

const Course = ({course}) => {
	return( 
		<div>
			<Header name={course.name} />
			<Content course={course} />
		</div>
	)

}

export default Course