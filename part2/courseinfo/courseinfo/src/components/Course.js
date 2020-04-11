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
			{course.parts.map(part => 
				<Part part={part.name} number={part.exercises} />
			)}
		</div>
	)
}

const Total = ({course}) => {
	//log("Total", "execution")
	const initialValue = 0
	const reducer = (accumulator, item) => accumulator + item.exercises
	const total = course.parts.reduce(reducer,initialValue)
	//course.parts.map(part => total += part.exercises)
	return (
		<p><b>Number of exercises:</b> {total}</p>
	)
}

const Course = ({course}) => {
	return( 
		<div>
			<Header name={course.name} />
			<Content course={course} />
			<Total course={course} />
		</div>
	)

}

export default Course