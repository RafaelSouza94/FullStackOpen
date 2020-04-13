import React from 'react'

const Header = ({name}) => {
	return (
		<h2>{name}</h2>
	)
}

const Part = ({part, number}) => {
	return (
		<p><b>{part}:</b> {number}</p>
	)
}

const Content = ({course}) => {
	return (
		<div>
			{course.parts.map(part => 
				<Part key={part.id} part={part.name} number={part.exercises} />
			)}
		</div>
	)
}

const Total = ({course}) => {
	const initialValue = 0
	const reducer = (accumulator, item) => accumulator + item.exercises
	const total = course.parts.reduce(reducer,initialValue)
	//course.parts.map(part => total += part.exercises)
	return (
		<p><b>Number of exercises:</b> {total}</p>
	)
}

const Course = ({courses}) => {

	return( 
		<div>
			{courses.map(course => 
				<div key={course.id}>
					<Header name={course.name} />
					<Content course={course} />
					<Total course={course} />
				</div>
			)}
		</div>
	)

}

export default Course