import React from 'react'

const Success = ({message}) => {
	const SucessStyle = {
		'color': 'green',
		'background': 'lightgrey',
		'fontSize': 20,
		'borderStyle': 'solid',
		'borderRadius': 5,
		'padding': 10,
		'marginBottom': 10
	}

	if (message === null){
		return null
	}

	return (
		<div style={SucessStyle}>
			{message}
		</div>
	)

}

export default Success