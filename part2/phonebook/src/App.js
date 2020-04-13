import React, { useState } from 'react'
import Display from './components/Display.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')



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

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const personsToShow = newSearch === '' ? persons : persons.filter(
    person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      Search: <input value={newSearch} onChange={handleSearchChange} />
      <br />
      <h2>Add New Name</h2>
      <form>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
          <br />
          <br />
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <br />
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => 
        <Display key={person.name} name={person.name} number={person.number} />
      )}
    </div>
    )
}

export default App