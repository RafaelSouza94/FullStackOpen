import React, { useState, useEffect } from 'react'
import Display from './components/Display.js'
import AddItems from './components/AddItems.js'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log("Promise fulfilled")
        setPersons(response.data)
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
      <AddItems newName={newName} handleNameChange={handleNameChange}
       newNumber={newNumber} handleNumberChange ={handleNumberChange} />
      <h2>Numbers</h2>
      {personsToShow.map(person => 
        <Display key={person.name} name={person.name} number={person.number} />
      )}
    </div>
    )
}

export default App