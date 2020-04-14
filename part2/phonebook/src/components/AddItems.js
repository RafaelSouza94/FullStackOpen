import React from 'react'

const AddItems = ({newName, handleNameChange, newNumber, handleNumberChange, addName}) => {
	return (
		<div>
			<form>
			Name: <input value={newName} onChange={handleNameChange} />
			<br />
			<br />
			Number: <input value={newNumber} onChange={handleNumberChange} />
			<br />
			<button type="submit" onClick={addName}>add</button>
			</form>
		</div>
	)
}

export default AddItems