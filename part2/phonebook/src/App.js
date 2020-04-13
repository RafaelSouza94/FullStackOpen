import React, { useState } from 'react'
import Display from './components/Display.js'

const App = () => {
  const [ persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if(persons.filter(person => person.name === newName).length === 0){
      const personObject = {
        name: newName
      }
      setPersons(persons.concat(personObject))
    }
    else{
      alert(`${newName} is already in the phonebook!`)
    }
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Display key={person.name} name={person.name} />
      )}
    </div>
    )
}

export default App