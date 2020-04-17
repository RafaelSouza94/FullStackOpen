import React from 'react'

const Display = ({name, number, deleteHandler}) => {
	return(
		<div>
			<p><b>{name}:</b> {number}</p>
			<button onClick={deleteHandler}>Delete</button>
		</div>
	)
}

export default Display