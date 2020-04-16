import React, { useState, useEffect } from 'react'
import Display from './components/Display.js'
import AddItems from './components/AddItems.js'
import personsService from './services/book'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const hook = () => {
    personsService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }

  useEffect(hook, [])

  const addName = (event) => {
    event.preventDefault()
    if(persons.filter(person => person.name === newName).length === 0){
      const personObject = {
        name: newName,
        number: newNumber
      }
      personsService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response))
        })
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
      <AddItems newName={newName} handleNameChange={handleNameChange}
       newNumber={newNumber} handleNumberChange ={handleNumberChange} addName={addName} />
      <h2>Numbers</h2>
      {personsToShow.map(person => 
        <Display key={person.name} name={person.name} number={person.number} />
      )}
    </div>
    )
}

export default App