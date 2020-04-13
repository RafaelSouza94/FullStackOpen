import React, { useState } from 'react'
import Display from './components/Display.js'

const App = () => {
  const [ persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if(persons.filter(person => person.name === newName).length === 0){
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
    }
    else{
      alert(`${newName} is already in the phonebook!`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Display key={person.name} name={person.name} number={person.number} />
      )}
    </div>
    )
}

export default App