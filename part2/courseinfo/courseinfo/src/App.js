import React from 'react'
import Course from './components/Course'

const App = () => {
	const title = 'Web Development Course'
	const courses = [
		{
			id: 1,
			name: 'Half Stack Application Development',
			parts: [
				{
					name: 'Fundamentals of React',
					exercises: 10,
					id: 1
				},
				{
					name: 'Using props to pass data',
					exercises: 7,
					id: 2
				},
				{
					name: 'State of a component',
					exercises: 14,
					id: 3
				},
				{
					name: 'Redux',
					exercises: 11,
					id: 11
				}
			]
		},
		{
			name: 'Node.js',
			id: 2,
			parts: [
				{
					name: 'Routing',
					exercises: 3,
					id: 1
				},
				{
					name: 'Middlewares',
					exercises: 7,
					id: 2
				}
			]
		}
	]

  return (
    <div>
    	<h1>{title}</h1>
    	{console.log(courses)}
		<Course courses = {courses} />
    </div>
  )
}

export default App